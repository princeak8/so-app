<template>
    <div>
        <div :id="id" class="station">
            <div class="station-name" >
                <p @click="openModal(station)" :class="{nameHeighlight: station.gs}">{{name}}</p>
            </div>
            <div v-if="lines.length > 0">
                <LineBox v-for="(line, i) in lines" :key="`ST_${i}`"
                    :station="name" :id="line.id" :name="line.name" :stationId="id" 
                    :transmissionData="line.td" :connections="connections(line)" 
                    :line132="station.is132" :isGS="line.isGS"
                    :mappedLines="mappedLines" /> 
            </div>
            <div class="connectedOverlay" v-if="initialState && !connected">
                <p>Connection Lost</p>
            </div>
        </div>
        
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .nameHeighlight {
        color:#0099CC; cursor: pointer;
    }
    .connectedOverlay {
        position: absolute; top: 0px; left: 0px;
        width: 100%; height: 100%;
        background-color: rgba(255, 255, 255, 0.9); display: flex;
        justify-content: center; align-items: center; 
    }
    .connectedOverlay p {
        font-size: 9px; color: rgb(116, 2, 2); font-weight: bold;
    }
</style>


<script>
import LineBox from "./LineBox.vue";
import voltageDisplayMixin from "@/mixins/voltage-display-mixin";
import MainBox from "@/components/MainBox.vue";
import moment from 'moment';

export default {
    name: "StationBox",
    components: {
        LineBox, MainBox
    },
    mounted() {
        console.log('id ',this.id)
        //console.log('lines: ', this.lines);
    },
    props: ["name", "id", "lines", "station", "stations", "connectObj"],
    data() {
        return {
            //
            initialState: false,
            connected: false,
            connectionLostTime: 0,
            moment
        }
    },
    computed: {
        mappedLines() {
            const mappedLines = [];
            if(this.station.mappings) {
                const lines = this.stations.filter((station) => {
                    var mappedStation = this.station.mappings.find(x => x.stationId === station.id);
                    if(mappedStation) {
                        mappedStation.lines.forEach((line) => {
                            var mappedLine = station.lines.find(y => y.id === line);
                            if(mappedLine) {
                                mappedLines.push({id: line, td: mappedLine.td});
                            }
                        })
                    }
                })
            }
            //console.log('m ', mappedLines);
            //console.log('mappings: ',this.station.id+' : '+mappedLines);
            return mappedLines;
        }
    },
    methods: {
        connections(line) {
            return (line.connectionRoot) ? line.connections : []; 
        },
        openModal(station) {
            if(station.gs) {
                $('#'+station.gsId).modal('toggle');
            }
        },
        setConnected(value) {
            this.connected = value
        }
    },
    watch: {
        connectObj: function(obj) {
            if(obj.id && obj.id === this.id) {
                if(obj.connected) {
                    this.connected = obj.connected;
                    this.initialState = obj.connected;
                    this.connectionLostTime = this.moment().add(60, 'seconds')
                }
                // console.log('Obj ', obj)
            }
        }
    }
}
</script>


