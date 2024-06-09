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
      //
    };
  },
  computed: {
    //
  },
  watch: {
    //
  },
  methods: {
    //
  },
  mounted() {
    // console.log("power stations", this.powerStations);
    // this.setPowerStations(this.powerStations);
    // this.connect();
    // this.connectPower();
    //console.log(this.pStations);
  },
};
</script>

<style></style>
