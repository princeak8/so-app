<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {
  SOCKET_ADDR,
  SOCKET_AUTH_ADDR,
  STORAGE_KEY,
  POWER_SOCKET_ADDR,
} from "@/constants";
import { RouteEnum } from "@/router";
import { powerStations } from "@/powerStations";
import LineBoxModal from "@/components/LineBoxModal";

import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      powerStations: powerStations,
      addedStations: [
        "odukpaniGs",
        "ikotEkpene",
        "afamViTs",
        "omotosho1",
        "omotosho2",
        
        "delta2",
        "delta3",
        "omokuPs1",
        "dadinKowaGs",
        "phMain",
        "alaoji",
        "kainjiTs",
        "olorunsogo1",
        "olorunsogoPhase1Gs",
        "parasEnergyPs",
        "ekim",
        "eket",
        "okpaiGs",
        "deltaGs",
        "jebbaTs",
        "transamadiGs",
        "zungeru",
      ],
    };
  },
  computed: {
    ...mapState(["lineDetails", "showOverlay", "pStations"]),
    updatedStations() {
      let currStations = this.stations;
      return currStations;
    },
    updatedPowerStations() {
      let powerStations = this.powerStations;
      return powerStations;
    },
  },
  watch: {
    //
  },
  methods: {
    ...mapActions([
      "setPowerStations",
      "addPowerStation",
      "updatePowerStation",
      "toggleConnected",
    ]),

    wait(ms) {
      return new Promise((resolve) => {
        console.log("waiting " + ms / 1000 + " Secs");
        setTimeout(resolve, ms);
      });
    },

    async connectPower() {
      const data = { token: 123 };

      const ADDR = `${POWER_SOCKET_ADDR}token=${data.token}`;
      this.ws = new WebSocket(ADDR);
      this.ws.onmessage = (msg) => {
        // console.log('Power msg ', msg)
        const res = JSON.parse(msg.data);
        // console.log('Power response ',res);
        this.mergePowerStationData(res);
      };
      this.ws.onerror = (error) => {
        console.log("Error ", error);
        this.connectPower();
      };
      this.ws.onclose = async (event) => {
        console.log("WebSocket is closed now.", event);
        await this.wait(5000);
        this.connectPower();
      };
    },
    mergePowerStationData(res) {
      // console.log('entry',res.id);
      let n = 1;
      //   if(res.id=='odukpaniGs') console.log('count'+n, res);

      //   //var streamedPowerStation = res
      // if(res.id=='parasEnergyPs') console.log(res);
      // console.log(res.id);
      const getPowerStation = this.pStations.find((x) => x.id === res.id);

      //(!getPowerStation) ? console.log('not found', res.id) : console.log('found', getPowerStation.id);
      if (getPowerStation) {
        //console.log('found', getPowerStation.id);
      }
      if (!getPowerStation && this.addedStations.includes(res.id)) {
        // console.log(res.id);
        this.addPowerStation({ ...res });
      } else {
        this.updatePowerStation({ ...res });
      }
      // this.pStations.forEach((st) => {
      //     if(st.id=='parasEnergyPs') console.log(st)
      //   });
    },
  },
  mounted() {
    console.log("power stations", this.powerStations);
    this.setPowerStations(this.powerStations);
    // this.connect();
    this.connectPower();
    //console.log(this.pStations);
  },
};
</script>

<style></style>
