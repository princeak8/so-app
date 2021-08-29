<template>
    <div>
        
        <StationBox v-for="(station, i) in updatedStations" :name="station.name" :id="station.id" :lines="station.lines" :station="station"  />
        <button type="button" class="btn btn-primary" @click="openModal()">click</button>
        
          <PowerStationBox v-for="(pStation, i) in powerStations" :name="pStation.name" :ids="pStation.id" :units="pStation.units" />


    </div>
</template>

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

<style scoped>

</style>

<script>
import { SOCKET_ADDR, STORAGE_KEY } from "@/constants";
import Decimal from "decimal.js";
import { RouteEnum } from "@/router";
import StationBox from "@/components/StationBox.vue";
import PowerStationBox from '@/components/PowerStationBox';
import voltageDisplayMixin from "@/mixins/voltage-display-mixin";
import { stations } from "@/stations";
import { powerStations } from "@/powerStations";
import newData from '@/newData';
import axios from 'axios';

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
  components: { StationBox, PowerStationBox },
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
      defaultTransmissionData: {
        power: { initialValue: null, absValue: null },
        mvar: { initialValue: null, absValue: null },
        voltage: { initialValue: null, absValue: null },
        current: { initialValue: null, absValue: null },
      },
    };
  },
  computed: {
    hasEmptyTransmissionValue() {
      return Object.values(this.transmissionData).includes("");
    },
    updatedStations() {
      let currStations = this.stations;
        // let newData = {
        //   name: "Olorunsogo Phase1",
        //   lines: [
        //       {
        //           name: "r2a",
        //           transmissionData:  {
        //                   power: 200,
        //                   current: 380,
        //                   voltage: 338,
        //                   mvar: 6
        //           }
        //       },
        //       {
        //           name: "r1w",
        //           transmissionData: {
        //                   power: 200,
        //                   current: 380,
        //                   voltage: 312,
        //                   mvar: 6
        //           }
        //       }
        //   ]
        // };
        currStations.forEach((st) => {
          newData.forEach((data) => {
            if(st.name.toLowerCase()==data.name.toLowerCase()) {
              st.lines.forEach((ln) => {
                data.lines.forEach((newLn) => {
                  if(ln.name==newLn.name) {
                    ln.transmissionData = newLn.transmissionData;
                  }
                })
              })
            //st.lines = newData.lines;
            }
          })
        })
      return currStations;
    }
  },
  watch: {
    hasEmptyTransmissionValue(newValue, oldValue) {
      if (newValue) {
        this.msg = {
          text: "Error in connection",
        };
        return;
      }
      if (!newValue && oldValue) {
        this.msg.text = "";
      }
    },

  },
  methods: {
      showStations() {
          console.log('stations', powerStations);
      },
      openModal() {
        //console.log('station', station);
        //if(station.gs) {
          $('#jebbaPs').modal('toggle');
        //}
      },
      openMainModal() {
        this.$modal.show("linebox-modal");
      },
      openDefaultModal() {
        this.$modal.show("default-linebox-modal");
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
        this.msg = {
          text: "Connected",
          type: "success",
        };
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
        const token = "53c297c89cc189222a23195411ec5431";
        const data = await this.get_token();
        console.log('token', data.token);
        const ADDR = `ws://localhost:3001/token=${data.token}`;
        this.ws = new WebSocket(ADDR);
        this.ws.onmessage = (msg) => {
          const res = JSON.parse(msg.data);
          console.log(res);
        };
      },
      get_token: async () => {
      let url = "http://localhost/so_app/public/api/v1/get_connection_token";
      var self = this;
      let formData =  {
          name : 'test',
          password: 'test123'
      };
      return axios.post(url, formData)
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
    console.log('p stations:',powerStations);
      //console.log(newData);
    //this.connect();
  },
};
</script>