import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/filter.js'
import './utils/components.js'
import './utils/directive.js'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


