<template>
    <div>
        <div :id="id">
            <div class="station-name">
                <p @click="openModal(station)" :class="{nameHeighlight: station.gs}">{{name}}</p>
            </div>
            <LineBox 
                v-if="lines.length > 0" 
                v-for="(line, i) in lines" 
                :station="name" :id="line.id" :name="line.name" :stationId="id" :transmissionData="line.td" :connections="connections(line)" 
            /> 
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
        //console.log('lines: ', this.lines);
    },
    props: ["name", "id", "lines", "station"],
    data() {
        return {
        //
        }
    },
    computed: {
        
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


