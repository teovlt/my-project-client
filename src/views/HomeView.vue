<template>
  <div>
    <Navbar />
    Hello from {{ msg }}
    <br />
    Utilisateur : {{ user }}
    <br />
    <RouterLink to="/about">ABOUT PAGE</RouterLink>
  </div>
</template>

<script>
import axios from '../api/axios'
import Navbar from '../components/Navbar.vue'

const REFRESH_URL = '/auth/refresh-token'

export default {
  name: 'HomeView',
  components: {
    Navbar: Navbar,
  },
  data: () => ({
    msg: 'home',
  }),
  computed: {
    user() {
      this.checkUser()
      return this.$store.getters.getUser
    },
  },
  methods: {
    async checkUser() {
      const res = await axios.get(
        REFRESH_URL,
        { ...user._id },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      console.log(res)
    },
  },
  mounted: () => {},
}
</script>
