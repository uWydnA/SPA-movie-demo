import Vue from 'vue'
import Vuex from 'vuex'
import cinema from '../store/module/cinemaModule'
import tabber from '../store/module/tabber'
import city from '../store/module/findCityList'
import cityN from '../store/module/cityModule'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    reducer(data:any){
      return {
        cityN : data.cityN
      }
    } 
  })],
  state: {
   
  },
  mutations: {
   
   
  },
  actions: {

  },
  modules: {
    cinema,
    tabber,
    city,
    cityN
  }
})
