const module = {
  namespaced : true,
  state : {
    cityId: 110100,
    cityName: "北京"
  },
  mutations : {
   setCityName (state: { cityName: any; },data: any) {
    state.cityName = data
   },
   setCityId (state: { cityId: any; },data: any) {
    state.cityId = data
   }
  },
  actions : {

  },
  getters : {
    change (state: { cinema: { cinemaList: any[] } },data: any) {
      return state.cinema.cinemaList.filter((val) => {
        if (data.length >= 1) {
          return val.name.indexOf(data) > -1
        }
      })
    }
  }
}
export default module;