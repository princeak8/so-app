<template>
    <div :id="stationId+'-'+id" class="line" :class="[lineColor, hightlightContainer]" @click="clickedOn" >
          <div class="line-name">{{name.toUpperCase()}}</div>
          <div v-if="connections.length > 0">
              <div v-for="(connection, i) in connections"  :key="`LINE_${i}`"
                :id="connection.name" class="connection" 
                :class="[connectionSize(connection.alignment), connectionColor.connection]" 
              >
                <i v-if="onPotential && importing && connection.start" class="fas fa-lg arrow" :class="[arrowStartStyles(connection.alignment, connection.arrowDirection), connectionColor.arrow]"></i>
                <i v-if="onPotential && !importing && connection.end" class="fas fa-lg arrow" :class="[arrowEndStyles(connection.alignment, connection.arrowDirection), connectionColor.arrow]"></i>
              </div>
          </div>
          <div class="data-group">
              <div>
                <LineData :text="power+' MW'" />
                <LineData :text="current+' A'" />
              </div>
              <div>
                <LineData :text="voltage+' KV'" />
                <LineData :text="mvar+' MX'" />
              </div>
          </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


<script>
import LineData from "./LineData.vue";
import voltageDisplayMixin from "@/mixins/voltage-display-mixin";
import { mapActions, mapState } from 'vuex';

const threshold = Object.freeze({
  voltage: Object.freeze({ min: 300, max: 342 }),
});

export default {
    name: "LineBox",
    mounted() {
      //console.log(name.toUpperCase()+': '+ this.transmissionData.voltage);
    },
    props: ["name", "id", "stationId", "transmissionData", "connections", "mappedLines"],
    mixins: [voltageDisplayMixin],
    components: {
        LineData,
    },
    computed: {
      ...mapState(['lineDetails', 'showOverlay']),
      mappedLine() {
        return this.mappedLines.find(x => x.id === this.id);
      },
      power() {
        if(this.transmissionData.mw=='') {
          return 'loading..';
        }
        const value = this.$options.filters.formatAmount(this.transmissionData.mw, 1)
        return value;
      },
      voltage() {
        if(this.transmissionData.V=='') {
          return 'loading..';
        }
        const value = this.$options.filters.formatAmount(this.transmissionData.V, 1)
        return value;
      },
      current() {
        if(this.transmissionData.A =='') {
          return 'loading..';
        }
        
        const value = this.$options.filters.formatAmount(this.transmissionData.A, 1)
        return value;
      },
      mvar() {
        if(this.transmissionData.mvar=='') {
          return 'loading..';
        }
        const value = this.$options.filters.formatAmount(this.transmissionData.mvar, 1)
        return value;
      },
      lineColor() {
        const { voltage: voltageThreshold } = threshold;
        const aboveThreshold = this.transmissionData.V > voltageThreshold.max;
        const belowThreshold = this.transmissionData.V < voltageThreshold.min;
        if (!this.transmissionData.V || this.transmissionData.V =='' || this.transmissionData.V <= 0) {
          return "grey";
        }
        if (aboveThreshold || belowThreshold) {
          return "red";
        }
        return "green";
        // return "#00680A";
      },
      hightlightContainer() {
        return "makeHovarable"
      },
      //Checks if there is voltage on the line i.e voltage is sent and its above zero
      onPotential() {
        if (this.connectionHasVoltage()) return true;
      },
      //checks if the line is receiving/importing power i.e power is above zero or not negative/ power on the corresponding line is below zero
      importing() {
        return this.isImporting() ? true : false;
      },
      connectionColor() {
        return (this.connectionHasVoltage()) ? {connection: 'blue', arrow: 'blueColor'} : {connection: 'grey1', arrow: 'grey1Color'};
      }
    },
    watch: {
      transmissionData: function(val) {
        if(this.lineDetails) {
          if(this.lineDetails.name === this.name) {
            const obj = {...this.lineDetails, power: val.mw, current: val.A, voltage: val.V, mvar: val.mvar, lineColor: this.lineColor }
            this.setLineDetails(obj)
            // console.log('Watching transmission data ',obj)
          }
        }
        
      },
        hasEmptyTransmissionValue(newValue, oldValue) {
        },
    },
    methods: {
      ...mapActions(['setLineDetails', 'toggleModal']),
      connectionHasVoltage() {
          var onPotential = false;
          if(this.transmissionData.V && this.transmissionData.V !='' && this.transmissionData.V > 0) onPotential = true;
          if(this.mappedLine?.td.V && this.mappedLine.td.V !='' && this.mappedLine.td.V > 0) onPotential = true;
          
          return onPotential;
      },

      isImporting() {
          var importing = false;
          if(this.transmissionData.mw && this.transmissionData.mw < 0) importing = true;
          if(this.mappedLine?.td.mw && this.mappedLine.td.mw > 0) importing = true;
          return importing;
      },

      connectionSize(alignment) {
        if(alignment=='v') {
          return 'width';
        }
        if(alignment=='h') {
          return 'height';
        }
        return '';
      },
      //Returns the class styles of the starting arrow depending on whether its a vertical or horizontal line 
      arrowStartStyles(alignment, arrowDirection) {
        let classNames = '';
        if(alignment=='v') {
          classNames += 'vArrowStart';
          classNames += (arrowDirection == 'both') ? ' fa-angle-up' : ' fa-angle-'+arrowDirection;
        }
        if(alignment=='h') {
          classNames += 'hArrowStart';
          classNames += (arrowDirection == 'both') ? ' fa-angle-left' : ' fa-angle-'+arrowDirection;
        }
        return classNames;
      },
      //Returns the class styles of the ending arrow depending on whether its a vertical or horizontal line 
      arrowEndStyles(alignment, arrowDirection) {
        let classNames = '';
        if(alignment=='v') {
          classNames = (arrowDirection == 'both') ? 'fa-angle-down vArrowEnd' : 'fa-angle-'+arrowDirection;
          if(arrowDirection == 'up') classNames += ' vArrowStart';
          if(arrowDirection == 'down') classNames += ' vArrowEnd';
        }
        if(alignment=='h') {
          classNames += 'hArrowEnd';
          classNames += (arrowDirection == 'both') ? ' fa-angle-right' : ' fa-angle-'+arrowDirection;
        }
        return classNames;
      },
      clickedOn() {
        const obj = {
          power: this.power,
          voltage: this.voltage,
          current: this.current,
          mvar: this.mvar,
          lineColor: this.lineColor,
          name: this.name
        }
        this.setLineDetails(obj)
        this.toggleModal(true)
      }
    },
    data() {
      return {
        msg: {
          text: "",
          type: "",
        },
      };
    },
};
</script>


