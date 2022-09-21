<template>
    <tr>
        <td>{{sn}}</td>
        <td>Okpai</td>
        <td>{{pData.mw}}Mw</td>
        <td>{{pData.mvar}}Mx</td>
        <td :class="statusColor">{{statusName}}</td>
        <!-- {{station}} -->
        <!-- {{this.connected}}
        {{connectionLostTime}} -->
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
        connectionLostTime: '',
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
                    unitData = unit;
                    mw += this.getPositiveNumber(unit.powerData.mw);
                    // console.log('mwss', mw);
                    mvar += this.getPositiveNumber(unit.powerData.mvar);
                    if(statusCheck == '') statusCheck = unit.powerData.V;
                })
            }
            // console.log('mws', mw);
            mw = Object.is(NaN, mw) ? 0 : (mw.toFixed(2) < 0) ? (mw.toFixed(2) * -1) : mw.toFixed(2);
            mvar = Object.is(NaN, mvar) ? 0 : (mvar.toFixed(2) < 0) ? (mvar.toFixed(2) * -1) : mvar.toFixed(2);
            
            if(this.connected===true || statusCheck != '') this.status = 1;
            let totalData = { mw, mvar };
            this.$emit('total', 'Okpai', totalData);
            return totalData;
      },
      statusName() {
          switch(this.status) {
            case 0 : return 'Connection Lost'; break;
            case 1 : return 'Connected'; break;
            case -1 : return 'Not Connected'; break; 
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
          //console.log('seconds', dt.getTime() / 1000);
          this.connectionLostTime = (dt.getTime() / 1000) + this.connectionLostWaitPeriod;
      },
      checkConnectionWaitingPeriod() {
          //console.log('check waiting');
          var dt = new Date();
          this.status = ((dt.getTime() / 1000) < this.connectionLostTime) ? 1 : 0;
      }
  },
  mounted() {
      this.setConnectionLostTime();
      //console.log('station: ',this.station)
  }
};
</script>
