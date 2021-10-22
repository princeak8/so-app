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
  },
  mutations,
  actions,
  modules: {
  }
})
