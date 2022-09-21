<template>
    <tr>
        <td>{{sn}}</td>
        <td>Delta</td>
        <td>{{pData.mw}}Mw</td>
        <td>{{pData.mvar}}Mx</td>
        <td :class="statusColor">{{statusName}}</td>
        <!-- {{station3}} -->
        <!-- {{connected}}
        {{connectionLostTime}} -->
        
    </tr>
</template>

<style scoped>

</style>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  
  props: ['station3', 'station2', 'connected', 'sn'],
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
            let delta2Mw = 0;
            let delta2Mvar = 0;
            let delta3Mw = 0;
            let delta3Mvar = 0;
            let kvArr = [];
            let kv = 0;
            let statusCheck = '';
            if(this.station3.lines) {
                    this.station3.lines.forEach((line) => {
                        delta3Mw += parseFloat(line.gd.mw);
                        delta3Mvar += parseFloat(line.gd.mvar);
                        if(statusCheck == '') statusCheck = line.gd.V;
                    })
                    delta3Mw = Object.is(NaN, delta3Mw) ? 0 : (delta3Mw < 0) ? (delta3Mw * -1) : delta3Mw;
                    delta3Mvar = Object.is(NaN, delta3Mvar) ? 0 : (delta3Mvar < 0) ? (delta3Mvar * -1) : delta3Mvar;
            }
          /*
{"id":"delta2","t":"15:17:53", "lines":[{"id":"tr3","gd":{"mw": 0.00,"A": 0.00,"V":329.04,"mvar": 0.00}},{"id":"tr4","gd":{"mw":30.04,"A":52.34,"V":332.94,"mvar": 2.41}}]}
          */
            if(this.station2.lines) {
                    this.station2.lines.forEach((line) => {
                        delta2Mw += parseFloat(line.gd.mw);
                        delta2Mvar += parseFloat(line.gd.mvar);
                        if(statusCheck == '') statusCheck = line.gd.V;
                    })
                    delta2Mw = Object.is(NaN, delta2Mw) ? 0 : (delta2Mw < 0) ? (delta2Mw * -1) : delta2Mw;
                    delta2Mvar = Object.is(NaN, delta2Mvar) ? 0 : (delta2Mvar < 0) ? (delta2Mvar * -1) : delta2Mvar;
            }
          //console.log(odukpaniMw);
          mw = delta2Mw + delta3Mw;
          mvar = delta2Mvar + delta3Mvar; 
          mw = mw.toFixed(2);
          mvar = mvar.toFixed(2);
            //kv = this.averageVoltage(kvArr);
            //console.log('kv',kvArr);
            //kva = Object.is(NaN, kva) ? 0 : kva.toFixed(2);
            if(this.connected===true || statusCheck != '') this.status = 1;
            let totalData = { mw, mvar };
            this.$emit('total', 'Delta', totalData);
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
      setConnectionLostTime() {
          var dt = new Date();
          //console.log('seconds', dt.getTime() / 1000);
          this.connectionLostTime = (dt.getTime() / 1000) + this.connectionLostWaitPeriod;
      },
      checkConnectionWaitingPeriod() {
          var dt = new Date();
          this.status = ((dt.getTime() / 1000) < this.connectionLostTime) ? 1 : 0;
          //console.log(this.status);
      }
  },
  mounted() {
      this.setConnectionLostTime();
  }
};
</script>
