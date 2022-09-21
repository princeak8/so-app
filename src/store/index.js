import Vue from 'vue'
import Vuex from 'vuex';
import mutations from './mutations';
import * as actions from './actions/index'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showOverlay: false,
    lineDetails: null,
    pStations: [],
    stations: [],
    connected: false,
    connectionLostWaitPeriod: 20
  },
  mutations,
  actions,
  modules: {
  }
})
