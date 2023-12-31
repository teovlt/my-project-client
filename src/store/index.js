import { createStore } from 'vuex'

export default new createStore({
  state: {
    user: null,
    isLoggedIn: false,
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
    CLEAR_USER(state, user) {
      state.user = null
    },
    setLoggedIn(state, value) {
      state.isLoggedIn = value
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },
    clearUser({ commit }, user) {
      commit('CLEAR_USER', user)
    },
  },
})
