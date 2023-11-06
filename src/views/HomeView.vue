<template>
  <div class="main">
    <button @click="logout">Se déconnecter</button>

    Hello from {{ msg }}
    <br />
    Connected as : {{ user.name }}
    <br />
    <RouterLink to="/about">ABOUT PAGE</RouterLink>
  </div>
</template>

<script>
import { axiosPrivate } from '../api/axios'

export default {
  name: 'HomeView',

  data() {
    console.log('JE SUIS DANS HOME')
    return {
      msg: 'home',
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser
    },
  },
  methods: {
    async logout() {
      try {
        const res = await axiosPrivate.get('/auth/logout')
        console.log(res.data)
        this.$store.commit('setLoggedIn', false)
        this.$router.push('/login')
      } catch (err) {
        console.log(res.data)
      }
    },
  },
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
</style>
