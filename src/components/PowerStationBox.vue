<template>
  <div class="modal fade" :id="ids" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog row" role="document" style="width: 80%;">
          <div class="modal-content row">
              <div class="modal-header">
                  <button type="button" id="close-modal" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h5 class="modal-title" id="station-name">{{name}}</h5>
              </div>

              <div class="row" style="padding-left: 4%; padding-right: 4%; width: 100%">
                  <div style="margin-top:20px;">
                      <div style="display:flex; flex-direction: row; flex-wrap: wrap ">
                        <div class="unit green" v-for="unit in units">
                            <div class="unit-name">UNIT {{unit.name.toUpperCase()}}</div>
                            <div class="info-group">
                                <div class="unit-data watt">{{unit.powerData.mw}}MW</div>
                                <div class="unit-data volt">{{unit.powerData.mvar}}MX</div>
                            </div>
                        </div>   
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
            
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#station-name {
    height: 45px;
    margin-top: 0px;
    margin-bottom: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding: 0;
  font-size: 30px;
  overflow: hidden;
}

.green {
  background: #17d617;
}

.red {
  background: #dd0505;
}

.unit {
  width: 15%;
  height: 150px; 
  padding: 0;
  /* margin-right: 1%;
  margin-left: 1%; */
  border-radius: 3px;
  border: solid 1px #d8d3d3;
}

.unit .unit-name {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 8px;
  padding: 0;
}

.unit .info-group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  font-size: 12px;
  margin: 0;
  padding: 0;
}

.unit .info-group .unit-data {
  margin: 0;
  padding: 0;
  font-size: 24px;
}
</style>


<script>
import UnitBox from "./UnitBox.vue";

export default {
    name: "PowerStationBox",
    components: {
        UnitBox
    },
    mounted() {
        //console.log('lines: ', this.lines);
    },
    props: ["name", "ids", "units"],
    data() {
        return {
            //
        }
    },
    computed: {
        
    },
    methods: {
        
    },
}
</script>


