export default {
  SET_USER(state, user) {
    console.log('coucou')
    state.user = user
  },
  async logout() {
    console.log('logout')
  },
}
