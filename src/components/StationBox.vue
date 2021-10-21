<template>
    <div >
        <div :id="id">
            <div class="station-name" >
                <p @click="openModal(station)" :class="{nameHeighlight: station.gs}">{{name}}</p>
            </div>
            <div v-if="lines.length > 0">
                <LineBox v-for="(line, i) in lines" :key="`ST_${i}`"
                    :station="name" :id="line.id" :name="line.name" :stationId="id" 
                    :transmissionData="line.td" :connections="connections(line)" 
                    :line132="station.is132"
                    :mappedLines="mappedLines" /> 
            </div>
        </div>
        
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .nameHeighlight {
        color:#0099CC; cursor: pointer;
    }
</style>


<script>
import LineBox from "./LineBox.vue";
import voltageDisplayMixin from "@/mixins/voltage-display-mixin";
import MainBox from "@/components/MainBox.vue";

export default {
    name: "StationBox",
    components: {
        LineBox, MainBox
    },
    mounted() {
        console.log('id ',this.id)
        //console.log('lines: ', this.lines);
    },
    props: ["name", "id", "lines", "station", "stations"],
    data() {
        return {
            //
            initialState: false,
            connected: false,
            connectionLostTime: 0
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
                            mappedLines.push({id: line, td: mappedLine.td});
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
    },
}
</script>


