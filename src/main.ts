import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './utils/filter.js'
import './utils/components.js'
import './utils/directive.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
