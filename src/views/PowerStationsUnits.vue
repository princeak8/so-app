<template>
    <div>
            <div style="height: 2em; display: flex; flex-direction: horizontal">
                <!-- <router-link to="/" class="link">Home</router-link> -->
                <router-link to="/power_stations" class="link">Power Station Table</router-link>
                <router-link to="/power_stations_units" class="active link">Power Station Units</router-link>
            </div>
            <h2 style="margin-left: 40%; margin-bottom:0px;" >Power Stations</h2>
            <div v-for="station in pStations">
                <h4 style="margin-bottom:0px; margin-top:0px;">{{station.name}}</h4>
                <div style="display:flex; flex-direction: row; flex-wrap: wrap ">
                    <div class="unit col-md-1" v-for="unit in station.units" :class='[unitBgColor(unit)]'>
                        <div v-if="unit.type && unit.type != 'TS'" class="unit-name">UNIT {{unit.name.toUpperCase()}}</div>
                            
                            <div class="info-group">
                                <h2 style="margin-bottom: 0.5em; margin-top:0; padding: 0; text-align: center">{{unit.name.toUpperCase()}}</h2>
                                <div class="unit-data watt">{{unit.powerData.mw}}MW</div>
                                <div class="unit-data volt">{{unit.powerData.mvar}}MX</div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
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


import { mapState } from 'vuex';

const defaultData = {
    mw: 0,
    mx: 0,
    status: false
};

export default {
  data() {
    return {
      //powerStations: this.powerStations
      afamVi: defaultData
    };
  },
  computed: {
    ...mapState(['pStations', 'lineDetails']),
    
  },
  watch: {
    // hasEmptyTransmissionValue(newValue, oldValue) {
    //   if (newValue) {
    //     this.msg = {
    //       text: "Error in connection",
    //     };
    //     return;
    //   }
    //   if (!newValue && oldValue) {
    //     this.msg.text = "";
    //   }
    // },
  },
  methods: {
      unitBgColor(unit) {
          if(!unit.powerData) {
            console.log('unit: ', unit);
          }
          return (unit.powerData && unit.powerData.mw && Math.abs(unit.powerData.mw) > 0) ? 'green' : 'grey';
      },
    logOut() {
      if (this.ws) {
        this.ws.close();
      }
      localStorage.removeItem(STORAGE_KEY);
      this.$router.push(RouteEnum.LOGIN);
    },
    getTotalPsLoad(station) {
        //console.log('power station', station);
        if(station.units && (station.units.length > 0)) {
            let mw = 0;
            let mx = 0;
            station.units.forEach((unit) => {
                mw += unit.powerData.mw;
                mx += unit.powerData.mvar;
            })
        }
        return {mw, mx};
    },
    afamVi(station, ps=1) {
      if(ps==1) {
          let res = this.getTotalPsLoad(station);
          this.afamVi = {...this.afamVi, mw:res.mw, mx:res.mx};
      }
    }
  },
  mounted() {
    // console.log("p stations:", powerStations);
    // console.log(this.showOverlay);
    // this.connect();
    // this.connectPower()
    console.log('power stations', this.pStations);
    
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
  width: 5%;
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