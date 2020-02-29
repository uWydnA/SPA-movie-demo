const module = {
  namespaced: true,
  state: {
    isTabberShow: true
  },
  mutations: {
    show (state: { isTabberShow: boolean }) {
      state.isTabberShow = true
    },
    hide (state: { isTabberShow: boolean }) {
      state.isTabberShow = false
    }
  },
  actions: {

  },
  getters: {

  }
}
export default module
