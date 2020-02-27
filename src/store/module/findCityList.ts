import axios from 'axios'
const module = {
  namespaced : true,
  state : {
    citylist : []
  },
  mutations : {
    commitCityList (state: { citylist: any },data: any) {
      state.citylist = data
    }
  },
  actions : {
   findCityList (store: { commit: (arg0: string, arg1: any) => void }) {
    axios({
      url:'https://m.maizuo.com/gateway?k=7588732',
      method :'get',
      headers : {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1582528983545460847732"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res=>{
      store.commit('commitCityList',res.data.data.cities)
    })
   }
  }
}
export default module;