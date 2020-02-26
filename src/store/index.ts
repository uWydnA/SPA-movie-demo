import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabberShow:true,
    cinemaList : []
  },
  mutations: {
    show (state) {
      state.isTabberShow = true;
    },
    hide (state) {
      state.isTabberShow = false;
    },
    SaveCinemalist (state,data) {
      state.cinemaList = data
    }
  },
  actions: {
    findCinemaList (store) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=2642662',
        method: 'get',
        headers: {
          'X-Client-Info':
            ' {"a":"3000","ch":"1002","v":"5.0.4","e":"1581577409201863463470","bc":"310100"}',
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        store.commit('SaveCinemalist',res.data.data.cinemas)
      })
    }
  },
  modules: {
  }
})
