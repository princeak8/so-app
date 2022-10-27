<template>
    <tr>
        <td>{{sn}}</td>
        <td>OMOTOSHO (GAS)</td>
        <td>{{pData.mw}}Mw</td>
        <td>{{pData.mvar}}Mx</td>
        <td :class="statusColor">{{statusName}}</td>
        <!-- {{station2}} -->
        <!-- {{connected}}
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
  computed: {
    ...mapState(['connectionLostWaitPeriod']),
      pData() {
            //console.log('test', this.station);
            this.setConnectionLostTime();
            let mw = 0;
            let mvar = 0;
            let omotosho1Mw = 0;
            let omotosho1Mvar = 0;
            let omotosho2Mw = 0;
            let omotosho2Mvar = 0;
            let kvArr = [];
            let kv = 0;
            let statusCheck = '';
            if(this.station.omotosho1.lines) {
                    this.station.omotosho1.lines.forEach((line) => {
                        omotosho1Mw += this.getPositiveNumber(line.gd.mw);
                        omotosho1Mvar += this.getPositiveNumber(line.gd.mvar);
                        if(statusCheck == '') statusCheck = line.gd.V;
                    })
                    omotosho1Mw = Object.is(NaN, omotosho1Mw) ? 0 : (omotosho1Mw < 0) ? (omotosho1Mw * -1) : omotosho1Mw;
                    omotosho1Mvar = Object.is(NaN, omotosho1Mvar) ? 0 : (omotosho1Mvar < 0) ? (omotosho1Mvar * -1) : omotosho1Mvar;
            }
          /*
{"id":"omotosho2","t":"15:17:53", "lines":[{"id":"tr3","gd":{"mw": 0.00,"A": 0.00,"V":329.04,"mvar": 0.00}},{"id":"tr4","gd":{"mw":30.04,"A":52.34,"V":332.94,"mvar": 2.41}}]}
          */
// {"id":"omotosho2","t":"4:17:48", "lines":[{"id":"tr3","gd":{"mw":-30.21,"A":53.13,"V":329.06,"mvar":-1.90}},{"id":"tr4","gd":{"mw": 0.00,"A": 0.00,"V":333.02,"mvar": 0.00}}]}
            if(this.station.omotosho2.lines) {
                    this.station.omotosho2.lines.forEach((line) => {
                        omotosho2Mw += (parseFloat(line.gd.mw) > 0) ? parseFloat(line.gd.mw) : 0;
                        omotosho2Mvar += (parseFloat(line.gd.mvar) > 0) ? parseFloat(line.gd.mvar) : 0;
                        if(statusCheck == '') statusCheck = line.gd.V;
                    })
                    omotosho2Mw = Object.is(NaN, omotosho2Mw) ? 0 : (omotosho2Mw < 0) ? (omotosho2Mw * -1) : omotosho2Mw;
                    omotosho2Mvar = Object.is(NaN, omotosho2Mvar) ? 0 : (omotosho2Mvar < 0) ? (omotosho2Mvar * -1) : omotosho2Mvar;
            }
          //console.log(odukpaniMw);
          mw = omotosho1Mw + omotosho2Mw;
          mvar = omotosho1Mvar + omotosho2Mvar; 
          mw = mw.toFixed(2);
          mvar = mvar.toFixed(2);
            //kv = this.averageVoltage(kvArr);
            //console.log('kv',kvArr);
            //kva = Object.is(NaN, kva) ? 0 : kva.toFixed(2);
            if(this.connected===true || statusCheck != '') this.status = 1;
            let totalData = { mw, mvar };
            this.$emit('total', 'OmotoshoGas', totalData);
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
  }
};
</script>
