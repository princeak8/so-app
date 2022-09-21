<template>
    <tr>
        <td>{{sn}}</td>
        <td>Odukpani</td>
        <td>{{pData.mw}}Mw</td>
        <td>{{pData.mvar}}Mx</td>
        <td :class="statusColor">{{statusName}}</td>
        <!-- {{oStation}}  -->
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
          let odukpaniMw = 0;
          let odukpaniMvar = 0;
          let ikotMw = 0;
          let ikotMvar = 0;
          let kvArr = [];
          let kv = 0;
          let statusCheck = '';
          if(this.station.odukpani.lines) {
                // statusCheck = '';
                this.station.odukpani.lines.forEach((line) => {
                    //console.log(line);
                    if((line.id=='d1b') || (line.id=='d2b')) {
                        odukpaniMw += this.getPositiveNumber(line.td.mw);
                        odukpaniMvar += this.getPositiveNumber(line.td.mvar);
                        if(statusCheck == '') statusCheck = line.td.V;
                    }
                })
                odukpaniMw = Object.is(NaN, odukpaniMw) ? 0 : (odukpaniMw < 0) ? (odukpaniMw * -1) : odukpaniMw;
                odukpaniMvar = Object.is(NaN, odukpaniMvar) ? 0 : (odukpaniMvar < 0) ? (odukpaniMvar * -1) : odukpaniMvar;
          }
          if(this.station.ikot.lines) {
                // statusCheck = '';
                this.station.ikot.lines.forEach((line) => {
                    //console.log(line);
                    if((line.id=='d1k') || (line.id=='d2k')) {
                        //console.log('ikot: ', parseFloat(line.td.mw));
                        ikotMw += parseFloat(line.td.mw);
                        ikotMvar += parseFloat(line.td.mvar);
                        if(statusCheck == '') statusCheck = line.td.V;
                    }
                })
                ikotMw = Object.is(NaN, ikotMw) ? 0 : (ikotMw < 0) ? (ikotMw * -1) : ikotMw;
                ikotMvar = Object.is(NaN, ikotMvar) ? 0 : (ikotMvar < 0) ? (ikotMvar * -1) : ikotMvar;
          }
          //console.log(odukpaniMw);
          mw = odukpaniMw + ikotMw;
          mvar = odukpaniMvar + ikotMvar; 
          mw = mw.toFixed(2);
          mvar = mvar.toFixed(2);
            //kv = this.averageVoltage(kvArr);
            //console.log('kv',kvArr);
            //kva = Object.is(NaN, kva) ? 0 : kva.toFixed(2);
            if(this.connected===true || statusCheck != '') this.status = 1;
            let totalData = { mw, mvar };
            this.$emit('total', 'Odukpani', totalData);
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
