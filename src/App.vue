<template>
  <div id="app">
    <router-view :allStations="stations" />
  </div>
</template>

<script>
import { SOCKET_ADDR, SOCKET_AUTH_ADDR, STORAGE_KEY, POWER_SOCKET_ADDR } from "@/constants";
import { RouteEnum } from "@/router";
import { powerStations } from "@/powerStations";
import LineBoxModal from '@/components/LineBoxModal';
import { stations } from "@/stations";

import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      stations,
      powerStations: powerStations,
      ws: null,
      wsPower: null,
      connectTrials: 0,
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
        this.wsPower = new WebSocket(ADDR);
        this.wsPower.onmessage = (msg) => {
          // console.log('Power msg ', msg)
          const res = JSON.parse(msg.data);
          //console.log('Power response ',res);
          this.mergePowerStationData(res)
        };
        this.wsPower.onerror = (error) => {
          console.log('Error ', error)
          this.connectPower()
        }
        this.wsPower.onclose = (event) => {
          console.log("WebSocket is closed now.", event);
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

    async connect() {
      const data = { token: 123 };
      
      const ADDR = `${SOCKET_ADDR}token=${data.token}`;
      this.ws = new WebSocket(ADDR);
      this.ws.onmessage = (msg) => {
        // console.log('msg ', msg)
        this.connectTrials = 0;
        const res = JSON.parse(msg.data);
        this.connectObj = { id: res.id, connected: true }
        
        this.mergeData(res)
      };
      this.ws.onerror = (error) => {
        console.log('Error ', error)
        this.connect()
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
      }
    },

  },

  mounted() {
    this.setPowerStations(this.powerStations);

    this.connect();

    this.connectPower()
    //console.log(this.pStations);
  },
};
</script>

<style>

</style>
