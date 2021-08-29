<template>
    <div :id="stationId+'-'+name" class="unit green" >
        <div class="unit-name">UNIT {{name.toUpperCase()}}</div>
            <div class="info-group">
                <LineData :text="power+'MW'" />
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

const threshold = Object.freeze({
  voltage: Object.freeze({ min: 300, max: 342 }),
});

export default {
    name: "UnitBox",
    mounted() {
      //console.log(name.toUpperCase()+': '+ this.transmissionData.voltage);
    },
    props: ["name", "stationId", "powerData"],
    //mixins: [voltageDisplayMixin],
    components: {
        LineData,
    },
    computed: {
      power() {
        if(this.powerData.power=='') {
          return 'loading..';
        }
        return this.powerData.power;
      },
      mvar() {
        if(this.powerData.mvar=='') {
          return 'loading..';
        }
        return this.powerData.mvar;
      },
    //   lineColor() {
    //     const { voltage: voltageThreshold } = threshold;
    //     const aboveThreshold = this.transmissionData.voltage > voltageThreshold.max;
    //     const belowThreshold = this.transmissionData.voltage < voltageThreshold.min;
    //     if (!this.transmissionData.voltage || this.transmissionData.voltage=='' || this.transmissionData.voltage <= 0) {
    //       return "grey";
    //     }
    //     if (aboveThreshold || belowThreshold) {
    //       return "red";
    //     }
    //     return "green";
    //   },
    },
    watch: {
        hasEmptyTransmissionValue(newValue, oldValue) {
        },
    },
    methods: {
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


