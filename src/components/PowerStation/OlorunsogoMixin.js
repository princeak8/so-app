
import { mapActions, mapState } from 'vuex';

export default {
    name: "OlorunsogoMixin",
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
                            olorunsogo1Mw += this.getPositiveNumber(line.gd.mw);
                            olorunsogo1Mvar += this.getPositiveNumber(line.gd.mvar);
                            if(statusCheck == '') statusCheck = line.gd.V;
                        })
                        olorunsogo1Mw = Object.is(NaN, olorunsogo1Mw) ? 0 : (olorunsogo1Mw < 0) ? (olorunsogo1Mw * -1) : olorunsogo1Mw;
                        olorunsogo1Mvar = Object.is(NaN, olorunsogo1Mvar) ? 0 : (olorunsogo1Mvar < 0) ? (olorunsogo1Mvar * -1) : olorunsogo1Mvar;
                        // console.log('olorunsogo1Mw: ', olorunsogo1Mw);
                }
            
                if(this.station.olorunsogo2.lines) {
                        this.station.olorunsogo2.lines.forEach((line) => { 
                            if(line.id == 'tr3' || line.id == 'tr4') {
                                olorunsogo12Mw += this.getPositiveNumber(line.gd.mw);
                                olorunsogo12Mvar += this.getPositiveNumber(line.gd.mvar);
                                if(statusCheck == '') statusCheck = line.gd.V;
                            }else{
                                olorunsogo2Mw += this.getPositiveNumber(line.td.mw);
                                olorunsogo2Mvar += this.getPositiveNumber(line.td.mvar);
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
                // let olorunsogoTotalMw = olorunsogoGasMw - olorunsogoNippMw;
                // let olorunsogoTotalMvar = olorunsogoGasMvar - olorunsogoNippMvar;

                // olorunsogoTotalMw = (olorunsogoTotalMw > 0) ? olorunsogoTotalMw : (olorunsogoTotalMw * -1);
                // olorunsogoTotalMvar = (olorunsogoTotalMvar > 0) ? olorunsogoTotalMvar : (olorunsogoTotalMvar * -1);

                let totalGasData = { mw: olorunsogoGasMw, mvar: olorunsogoGasMvar };
                let totalNippData = { mw: olorunsogoNippMw, mvar: olorunsogoNippMvar };
                this.$emit('total', 'OlorunsogoGas', totalGasData);
                this.$emit('total', 'OlorunsogoNipp', totalNippData);
                return {olorunsogoGasMw, olorunsogoGasMvar, olorunsogoNippMw, olorunsogoNippMvar};
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
