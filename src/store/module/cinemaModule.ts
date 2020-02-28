import axios from 'axios'
const module = {
  namespaced : true,
  state : {
    cinemaList: []
    
  },
  mutations : {
    SaveCinemalist (state: { cinemaList: any }, data: any) {
      state.cinemaList = data
    }
  },
  actions : {
    findCinemaList (store: { commit: (arg0: string, arg1: any) => void },data: any) {
      axios({
        url: `https://m.maizuo.com/gateway?cityId=${data}&ticketFlag=1&k=2642662`,
        method: 'get',
        headers: {
          'X-Client-Info':
            ' {"a":"3000","ch":"1002","v":"5.0.4","e":"1581577409201863463470","bc":"310100"}',
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        store.commit('SaveCinemalist', res.data.data.cinemas)
      })
    }
  },
  getters : {
  }
}
export default module;