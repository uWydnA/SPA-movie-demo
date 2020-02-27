import Vue from 'vue'
import Vuex from 'vuex'
import cinema from '../store/module/cinemaModule'
import tabber from '../store/module/tabber'
import city from '../store/module/findCityList'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
  },
  mutations: {
   
   
  },
  actions: {

  },
  modules: {
    cinema,
    tabber,
    city
  }
})
