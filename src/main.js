import Vue from 'vue'
import Croppa from 'vue-croppa'
import 'vue-croppa/dist/vue-croppa.css'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false
Vue.use(Croppa)

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
