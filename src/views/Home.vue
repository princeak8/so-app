<template>
  <div>
    <StationBox v-for="(station, i) in updatedStations"
      :key="`STATION_${i}`" :name="station.name"
      :id="station.id" :lines="station.lines" :station="station"
      :stations="updatedStations" :generalInitialState="generalInitialState" ref="stationRef" :connectObj="connectObj"
    />

    <PowerStationBox v-for="(pStation, i) in updatedPowerStations"
      :key="`POWER_${i}`" :name="pStation.name"
      :ids="pStation.id" :units="pStation.units"
    />
    <LineBoxModal v-if="showOverlay" />
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
import { powerStations } from "@/powerStations";
import newData from "@/newData";
import axios from "axios";
import LineBoxModal from '@/components/LineBoxModal';
import moment from 'moment';


import { mapActions, mapState } from 'vuex';

const ERROR_MESSAGE_INTERVAL = 30000;
const valueDP = Object.freeze({
  power: 2,
  mvar: 2,
  voltage: 0,
  current: 0,
});
const valueDiv = Object.freeze({
  power: 1000,
  mvar: 1000,
  voltage: 1000,
  current: 1,
});
let timeout = null;
let timeoutFlag = false;
let reconnectInterval = null;
function processData(data) {
  const processed = data;
  Object.keys(processed).forEach((key) => {
    const initialValue = Decimal(processed[key])
      .div(valueDiv[key])
      .toDP(valueDP[key]);
    const absValue = initialValue.abs();
    processed[key] = { initialValue, absValue };
  });
  return processed;
}
export default {
  components: { StationBox, PowerStationBox, LineBoxModal },
  mixins: [voltageDisplayMixin],
  data() {
    return {
      stations: stations,
      powerStations: powerStations,
      newData: newData,
      isModalVisible: false,
      ws: null,
      transmissionData: {
        power: { initialValue: null, absValue: null },
        mvar: { initialValue: null, absValue: null },
        voltage: { initialValue: null, absValue: null },
        current: { initialValue: null, absValue: null },
      },
      moment,
      connectTrials: 0,
      connectError: '',

      generalInitialState: false,
      connectObj: { id: '', connected: false }
    };
  },
  computed: {
    ...mapState(['lineDetails', 'showOverlay', 'pStations']),
    updatedStations() {
      let currStations = this.stations;
      return currStations;
    },
    updatedPowerStations() {
      let powerStations = this.pStations;
      return powerStations;
    }
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
    ...mapActions(['setPowerStations', 'updatePowerStation']),
    checkTimeInterval() {
      setInterval(() => {
        this.compareStationsValues()
      }, 15000);
    },
    showStations() {
      console.log("stations", powerStations);
    },
    openModal() {
      //console.log('station', station);
      //if(station.gs) {
      $("#jebbaPs").modal("toggle");
      //}
    },
    openMainModal() {
      this.$modal.show("linebox-modal");
    },
    openDefaultModal() {
      this.$modal.show("default-linebox-modal");
    },
    compareStationsValues() {
      // get all stations and their state value
      // console.log('ref ',this.$refs.stationRef)
      const stationsRef = this.$refs.stationRef
      stationsRef.forEach((item, i) => {
        const data = item.$data
        // console.log('Data ', data, 'Item ', item)
        const connectionLostTime = data.connectionLostTime
        
        if(data.connected) {
          const newTime = this.moment()
          if(connectionLostTime !== 0) {
            const diff = newTime.diff(connectionLostTime)
            if(diff > 0) {
              item.setConnected(false)
            }
            //console.log('Diff ', diff)
          }
        }
      })
    },
    connect2(reconnect = false) {
      this.ws = new WebSocket(SOCKET_ADDR);
      timeout = setTimeout(() => {
        timeoutFlag = true;
        this.msg = {
          text: "No connection",
          type: "error",
        };
        console.error("connected, but no data received");
      }, ERROR_MESSAGE_INTERVAL);
      this.ws.onmessage = (msg) => {
        if (timeoutFlag) {
          this.showConnectionMessage();
        }
        clearTimeout(timeout);
        this.transmissionData = processData(JSON.parse(msg.data));
        timeout = setTimeout(() => {
          timeoutFlag = true;
          this.msg = {
            text: "Connection lost",
          };
        }, ERROR_MESSAGE_INTERVAL);
      };
      this.ws.onerror = (e) => {
        console.log("onerror", e);
        return;
      };
      this.ws.onclose = (e) => {
        console.log("onclose", e);
        clearInterval(reconnectInterval);
        reconnectInterval = setInterval(() => {
          this.connect(true);
        }, 5000);
        return;
      };
      this.ws.onopen = (e) => {
        console.log("onopen", e);
        clearInterval(reconnectInterval);
        if (timeoutFlag) {
          this.showConnectionMessage();
        }
        if (reconnect) {
          return;
        }
      };
    },
    showConnectionMessage() {
      timeoutFlag = false;
      this.msg = { text: "Connected", type: "success" };
      setTimeout(() => {
        this.msg.text = "";
      }, 5000);
    },
    logOut() {
      if (this.ws) {
        this.ws.close();
      }
      localStorage.removeItem(STORAGE_KEY);
      this.$router.push(RouteEnum.LOGIN);
    },
    async connect() {
      const data = { token: 123 };
      // const token = "53c297c89cc189222a23195411ec5431";
      //const data = await this.get_token();
      // console.log("token", data.token);
      // const ADDR = `ws://localhost:3001/token=${data.token}`;
      const ADDR = `${SOCKET_ADDR}token=${data.token}`;
      this.ws = new WebSocket(ADDR);
      this.ws.onmessage = (msg) => {
        // console.log('msg ', msg)
        this.connectTrials = 0;
        const res = JSON.parse(msg.data);
        this.connectObj = { id: res.id, connected: true }
        //console.log(res);
        this.mergeData(res)
      };
      this.ws.onerror = (error) => {
        console.log('Error ', error)
        this.connect()
        // this.connectTrials = this.connectTrials + 1;
        // console.log('connection trials ', this.connectTrials)
        // if(this.connectTrials < 5) {
        //   this.connect()
        // } else {
        //   this.$alert.error('Could not connect to the server, please check connection')
        // }
      }
      this.ws.onclose = (event) => {
        console.log("WebSocket is closed now.", event);
        this.connect()
      }
    },
    mergeData(res) {
      const streamedStation = res
      const getStation = this.stations.find(x => x.id === res.id)
      // console.log('Get Station ', getStation.lines)
      if(getStation) {
        const stationLines = getStation.lines
        const streamedStationLines = streamedStation.lines
        const updatedStationLines = stationLines.filter((item) => {
          const foundItem = streamedStationLines.find(x => x.id === item.id)
          if(foundItem) {
            item.transmissionData = foundItem.td
            item.td = foundItem.td
          }
          return item
        })
        this.stations = this.stations.filter(x => {
          if(x.name === getStation.name) {
            x.lines = updatedStationLines
          }
          return x
        })
        // console.log('Station line ', stationLines, 'StreamedLines ', streamedStationLines)
        // console.log('Station line ', getStation, streamedStation)
      }
    },
    get_token: async () => {
      // let url = "http://localhost/so_app/public/api/v1/get_connection_token";
      let url = SOCKET_AUTH_ADDR;
      var self = this;
      let formData = {
        name: "test",
        password: "test123",
      };
      return axios
        .post(SOCKET_AUTH_ADDR, formData)
        .then((response) => {
          return response.data;
          //console.log(response);
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
  },
  mounted() {
    // console.log("p stations:", powerStations);
    console.log(this.showOverlay);
    //this.setPowerStations(this.powerStations);
    this.connect();
    // this.compareStationsValues()
    // this.connectPower()
    //console.log(this.pStations);
    this.checkTimeInterval()
  },
};
</script>

<style>
.d-none {
  display: none;
}
.v--modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em 6em 2em 2em !important;
}
.blink {
  animation: blink-animation 1s steps(5, start) infinite;
  -webkit-animation: blink-animation 1s steps(5, start) infinite;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>