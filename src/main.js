import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import axios from 'axios'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuesax from 'vuesax'

import './assets/scss/index.scss';
import 'vuesax/dist/vuesax.css' //Vuesax styles


Vue.use(Vuesax, {
  // options here
})

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')

export { axios }