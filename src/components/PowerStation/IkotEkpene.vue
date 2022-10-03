<template>
    <tr>
        <td>Ikot Ekpene</td>
        <td>{{pData.mw}}Mw</td>
        <td>{{pData.mvar}}Mx</td>
        <td :class="statusColor">{{statusName}}</td>
        <!-- {{station}} -->
    </tr>
</template>

<style scoped>

</style>

<script>
export default {
  props: ['station'],
  data() {
    return {
        status: -1,
        connectionLostTime: 0,
    };
  },
  computed: {
      pData() {
          //console.log('test', this.station);
          let mw = 0;
          let mvar = 0;
          let kvArr = [];
          let kv = 0;
          let statusCheck = '';
            if(this.station.lines) {
                statusCheck = '';
                this.station.lines.forEach((line) => {
                    //console.log(line);
                    if((line.id=='d1k') || (line.id=='d2k')) {
                        mw += parseFloat(line.td.mw);
                        mvar += parseFloat(line.td.mvar);
                        if(statusCheck == '') statusCheck = line.td.V;
                    }
                })
                mw = Object.is(NaN, mw) ? 0 : (mw < 0) ? (mw * -1) : mw;
                mvar = Object.is(NaN, mvar) ? 0 : (mvar < 0) ? (mvar * -1) : mvar;
            }
            
            //kv = this.averageVoltage(kvArr);
            //console.log('kv',kvArr);
            //kva = Object.is(NaN, kva) ? 0 : kva.toFixed(2);
            if(statusCheck != '') this.status = 1;
            let totalData = { mw, mvar };
            this.$emit('total', 'IkotEkpene', totalData);
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
      setConnectionLostTime() {
          var dt = new Date();
          console.log('seconds', dt.getTime() / 1000);
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
