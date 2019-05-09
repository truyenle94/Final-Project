import Vue from 'vue'
import App from './App.vue'

// Import VueRouter Library and routes
import VueRouter from 'vue-router'
import router from './router'

// Import BootstrapVue and feeService
import BootstrapVue from 'bootstrap-vue'
import FeeAPIService from '@/services/feeService'

//User VueRouter
Vue.use(VueRouter)

//Configure Bootstrap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Add API service to Vue
Vue.prototype.$feeService = FeeAPIService

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
