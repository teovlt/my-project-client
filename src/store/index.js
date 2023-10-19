import { createStore } from 'vuex'

export default new createStore({
  state: {
    user: null,
  },
  getters: {
    getUser(state) {
      return state.user
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },
  },
})
