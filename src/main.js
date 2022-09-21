import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from "vue-js-modal";

import '@/utils/filters';
import '@/utils/notifications';

Vue.config.productionTip = true; //false

Vue.use(VModal);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
