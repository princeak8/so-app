<template>
    <tr>
        <td>{{sn}}</td>
        <td>Shiroro</td>
        <td>{{pData.mw}}Mw</td>
        <td>{{pData.mvar}}Mx</td>
        <td :class="statusColor">{{statusName}}</td>
        <!-- {{station}} -->
        <!-- {{this.connected}}
        {{connectionLostTime}} -->
    </tr>

    <!-- shiroro {
                "id":"shiroroPs","t":"22:3:12", 
                "units":[
                            {"id":"411g1","gd":{"mw":115.83,"A":4312.12,"V":15.56,"mvar":-8.81}},
                            {"id":"411g2","gd":{"mw":149.38,"A":5512.22,"V":15.65,"mvar":-1.21}},
                            {"id":"411g3","gd":{"mw":140.49,"A":5177.83,"V":15.69,"mvar": 2.42}},
                            {"id":"411g4","gd":{"mw":155.06,"A":5761.47,"V":15.54,"mvar": 2.65}}
                        ]
            } -->
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
            this.$emit('total', 'Shiroro', totalData);
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
          //console.log('seconds', dt.getTime() / 1000);
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
      //console.log('station: ',this.station)
  }
};
</script>
