<template>
    <tbody>
        <tr>
            <td>{{sn}}</td>
            <td>Olorunsogo Gas</td>
            <td>{{pData.olorunsogoGasMw}}Mw</td>
            <td>{{pData.olorunsogoGasMvar}}Mx</td>
            <td :class="statusColor">{{statusName}}</td> 
            <!-- {{connected}}
            {{connectionLostTime}} -->
            
        </tr>
        <tr>
            <td>{{sn + 1}}</td>
            <td>Olorunsogo NIPP</td>
            <td>{{pData.olorunsogoNippMw}}Mw</td>
            <td>{{pData.olorunsogoNippMvar}}Mx</td>
            <td :class="statusColor">{{statusName}}</td>
            
        </tr>
    </tbody>
    <!-- {
        "id":"olorunsogo1","t":"18:19:57", 
        "lines":
        [
            {"id":"tr1","gd":{"mw": 0.00,"A": 0.00,"V": 0.00,"mvar": 0.00}},
            {"id":"tr2","gd":{"mw":32.23,"A":61.85,"V":320.28,"mvar":11.62}}
        ]
    } -->
     <!-- {
         "id":"olorunsogoPhase1Gs","t":"18:30:6", 
         "lines":
         [
            {"id":"tr3","gd":{"mw":32.97,"A":62.07,"V":320.32,"mvar": 9.97}},
            {"id":"tr4","gd":{"mw":31.90,"A":60.97,"V":320.01,"mvar":11.11}},
            {"id":"r1w","td":{"mw":114.23,"A":228.90,"V":319.66,"mvar":54.47}},
            {"id":"r2a","td":{"mw":-17.78,"A":51.25,"V":320.51,"mvar":-20.45}}
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
        status: 0,
        connectionLostTime: 0,
    };
  },
  computed: {
    ...mapState(['connectionLostWaitPeriod']),
      pData() {
            //console.log('test', this.station);
            this.setConnectionLostTime();
            let olorunsogoGasMw = 0;
            let olorunsogoGasMvar = 0;
            let olorunsogoNippMw = 0;
            let olorunsogoNippMvar = 0;

            let olorunsogo1Mw = 0;
            let olorunsogo1Mvar = 0;
            let olorunsogo12Mw = 0;
            let olorunsogo12Mvar = 0;

            let olorunsogo2Mw = 0;
            let olorunsogo2Mvar = 0;
            let kvArr = [];
            let kv = 0;
            let statusCheck = '';

            /*
                Olorunsogo1 is bringing in TR1 & TR2
                Olorunsogo2 is bringing in TR3, TR4, R1W, R2W
                OlorunsogoGas = TR1 + TR2 + TR3 + TR4
                Total = R1W + R2W
                OlorunsogoNIPP = Total - OlorunsogoGas
            */

            if(this.station.olorunsogo1.lines) {
                    this.station.olorunsogo1.lines.forEach((line) => { 
                        olorunsogo1Mw += (parseFloat(line.gd.mw) > 0) ? parseFloat(line.gd.mw) : (parseFloat(line.gd.mw) * -1);
                        olorunsogo1Mvar += (parseFloat(line.gd.mvar) > 0) ? parseFloat(line.gd.mvar) : (parseFloat(line.gd.mvar) * -1);
                        if(statusCheck == '') statusCheck = line.gd.V;
                    })
                    olorunsogo1Mw = Object.is(NaN, olorunsogo1Mw) ? 0 : (olorunsogo1Mw < 0) ? (olorunsogo1Mw * -1) : olorunsogo1Mw;
                    olorunsogo1Mvar = Object.is(NaN, olorunsogo1Mvar) ? 0 : (olorunsogo1Mvar < 0) ? (olorunsogo1Mvar * -1) : olorunsogo1Mvar;
                    // console.log('olorunsogo1Mw: ', olorunsogo1Mw);
            }
         
            if(this.station.olorunsogo2.lines) {
                    this.station.olorunsogo2.lines.forEach((line) => { 
                        if(line.id == 'tr3' || line.id == 'tr4') {
                            olorunsogo12Mw += (parseFloat(line.gd.mw) > 0) ? parseFloat(line.gd.mw) : (parseFloat(line.gd.mw) * -1);
                            olorunsogo12Mvar += (parseFloat(line.gd.mvar) > 0) ? parseFloat(line.gd.mvar) : (parseFloat(line.gd.mvar) * -1);
                            if(statusCheck == '') statusCheck = line.gd.V;
                        }else{
                            olorunsogo2Mw += (parseFloat(line.td.mw) > 0) ? parseFloat(line.td.mw) : (parseFloat(line.td.mw) * -1);
                            olorunsogo2Mvar += (parseFloat(line.td.mvar) > 0) ? parseFloat(line.td.mvar) : (parseFloat(line.td.mvar) * -1);
                            if(statusCheck == '') statusCheck = line.td.V;
                        }
                    })
                    olorunsogo12Mw = Object.is(NaN, olorunsogo12Mw) ? 0 : (olorunsogo12Mw < 0) ? (olorunsogo12Mw * -1) : olorunsogo12Mw;
                    olorunsogo12Mvar = Object.is(NaN, olorunsogo12Mvar) ? 0 : (olorunsogo12Mvar < 0) ? (olorunsogo12Mvar * -1) : olorunsogo12Mvar;
                    
                    olorunsogo2Mw = Object.is(NaN, olorunsogo2Mw) ? 0 : (olorunsogo2Mw < 0) ? (olorunsogo2Mw * -1) : olorunsogo2Mw;
                    olorunsogo2Mvar = Object.is(NaN, olorunsogo2Mvar) ? 0 : (olorunsogo2Mvar < 0) ? (olorunsogo2Mvar * -1) : olorunsogo2Mvar;
            }
          //console.log(odukpaniMw);
          olorunsogoGasMw = olorunsogo1Mw + olorunsogo12Mw;
          olorunsogoGasMvar = olorunsogo1Mvar + olorunsogo12Mvar; 

          olorunsogoNippMw = olorunsogo2Mw - olorunsogoGasMw;
          olorunsogoNippMvar = olorunsogo2Mvar - olorunsogoGasMvar;
          olorunsogoNippMw = (olorunsogoNippMw > 0) ? olorunsogoNippMw : (olorunsogoNippMw * -1);
          olorunsogoNippMvar = (olorunsogoNippMvar > 0) ? olorunsogoNippMvar : (olorunsogoNippMvar * -1);

          olorunsogoGasMw = olorunsogoGasMw.toFixed(2);
          olorunsogoGasMvar = olorunsogoGasMvar.toFixed(2);

          olorunsogoNippMw = olorunsogoNippMw.toFixed(2);
          olorunsogoNippMvar = olorunsogoNippMvar.toFixed(2);
          
            //kv = this.averageVoltage(kvArr);
            //console.log('kv',kvArr);
            //kva = Object.is(NaN, kva) ? 0 : kva.toFixed(2);

            if(this.connected===true || statusCheck != '') this.status = 1;
            let olorunsogoTotalMw = olorunsogoGasMw - olorunsogoNippMw;
            let olorunsogoTotalMvar = olorunsogoGasMvar - olorunsogoNippMvar;

            olorunsogoTotalMw = (olorunsogoTotalMw > 0) ? olorunsogoTotalMw : (olorunsogoTotalMw * -1);
            olorunsogoTotalMvar = (olorunsogoTotalMvar > 0) ? olorunsogoTotalMvar : (olorunsogoTotalMvar * -1);
            let totalData = { mw: olorunsogoTotalMw, mvar: olorunsogoTotalMvar };
            this.$emit('total', 'Olorunsogo', totalData);
            return {olorunsogoGasMw, olorunsogoGasMvar, olorunsogoNippMw, olorunsogoNippMvar};
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
