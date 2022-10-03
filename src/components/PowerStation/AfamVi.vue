<template>
    <tr>
        <td>{{sn}}</td>
        <td>Afam VI</td>
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
        connectionLostTime: 0
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
            if(this.station.lines) {
                statusCheck = '';
                this.station.lines.forEach((line) => {
                    //console.log(line);
                    mw += this.getPositiveNumber(line.td.mw);
                    mvar += this.getPositiveNumber(line.td.mw);
                    if(statusCheck == '') statusCheck = line.td.V;
                })
            }
            
            mw = Object.is(NaN, mw) ? 0 : (mw.toFixed(2) < 0) ? (mw.toFixed(2) * -1) : mw.toFixed(2);
            mvar = Object.is(NaN, mvar) ? 0 : (mvar.toFixed(2) < 0) ? (mvar.toFixed(2) * -1) : mvar.toFixed(2);
            
            //kv = this.averageVoltage(kvArr);
            //console.log('kv',kvArr);
            //kva = Object.is(NaN, kva) ? 0 : kva.toFixed(2);
            //console.log('statusCheck: ', statusCheck);
            if(this.connected===true || statusCheck != '') {
                this.status = 1;
                //console.log('status changed to 1');
            }
            let totalData = { mw, mvar };
            this.$emit('total', 'AfamVI', totalData);
            return totalData;
      },
      statusName() {
          console.log('AfamVI Status: ', this.status);
          let name = '';
          switch(this.status) {
            case 0 : name = 'Connection Lost'; break;
            case 1 : name = 'Connected'; break;
            case -1 : name = 'Awaiting Connection'; break; 
          }
          //console.log('AfamVI Status Name: ', name);
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
          //console.log('check connection waiting period, status: ', this.status);
      }
  },
  mounted() {
      this.setConnectionLostTime();
      //console.log('station: ',this.station)
  }
};
</script>
