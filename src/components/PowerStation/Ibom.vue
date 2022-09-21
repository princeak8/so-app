<template>
    <tr>
        <td>{{sn}}</td>
        <td>Ibom</td>
        <td>{{pData.mw}}Mw</td>
        <td>{{pData.mvar}}Mx</td>
        <td :class="statusColor">{{statusName}}</td>
        <!-- {{station}}  -->
        <!-- {{iStation}}  -->
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
          let eketMw = 0;
          let eketMvar = 0;
          let ekimMw = 0;
          let ekimMvar = 0;
          let kvArr = [];
          let kv = 0;
          let statusCheckEket = '';
          let statusCheckEkim = '';
          if(this.station.eket.lines) {
                // statusCheck = '';
                this.station.eket.lines.forEach((line) => {
                    //console.log(line);
                    eketMw += this.getPositiveNumber(line.td.mw);
                    eketMvar += this.getPositiveNumber(line.td.mvar);
                    if(statusCheckEket == '') statusCheckEket = line.td.V;
                })
                eketMw = Object.is(NaN, eketMw) ? 0 : (eketMw < 0) ? (eketMw * -1) : eketMw;
                eketMvar = Object.is(NaN, eketMvar) ? 0 : (eketMvar < 0) ? (eketMvar * -1) : eketMvar;
          }
          if(this.station.ekim.lines) {
                // statusCheck = '';
                //console.log('ekim lines', this.station.ekim.lines);
                this.station.ekim.lines.forEach((line) => {
                    //console.log(line);
                        //console.log('ekim: ', parseFloat(line.td.mw));
                    ekimMw += parseFloat(line.td.mw);
                    ekimMvar += parseFloat(line.td.mvar);
                    if(statusCheckEkim == '') statusCheckEkim = line.td.V;
                })
                ekimMw = Object.is(NaN, ekimMw) ? 0 : (ekimMw < 0) ? (ekimMw * -1) : ekimMw;
                ekimMvar = Object.is(NaN, ekimMvar) ? 0 : (ekimMvar < 0) ? (ekimMvar * -1) : ekimMvar;
          }
          mw = eketMw + ekimMw;
          mvar = eketMvar + ekimMvar; 
          mw = mw.toFixed(2);
          mvar = mvar.toFixed(2);
            //kv = this.averageVoltage(kvArr);
            //console.log('kv',kvArr);
            //kva = Object.is(NaN, kva) ? 0 : kva.toFixed(2);
            if(this.connected===true || (statusCheckEket != '' || statusCheckEkim != '')) this.status = 1;
            // console.log('statusCheckEkim', statusCheckEkim);
            // console.log('status', this.status);
            let totalData = { mw, mvar };
            this.$emit('total', 'Ibom', totalData);
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
