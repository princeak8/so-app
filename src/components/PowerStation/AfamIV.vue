<template>
    <tr>
        <td>{{sn}}</td>
        <td>Afam IV</td>
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
        connectionLostTime: 0,
    };
  },
    // {"id":"afamIv_vPs","t":"15:20:24", 
    //     "units":[{"id":"gt17","td":{"mw":50.76,"A":3625.19,"V":10.79,"mvar":44.61}},{"id":"gt18","td":{"mw": 0.00,"A": 0.00,"V": 0.00,"mvar": 0.00}}]
    // }
    
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
                        // console.log('mw', unit.powerData.mw);
                    //(typeof myVar === 'string' || myVar instanceof String)
                    // let mwVal = parseFloat(unit.powerData.mw);
                    //console.log(unit.id+' mw: '+mwVal);
                    mw += this.getPositiveNumber(unit.powerData.mw);
                    // console.log('mwss', mw);
                    mvar += this.getPositiveNumber(unit.powerData.mvar);
                    if(statusCheck == '') statusCheck = unit.powerData.V;
                })
            }
            // console.log('mws', mw);
            mw = Object.is(NaN, mw) ? 0 : (mw.toFixed(2) < 0) ? (mw.toFixed(2) * -1) : mw.toFixed(2);
            mvar = Object.is(NaN, mvar) ? 0 : (mvar.toFixed(2) < 0) ? (mvar.toFixed(2) * -1) : mvar.toFixed(2);
            
            //kv = this.averageVoltage(kvArr);
            //console.log('kv',kvArr);
            //kva = Object.is(NaN, kva) ? 0 : kva.toFixed(2);
            if(this.connected===true || statusCheck != '') this.status = 1;
            let totalData = { mw, mvar };
            this.$emit('total', 'AfamIV', totalData);
            return totalData;
      },
      statusName() {
          // console.log('AfamIV Status: ', this.status);
          let name = '';
          switch(this.status) {
            case 0 : name = 'Connection Lost'; break;
            case 1 : name = 'Connected'; break;
            case -1 : name = 'Awaiting Connection'; break; 
          }
          // console.log('AfamIV Status Name: ', name);
          return name;
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
