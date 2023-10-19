<template>
  <div>
    <Navbar />
    Hello from {{ msg }}
    <br />
    Connected as {{ user }}
    <br />
    <RouterLink to="/about">ABOUT PAGE</RouterLink>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { axiosPrivate } from '../api/axios'

const REFRESH_URL = '/auth/refresh-token'

export default {
  name: 'HomeView',
  components: {
    Navbar: Navbar,
  },
  data() {
    return {
      msg: 'home',
      userLoaded: false, // Ajoutez une variable pour suivre si l'utilisateur a été chargé
    }
  },
  computed: {
    user() {
      if (!this.userLoaded) {
        this.getUser() // Chargez l'utilisateur si ce n'est pas encore fait
        this.userLoaded = true
      }
      return this.$store.getters.getUser
    },
  },
  methods: {
    async getUser() {
      if (!this.userLoaded) {
        const res = await axiosPrivate.get(REFRESH_URL)
        this.$store.dispatch('setUser', res.data.user)
      }
    },
  },
}
</script>
