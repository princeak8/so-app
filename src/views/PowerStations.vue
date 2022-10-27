<template>
    <div style="margin-right:auto; margin-left: 10%">
        <!-- <div style="height: 2em; display: flex; flex-direction: horizontal">
            <!-- <router-link to="/" class="link">Home</router-link> -->
            <!-- <router-link to="/power_stations" class="active link">Power Station Table</router-link>
            <router-link to="/power_stations_units" class="link">Power Station Units</router-link> --
        </div> -->
        <h1 style="margin:2px; padding:0">Power Stations</h1>
            <table border="1" style="width:40%; font-weight: bold;">
                <thead>
                    <th>S/N</th>
                    <th>Station</th>
                    <th>POWER (Mw)</th>
                    <th>REACTIVE POWER (Mvar)</th>
                    <th>VOLTAGE (KV)</th>  
                    <th>STATUS</th>
                </thead>
                <tbody>
                    <component 
                        v-for="(station, i) in stations" 
                        :is="station.name" 
                        :sn="++i" 
                        :station="station.station" 
                        :connected="connected" 
                        @total="station.totalFn" 
                        :ref="station.ref" >
                    </component>
                    <!-- <Olorunsogo :sn="22" :station="olorunsogo" :connected="connected" @total="getStationTotal" ref="Olorunsogo" /> -->

                    <tr>
                        <td>TOTAL</td>
                        <td></td>
                        <td>{{totalMw}}</td>
                        <td>{{totalMvar}}</td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>




<script>
import { SOCKET_ADDR, SOCKET_AUTH_ADDR, STORAGE_KEY, POWER_SOCKET_ADDR } from "@/constants";
import Decimal from "decimal.js";
import { RouteEnum } from "@/router";
import StationBox from "@/components/StationBox.vue";
import PowerStationBox from "@/components/PowerStationBox";
import voltageDisplayMixin from "@/mixins/voltage-display-mixin";
import { stations } from "@/stations";
import newData from "@/newData";
import axios from "axios";
import LineBoxModal from '@/components/LineBoxModal'

import Geregu from '@/components/PowerStation/Geregu';
import GereguNipp from '@/components/PowerStation/GereguNipp';
import Ihovbor from '@/components/PowerStation/Ihovbor';
import Azura from '@/components/PowerStation/Azura';
import AfamIV from '@/components/PowerStation/AfamIV';
import AfamV from '@/components/PowerStation/AfamV';
import AfamVi from '@/components/PowerStation/AfamVi';
import Dadinkowa from '@/components/PowerStation/Dadinkowa';
import Odukpani from '@/components/PowerStation/Odukpani';
import IkotEkpene from '@/components/PowerStation/IkotEkpene';
import Jebba from '@/components/PowerStation/Jebba';
import OmotoshoNipp from '@/components/PowerStation/OmotoshoNipp';
import OmotoshoGas from '@/components/PowerStation/OmotoshoGas';
import Omoku from '@/components/PowerStation/Omoku';
import Gbarain from '@/components/PowerStation/Gbarain';
import Delta2 from '@/components/PowerStation/Delta2';
import Delta3 from '@/components/PowerStation/Delta3';
import Delta4 from '@/components/PowerStation/Delta4';
import RiversIpp from '@/components/PowerStation/RiversIpp';
import SapeleNipp from '@/components/PowerStation/SapeleNipp';
import SapeleSteam from '@/components/PowerStation/SapeleSteam';
import Transamadi from '@/components/PowerStation/Transamadi';
import Egbin from '@/components/PowerStation/Egbin';
import Okpai from '@/components/PowerStation/Okpai';
import Shiroro from '@/components/PowerStation/Shiroro';
import Alaoji from '@/components/PowerStation/Alaoji';
import Kainji from '@/components/PowerStation/Kainji';
import OlorunsogoGas from '@/components/PowerStation/OlorunsogoGas';
import OlorunsogoNipp from '@/components/PowerStation/OlorunsogoNipp';
import ParasEnergy from '@/components/PowerStation/ParasEnergy';
import Ibom from '@/components/PowerStation/Ibom';

import { mapState } from 'vuex';

const defaultData = {
    mw: 0,
    mx: 0,
    status: false
};

export default {
    name: "PowerStations",
  components: {
        Geregu, GereguNipp, Ihovbor, Azura, AfamIV, AfamV, AfamVi, Odukpani, IkotEkpene, OmotoshoNipp, OmotoshoGas, Gbarain, Delta2, Delta3, Delta4, Omoku, Dadinkowa, RiversIpp, 
        SapeleNipp, SapeleSteam, Transamadi, Egbin, Okpai, Shiroro, Alaoji, Kainji, OlorunsogoGas, OlorunsogoNipp, ParasEnergy, Ibom, Jebba
    },
  data() {
    return {
      //powerStations: this.powerStations
        geregu: '', gereguNipp: '', ihovbor: '', azura: '', afamIV: '', afamV: '', afamVi: '', dadinkowa: '', odukpani: '', ikot: '', jebba: '', omotoshoNipp: '', omotosho1: '',
        omotosho2: '', gbarain: '', delta2: '', delta3: '', delta4: '', riversIpp: '', sapeleNipp: '', sapeleSteam: '', omoku: '', phMain: '', egbin: '', okpai: '',
        shiroro: '', alaoji: '', kainji: '', olorunsogo1: '', olorunsogo2: '', parasEnergy: '', eket: '', ekim: '',

        mwTotal: {},
        mxTotal: {},

        totalMw: 0,
        totalMvar: 0,
        changed: false
    };
  },
  computed: {
      ...mapState(['pStations', 'connected', 'connectionLostWaitPeriod']),
      stations() {
          //console.log('connected: ', this.connected);
          return [
              {name: "AfamIV", station: this.afamIV, totalFn: this.getStationTotal, ref: "AfamIV"},
              {name: "AfamV", station: this.afamV, totalFn: this.getStationTotal, ref: "AfamV"},
              {name: "AfamVi", station: this.afamVi, totalFn: this.getStationTotal, ref: "AfamVi"},
              {name: "Alaoji", station: this.alaoji, totalFn: this.getStationTotal, ref: "Alaoji"},
              {name: "Azura", station: this.azura, totalFn: this.getStationTotal, ref: "Azura"},
              {name: "Dadinkowa", station: this.dadinkowa, totalFn: this.getStationTotal, ref: "Dadinkowa"},
              {name: "Delta2", station: this.delta2, totalFn: this.getStationTotal, ref: "Delta2"},
              {name: "Delta3", station: this.delta3, totalFn: this.getStationTotal, ref: "Delta3"},
              {name: "Delta4", station: this.delta4, totalFn: this.getStationTotal, ref: "Delta4"},
              {name: "Egbin", station: this.egbin, totalFn: this.getStationTotal, ref: "Egbin"},
              {name: "Gbarain", station: this.gbarain, totalFn: this.getStationTotal, ref: "Gbarain"},
              {name: "Geregu", station: this.geregu, totalFn: this.getStationTotal, ref: "Geregu"},
              {name: "GereguNipp", station: this.gereguNipp, totalFn: this.getStationTotal, ref: "GereguNipp"},
              {name: "Ibom", station: this.ibom, totalFn: this.getStationTotal, ref: "Ibom"},
              {name: "Jebba", station: this.jebba, totalFn: this.getStationTotal, ref: "Jebba"},
              {name: "Ihovbor", station: this.ihovbor, totalFn: this.getStationTotal, ref: "Ihovbor"},
              {name: "Kainji", station: this.kainji, totalFn: this.getStationTotal, ref: "Kainji"},
              {name: "Odukpani", station: this.odukpani, totalFn: this.getStationTotal, ref: "Odukpani"},
              {name: "Okpai", station: this.okpai, totalFn: this.getStationTotal, ref: "Okpai"},
              {name: "OlorunsogoGas", station: this.olorunsogo, totalFn: this.getStationTotal, ref: "OlorunsogoGas"},
              {name: "OlorunsogoNipp", station: this.olorunsogo, totalFn: this.getStationTotal, ref: "OlorunsogoNipp"},
              {name: "Omoku", station: this.omoku, totalFn: this.getStationTotal, ref: "Omoku"},
              {name: "OmotoshoGas", station: this.omotoshoGasStation, totalFn: this.getStationTotal, ref: "OmotoshoGas"},
              {name: "OmotoshoNipp", station: this.omotoshoNipp, totalFn: this.getStationTotal, ref: "OmotoshoNipp"},
              {name: "ParasEnergy", station: this.parasEnergy, totalFn: this.getStationTotal, ref: "ParasEnergy"},
              {name: "RiversIpp", station: this.riversIpp, totalFn: this.getStationTotal, ref: "RiversIpp"},
              {name: "SapeleNipp", station: this.sapeleNipp, totalFn: this.getStationTotal, ref: "SapeleNipp"},
              {name: "SapeleSteam", station: this.sapeleSteam, totalFn: this.getStationTotal, ref: "SapeleSteam"},
              {name: "Shiroro", station: this.shiroro, totalFn: this.getStationTotal, ref: "Shiroro"},
              {name: "Transamadi", station: this.phMain, totalFn: this.getStationTotal, ref: "Transamadi"},
          ];
      },
                    

        odukpaniStation() {
            return {odukpani: this.odukpani, ikot: this.ikot};
        },

        omotoshoGasStation() {
            return {omotosho1: this.omotosho1, omotosho2: this.omotosho2};
        },

        olorunsogo() {
            return {olorunsogo1: this.olorunsogo1, olorunsogo2: this.olorunsogo2};
        },

        ibom() {
            return {eket: this.eket, ekim: this.ekim};
        },
  },
    watch: {
        mwTotal:
        {
            deep: true,
            handler(val)
            {
                this.changed = true;
                var total = 0
                Object.keys(val).forEach((key) => {
                    total += parseFloat(val[key]);
                })
                this.totalMw = this.formatNumber(total.toFixed(2));
            }
        },
        mxTotal:
        {
            deep: true,
            handler(val)
            {
                var total = 0
                Object.keys(val).forEach((key) => {
                    total += parseFloat(val[key]);
                })
                this.totalMvar = total.toFixed(2);
            }
        },

    pStations() {
     //console.log('changed');
    //   console.log('p stations',this.pStations);
        this.pStations.forEach((station) => {
            // if(station.id='parasEnergyPs') console.log('paras:',station);
            // console.log(`${station.id}`)
            // console.log(station);
            switch(station.id) {
                case 'gereguPs' : this.geregu = station; this.gereguNipp = station; break;
                case 'ihovborNippPs' : this.ihovbor = station; this.azura = station; break;
                case 'afamIv_vPs' : this.afamIV = station; break;
                case 'afamVPs' : this.afamV = station; console.log('afamV', station); break;
                case 'afamViTs' : this.afamVi = station; break;
                case 'alaoji' : this.alaoji = station; break;
                case 'dadinKowaGs' : this.dadinkowa = station; break;
                case 'egbinPs' : this.egbin = station; break;
                case 'eket' : this.eket = station; break;
                case 'ekim' : this.ekim = station; break;
                case 'kainjiTs' : this.kainji = station; break;
                case 'jebbaTs' : this.jebba = station; break;
                // case 'ikotEkpene' : this.ikot = station; break;
                case 'odukpaniNippPs' : this.odukpani = station; break;
                case 'okpaiGs' : this.okpai = station; break;
                case 'olorunsogo1' : this.olorunsogo1 = station; break;
                case 'olorunsogoPhase1Gs' : this.olorunsogo2 = station; break;
                case 'omotoshoNippPs' : this.omotoshoNipp = station; break;
                case 'omotosho1' : this.omotosho1 = station; break;
                case 'omotosho2' : this.omotosho2 = station; break;
                case 'parasEnergyPs' : this.parasEnergy = station; break;
                case 'gbarain' : this.gbarain = station; break;
                case 'delta2' : this.delta2 = station; break;
                case 'delta3' : this.delta3 = station; break;
                case 'deltaGs' : this.delta4 = station; console.log('deltaGS', station); break;
                case 'omokuPs1' : this.omoku = station; break;
                case 'riversIppPs' : this.riversIpp = station; break;
                case 'sapeleNippPs' : this.sapeleNipp = station; this.sapeleSteam = station; break;
                case 'phMain' : this.phMain = station; break;
                case 'shiroroPs' : this.shiroro = station; break;
            }
        })
        // console.log(this.omotosho2);
    }
  },
  methods: {
        formatNumber(val) {
            // remove sign if negative
            var sign = 1;
            if (val < 0) {
                sign = -1;
                val = -val;
            }

            // trim the number decimal point if it exists
            let num = val.toString().includes('.') ? val.toString().split('.')[0] : val.toString();

            while (/(\d+)(\d{3})/.test(num.toString())) {
                // insert comma to 4th last position to the match number
                num = num.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
            }

            // add number after decimal point
            if (val.toString().includes('.')) {
                num = num + '.' + val.toString().split('.')[1];
            }

            // return result with - sign if negative
            return sign < 0 ? '-' + num : num;
        },
        unitBgColor(unit) {
            return (unit.powerData && unit.powerData.mw && Math.abs(unit.powerData.mw) > 0) ? 'green' : 'grey';
        },
        getPsData(id) {
            let stationData = '';
            this.pStations.forEach((station) => {
                if(station.id == id) {
                    //console.log('geregu', station);
                    stationData = station;
                }
            })
            return stationData;
        },

        getStationTotal(station, value)
        {
            switch(station) {
                    case 'AfamIV' : 
                        this.$set(this.mwTotal, 'AfamIV', value.mw); this.$set(this.mxTotal, 'AfamIV', value.mvar);
                        break; 
                    case 'AfamV' : 
                        this.$set(this.mwTotal, 'AfamV', value.mw); this.$set(this.mxTotal, 'AfamV', value.mvar);
                        break; 
                    case 'AfamVi' : 
                        this.$set(this.mwTotal, 'AfamVi', value.mw); this.$set(this.mxTotal, 'AfamVi', value.mvar);
                        break; 
                    case 'Alaoji' : 
                        this.$set(this.mwTotal, 'Alaoji', value.mw); this.$set(this.mxTotal, 'Alaoji', value.mvar);
                        break; 
                    case 'Azura' : 
                        this.$set(this.mwTotal, 'Azura', value.mw); this.$set(this.mxTotal, 'Azura', value.mvar);
                        break; 
                    case 'Dadinkowa' : 
                        this.$set(this.mwTotal, 'Dadinkowa', value.mw); this.$set(this.mxTotal, 'Dadinkowa', value.mvar);
                        break; 
                    case 'Delta2' : 
                        this.$set(this.mwTotal, 'Delta2', value.mw); this.$set(this.mxTotal, 'Delta2', value.mvar); 
                        break; 
                    case 'Delta3' : 
                        this.$set(this.mwTotal, 'Delta3', value.mw); this.$set(this.mxTotal, 'Delta3', value.mvar);
                        break; 
                    case 'Egbin' : 
                        this.$set(this.mwTotal, 'Egbin', value.mw); this.$set(this.mxTotal, 'Egbin', value.mvar);
                        break; 
                    case 'Gbarain' : 
                        this.$set(this.mwTotal, 'Gbarain', value.mw); this.$set(this.mxTotal, 'Gbarain', value.mvar);
                        break; 
                    case 'Geregu' : 
                        this.$set(this.mwTotal, 'Geregu', value.mw); this.$set(this.mxTotal, 'Geregu', value.mvar); 
                        break; 
                    case 'GereguNipp' : 
                        this.$set(this.mwTotal, 'GereguNipp', value.mw); this.$set(this.mxTotal, 'GereguNipp', value.mvar); 
                        break; 
                    case 'Ibom' : 
                        this.$set(this.mwTotal, 'Ibom', value.mw); this.$set(this.mxTotal, 'Ibom', value.mvar);
                        break; 
                    case 'Ihovbor' : 
                        this.$set(this.mwTotal, 'Ihovbor', value.mw); this.$set(this.mxTotal, 'Ihovbor', value.mvar); 
                        break; 
                    case 'Jebba' : 
                        this.$set(this.mwTotal, 'Jebba', value.mw); this.$set(this.mxTotal, 'Jebba', value.mvar); 
                        break; 
                    case 'Kainji' : 
                        this.$set(this.mwTotal, 'Kainji', value.mw); this.$set(this.mxTotal, 'Kainji', value.mvar); 
                        break; 
                    case 'Odukpani' : 
                        this.$set(this.mwTotal, 'Odukpani', value.mw); this.$set(this.mxTotal, 'Odukpani', value.mvar);
                        break; 
                    case 'Okpai' :  
                        this.$set(this.mwTotal, 'Omoku', value.mw); this.$set(this.mxTotal, 'Omoku', value.mvar);
                        break; 
                    case 'OlorunsogoGas' : 
                        this.$set(this.mwTotal, 'OlorunsogoGas', value.mw); this.$set(this.mxTotal, 'OlorunsogoGas', value.mvar);
                        break; 
                    case 'OlorunsogoNipp' : 
                        this.$set(this.mwTotal, 'OlorunsogoNipp', value.mw); this.$set(this.mxTotal, 'OlorunsogoNipp', value.mvar);
                        break; 
                    case 'Omoku' :  
                        this.$set(this.mwTotal, 'Omoku', value.mw); this.$set(this.mxTotal, 'Omoku', value.mvar);
                        break; 
                    case 'OmotoshoGas' : 
                        this.$set(this.mwTotal, 'OmotoshoGas', value.mw); this.$set(this.mxTotal, 'OmotoshoGas', value.mvar); 
                        break; 
                    case 'OmotoshoNipp' : 
                        this.$set(this.mwTotal, 'OmotoshoNipp', value.mw); this.$set(this.mxTotal, 'OmotoshoNipp', value.mvar);
                        break;
                    case 'ParasEnergy' : 
                        this.$set(this.mwTotal, 'ParasEnergy', value.mw); this.$set(this.mxTotal, 'ParasEnergy', value.mvar);
                        break; 
                    case 'RiversIpp' : 
                        this.$set(this.mwTotal, 'RiversIpp', value.mw); this.$set(this.mxTotal, 'RiversIpp', value.mvar);
                        break; 
                    case 'SapeleNipp' : 
                        this.$set(this.mwTotal, 'SapeleNipp', value.mw); this.$set(this.mxTotal, 'SapeleNipp', value.mvar); 
                        break; 
                    case 'SapeleSteam' :  
                        this.$set(this.mwTotal, 'SapeleSteam', value.mw); this.$set(this.mxTotal, 'SapeleSteam', value.mvar);
                        break; 
                    case 'Shiroro' : 
                        this.$set(this.mwTotal, 'Shiroro', value.mw); this.$set(this.mxTotal, 'Shiroro', value.mvar);
                        break; 
                    case 'Transamadi' : 
                        this.$set(this.mwTotal, 'Transamadi', value.mw); this.$set(this.mxTotal, 'Transamadi', value.mvar); 
                        break; 
            }
            //console.log('mwTotal',this.mwTotal);
        },

        wait(ms) {
            return new Promise((resolve) => {
                //console.log('waiting '+(ms/1000)+ ' Secs');
                setTimeout(resolve, ms);
            });
        },

        async checkConnectionWaitingPeriod()
        {
                //await this.wait(20000);
                this.stations.forEach((station) => {
                  // console.log(this.$refs);
                    this.$refs[station.name][0].checkConnectionWaitingPeriod();
                })
                await this.wait(5000);
                this.checkConnectionWaitingPeriod();
        }

  },
  mounted() {
    //this.$refs.AfamVi.checkConnectionWaitingPeriod();
    //console.log('refs: ',this.$refs.AfamIV);
    this.checkConnectionWaitingPeriod();
    // console.log("p stations:", powerStations);
    // console.log(this.showOverlay);
    // this.connect();
    // this.connectPower()
    //console.log('power stations', this.pStations);
    
  },
};
</script>

<style scoped>
#station-name {
    height: 45px;
    margin-top: 0px;
    margin-bottom: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding: 0;
  font-size: 30px;
  overflow: hidden;
}

.green {
  background: #17d617;
}

.red {
  background: #dd0505;
}

.active {
    color:  #EE0000
}

.link {
    width: 10%;
    text-align: center;
}

.unit {
  width: 15%;
  height: 80px; 
  padding: 0;
  /* margin-right: 1%;
  margin-left: 1%; */
  border-radius: 3px;
  border: solid 1px #d8d3d3;
}

.unit .unit-name {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
  padding: 0;
}

.unit .info-group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  font-size: 12px;
  margin: 0;
  padding: 0;
}

.unit .info-group .unit-data {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
</style>