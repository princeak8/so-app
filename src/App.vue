<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { SOCKET_ADDR, SOCKET_AUTH_ADDR, STORAGE_KEY, POWER_SOCKET_ADDR } from "@/constants";
import { RouteEnum } from "@/router";
import { powerStations } from "@/powerStations";
import LineBoxModal from '@/components/LineBoxModal';

import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      powerStations: powerStations,
    };
  },
  computed: {
    ...mapState(['lineDetails', 'showOverlay', 'pStations']),
    updatedStations() {
      let currStations = this.stations;
      return currStations;
    },
    updatedPowerStations() {
      let powerStations = this.powerStations;
      return powerStations;
    }
  },
  watch: {
    // 
  },
  methods: {
    ...mapActions(['setPowerStations', 'updatePowerStation']),

      async connectPower() {
        const data = {token: 123};
        
        const ADDR = `${POWER_SOCKET_ADDR}token=${data.token}`;
        this.ws = new WebSocket(ADDR);
        this.ws.onmessage = (msg) => {
          // console.log('Power msg ', msg)
          const res = JSON.parse(msg.data);
          //console.log('Power response ',res);
          this.mergePowerStationData(res)
        };
        this.ws.onerror = (error) => {
          console.log('Error ', error)
          this.connectPower()
        }
        this.ws.onclose = (event) => {
          console.log("WebSocket is closed now.", event);
          this.connectPower();
        }
      },
      mergePowerStationData(res) {
        this.updatePowerStation(res);
        const streamedPowerStation = res
        const getPowerStation = this.powerStations.find(x => x.id === res.id)
        if(getPowerStation) {
          const powerStationUnits = getPowerStation.units
          const streamedStationUnits = streamedPowerStation.units
          
          const updatedPowerStationUnits = powerStationUnits.filter((item) => {
            const foundItem = streamedStationUnits.find(x => x.id === item.id)
            if(foundItem) {
              item.powerData = foundItem.gd;
              item.pd = foundItem.gd
            }
            return item
          })
          this.powerStations = this.powerStations.filter(x => {
            if(x.name === getPowerStation.name) {
              x.units = updatedPowerStationUnits
            }
            return x
          })
          // console.log('Updated Units ', this.powerStations)
        }

      },
  },
  mounted() {
    this.setPowerStations(this.powerStations);
    // this.connect();
    this.connectPower()
    //console.log(this.pStations);
  },
};
</script>

<style>

</style>
