const state = {
  leftNavState: false,
  loading: false
}

const mutations = {
  changeLeftNavState (state, isShow) {
    state.leftNavState = isShow
  },
  startLoading (state) {
    state.loading = true
  },
  finishLoading (state) {
    state.loading = false
  }
}

const actions = {
  changeLeftNavState ({commit}, isShow) {
    commit('changeLeftNavState', isShow)
  }
}

const getters = {
  getLeftNavState (state) {
    return state.leftNavState
  },
  getLoading (state) {
    return state.loading
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
