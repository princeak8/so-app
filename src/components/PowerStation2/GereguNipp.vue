<template>
    <tr>
        <td>{{sn}}</td>
        <td><b>GEREGU NIPP (GAS)</b></td>
        <td>{{pData.mw}}Mw</td>
        <td>{{pData.kv}}KV</td>
        <td :class="statusColor">{{statusName}}</td>
        <!-- {{station}} -->
    </tr>
</template>

<style scoped>

</style>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  props: ['station', 'connected', 'sn'],
  data() {
    return {
        status: -1,
        connectionLostTime: 0,
    };
  },
  computed: {
      ...mapState(['connectionLostWaitPeriod']),
      pData() {
          //console.log('test', this.station);
          this.setConnectionLostTime();
            let mwTs = 0;
            let mwPs = 0;
            let mvarTs = 0;
            let mvarPs = 0;
            let mw = 0;
            let mvar = 0;
            let kv = 0;
            let statusCheck = '';
            if(this.station.units) {
                let unitData = '';
                statusCheck = '';
                this.station.units.forEach((unit) => {
                    if(unit.station == 'Geregu TS') {
                        unitData = unit;
                        //console.log('mw', unit.powerData.mw);
                        mwTs += this.getPositiveNumber(unit.powerData.mw);
                        mvarTs += this.getPositiveNumber(unit.powerData.mvar);
                        if(unit.powerData.V > 0) kv = unit.powerData.V
                        // kv = this.getPositiveNumber(unit.powerData.V);
                    }
                    if(unit.station == 'Geregu Power Station') {
                        unitData = unit;
                        //console.log('mw', unit.powerData.mw);
                        mwPs += this.getPositiveNumber(unit.powerData.mw);
                        mvarPs += this.getPositiveNumber(unit.powerData.mvar);
                    }
                    if(statusCheck == '') statusCheck = unit.powerData.V;
                })
            }
            mwTs = Object.is(NaN, mwTs) ? 0 : (mwTs.toFixed(2) < 0) ?  (mwTs.toFixed(2) * -1) : mwTs.toFixed(2);
            mvarTs = Object.is(NaN, mvarTs) ? 0 : (mvarTs.toFixed(2) < 0) ? (mvarTs.toFixed(2) * -1) : mvarTs.toFixed(2);
            mwPs = Object.is(NaN, mwPs) ? 0 : (mwPs.toFixed(2) < 0) ?  (mwPs.toFixed(2) * -1) : mwPs.toFixed(2);
            mvarPs = Object.is(NaN, mvarPs) ? 0 : (mvarPs.toFixed(2) < 0) ? (mvarPs.toFixed(2) * -1) : mvarPs.toFixed(2);
            // console.log(`mw = ${mvarPs} - ${mvarTs}`);
            mw = mwPs - mwTs;
            mvar = mvarTs - mvarPs;
            mw = (mw.toFixed(2) < 0) ?  (mw.toFixed(2) * -1) : mw.toFixed(2);
            mvar = (mvar.toFixed(2) < 0) ? (mvar.toFixed(2) * -1) : mvar.toFixed(2);
            if(this.connected===true || statusCheck != '') this.status = 1;
            let totalData = { mw, mvar, kv };
            this.$emit('total', 'GereguNipp', totalData);
            return totalData;
      },
      statusName() {
          switch(this.status) {
            case 0 : return 'Connection Lost'; break;
            case 1 : return 'Connected'; break;
            case -1 : return 'Awaiting Connection'; break; 
          }
      },
    statusColor() {
      if(this.status == 1) {
        return "darkGreenColor"
      }
      return "redColor"
    },
    unitStyle() {
      if(this.text.includes('loading')) {
        return "nonActiveUnit"
      }
      return "activeUnit"
    }
  },
  methods: {
      getPositiveNumber(val) {
          return (isNaN(parseFloat(val))) ? 0 : (parseFloat(val) > 0) ? parseFloat(val) : (parseFloat(val) * -1);
      },
      setConnectionLostTime() {
          var dt = new Date();
          this.connectionLostTime = (dt.getTime() / 1000) + this.connectionLostWaitPeriod;
      },
      checkConnectionWaitingPeriod() {
          if(this.status > -1) {
                var dt = new Date();
                this.status = ((dt.getTime() / 1000) < this.connectionLostTime) ? 1 : 0;
                //console.log(this.status);
          }
      }
  },
  mounted() {
      this.setConnectionLostTime();
  }
};
</script>
