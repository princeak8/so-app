<template>
    <div :id="stationId+'-'+name" class="line" :class="[lineColor]" >
        <div class="line-name">{{name.toUpperCase()}}</div>
            <div v-if="connections.length > 0">
                <div v-for="connection in connections"  
                  :id="connection.name" class="connection" 
                  :class="[connectionSize(connection.alignment), connectionColor.connection]" 
                >
                  <i v-if="onPotential && importing && connection.start" class="fas fa-lg arrow" :class="[arrowStartStyles(connection.alignment, connection.arrowDirection), connectionColor.arrow]"></i>
                  <i v-if="onPotential && !importing && connection.end" class="fas fa-lg arrow" :class="[arrowEndStyles(connection.alignment, connection.arrowDirection), connectionColor.arrow]"></i>
                </div>
            </div>
            <div class="data-group">
                <LineData :text="power+'MW'" />
                <LineData :text="current+'A'" />
                <LineData :text="voltage+'KV'" />
                <LineData :text="mvar+'MX'" />
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

const threshold = Object.freeze({
  voltage: Object.freeze({ min: 300, max: 342 }),
});

export default {
    name: "LineBox",
    mounted() {
      //console.log(name.toUpperCase()+': '+ this.transmissionData.voltage);
    },
    props: ["name", "stationId", "transmissionData", "connections"],
    mixins: [voltageDisplayMixin],
    components: {
        LineData,
    },
    computed: {
      power() {
        if(this.transmissionData.power=='') {
          return 'loading..';
        }
        return this.transmissionData.power;
      },
      voltage() {
        if(this.transmissionData.voltage=='') {
          return 'loading..';
        }
        return this.transmissionData.voltage;
      },
      current() {
        if(this.transmissionData.current=='') {
          return 'loading..';
        }
        return this.transmissionData.current;
      },
      mvar() {
        if(this.transmissionData.mvar=='') {
          return 'loading..';
        }
        return this.transmissionData.mvar;
      },
      lineColor() {
        const { voltage: voltageThreshold } = threshold;
        const aboveThreshold = this.transmissionData.voltage > voltageThreshold.max;
        const belowThreshold = this.transmissionData.voltage < voltageThreshold.min;
        if (!this.transmissionData.voltage || this.transmissionData.voltage=='' || this.transmissionData.voltage <= 0) {
          return "grey";
        }
        if (aboveThreshold || belowThreshold) {
          return "red";
        }
        return "green";
      },
      //Checks if there is voltage on the line i.e voltage is sent and its above zero
      onPotential() {
        if (this.transmissionData.voltage && this.transmissionData.voltage!='' && this.transmissionData.voltage > 0) return true;
      },
      //checks if the line is receiving/importing power i.e power is above zero or not negative
      importing() {
        return (this.transmissionData.power > 0) ? true : false;
      },
      connectionColor() {
        return (this.transmissionData?.voltage && this.transmissionData.voltage!='' && this.transmissionData.voltage > 0) ? {connection: 'blue', arrow: 'blueColor'} : {connection: 'grey1', arrow: 'grey1Color'};
      }
    },
    watch: {
        hasEmptyTransmissionValue(newValue, oldValue) {
        },
    },
    methods: {
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


