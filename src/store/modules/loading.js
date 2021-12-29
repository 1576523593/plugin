const state = {
  LOADING: false
}

const mutations = {
  showLoading (state) {
    state.LOADING = true
  },
  hideLoading (state) {
    state.LOADING = false
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
