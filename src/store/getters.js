export default {
  getUser(state) {
    console.log('Je recupere lutilisateur' + state.user)
    return state.user
  },
}
