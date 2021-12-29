import storage from '@/utils/sessionStorage'
import constants from '@/utils/constants'

const state = {
  controlType: storage.getItem(constants.CONTROL_TYPE_KEY),
  isControl: false
}

const mutations = {
  SET_CONTROL_TYPE: (state, controlType) => {
    storage.setItem(constants.CONTROL_TYPE_KEY, controlType)
    state.controlType = controlType
  },
  SET_IS_CONTROL: (state, isControl) => {
    storage.setItem(constants.IS_CONTROL_KEY, isControl)
    state.isControl = isControl
  }
}

const actions = {
  updateControlState ({ commit }, to) {
    return new Promise((resolve, reject) => {
      if (
        to.path.includes('control') ||
        (to.redirectedFrom && to.redirectedFrom.includes('control'))
      ) {
        commit('SET_IS_CONTROL', true)
      } else {
        commit('SET_IS_CONTROL', false)
      }
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
