<template>
    <div class="overlayContainer"  @click="closeModal" >
          <div class="overlayContainer__content" :class="[lineDetails ? lineDetails.lineColor : '', addTextColor]">
            <h4 class="overlayContainer__content__title">{{lineDetails ? lineDetails.name.toUpperCase() : ''}}</h4>
            <div class="divider" />
            <div class="overlayContainer__content__row">
              <p>Power</p>
              <p>{{lineDetails ? lineDetails.power : ''}} MW</p>
            </div>
            <div class="overlayContainer__content__row">
              <p>Voltage</p>
              <p>{{lineDetails ? lineDetails.voltage : ''}} KV</p>
            </div>
            <div class="overlayContainer__content__row">
              <p>Current</p>
              <p>{{lineDetails ? lineDetails.current : ''}} Amp</p>
            </div>
            <div class="overlayContainer__content__row">
              <p>Reactive Power</p>
              <p>{{lineDetails ? lineDetails.mvar : ''}} MVar</p>
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
    props: ["name", "id", "stationId", "transmissionData", "connections"],
    mixins: [voltageDisplayMixin],
    components: {
        LineData,
    },
    computed: {
      ...mapState(['lineDetails']),
      addTextColor() {
        if(this.lineDetails) {
          if(this.lineDetails.lineColor === 'green' || this.lineDetails.lineColor === 'red') {
            return 'colorWhite'
          }
        }
        return 'colorBlack'
      }
    },
    watch: {
        hasEmptyTransmissionValue(newValue, oldValue) {
        },
    },
    methods: {
      ...mapActions(['setLineDetails', 'toggleModal']),
      closeModal() {
        this.toggleModal(false),
        this.setLineDetails(null)
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
      
      clickedOn() {
        console.log('Box clicked')
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


