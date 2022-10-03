<template>
    <tr>
        <td>{{sn}}</td>
        <td>Sapele NiPP</td>
        <td>{{pData.mw}}Mw</td>
        <td>{{pData.mvar}}Mx</td>
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
          let idArr = ['gt1', 'gt2', 'gt3', 'gt4'];
          let statusCheck = '';
            if(this.station.units) {
                let unitData = '';
                statusCheck = '';
                this.station.units.forEach((unit) => {
                    unitData = unit;
                    if(idArr.includes(unit.id)) {
                        //console.log('mw', unit.powerData.mw);
                        mw += this.getPositiveNumber(unit.powerData.mw);
                        mvar += this.getPositiveNumber(unit.powerData.mvar);
                        if(statusCheck == '') statusCheck = unit.powerData.V;
                    }
                })
                // console.log('statusCheck1', statusCheck);
            }
            
            mw = Object.is(NaN, mw) ? 0 : (mw.toFixed(2) < 0) ? (mw.toFixed(2) * -1) : mw.toFixed(2);
            mvar = Object.is(NaN, mvar) ? 0 : (mvar.toFixed(2) < 0) ? (mvar.toFixed(2) * -1) : mvar.toFixed(2);
            
            if(this.connected===true || statusCheck != '') this.status = 1;
            let totalData = { mw, mvar };
            this.$emit('total', 'SapeleNipp', totalData);
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
        return "greenColor"
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
