<template>
    <tr>
        <td>{{sn}}</td>
        <td>IHOVBOR (GAS)</td>
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
          let mw = 0;
          let mvar = 0;
          let kvArr = [];
          let kv = 0;
          let statusCheck = '';
            if(this.station.units) {
                let unitData = '';
                statusCheck = '';
                this.station.units.forEach((unit) => {
                    if(unit.station == 'Ihovbor NIPP') {
                        unitData = unit;
                        //console.log('mw', unit.powerData.mw);
                        mw += this.getPositiveNumber(unit.powerData.mw);
                        mvar += this.getPositiveNumber(unit.powerData.mvar);
                        if(unit.powerData.V > 0) kv = unit.powerData.V
                        if(statusCheck == '') statusCheck = unit.powerData.V;
                        // console.log('statusCheck2', statusCheck);
                        //if(unit.powerData.V > 0) kvArr.push(parseFloat(unit.powerData.V));
                    }
                })
                // console.log('statusCheck1', statusCheck);
            }
            
            mw = Object.is(NaN, mw) ? 0 : (mw.toFixed(2) < 0) ? (mw.toFixed(2) * -1) : mw.toFixed(2);
            mvar = Object.is(NaN, mvar) ? 0 : (mvar.toFixed(2) < 0) ? (mvar.toFixed(2) * -1) : mvar.toFixed(2);
            
            //kv = this.averageVoltage(kvArr);
            //console.log('kv',kvArr);
            //kva = Object.is(NaN, kva) ? 0 : kva.toFixed(2);
            // console.log('statusCheck', statusCheck);
            if(this.connected===true || statusCheck != '') this.status = 1;
            let totalData = { mw, mvar, kv };
            this.$emit('total', 'Ihovbor', totalData);
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
      },
      averageVoltage(kvArr) {
          if(kvArr.length > 0) {
              let total = kvArr.reduce((curr, next) => curr + next, 0);
              //console.log('kv total: ', kvArr.length);
              return total/kvArr.length;
          }
      }
  },
  mounted() {
      this.setConnectionLostTime();
  }
};
</script>
