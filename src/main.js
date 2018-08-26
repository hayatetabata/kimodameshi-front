import Vue from 'vue'
import Croppa from 'vue-croppa'
import 'vue-croppa/dist/vue-croppa.css'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Croppa)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
