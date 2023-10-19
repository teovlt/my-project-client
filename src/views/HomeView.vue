<template>
  <div>
    <button @click="logout">Se déconnecter</button>

    Hello from {{ msg }}
    <br />
    Connected as {{ user }}
    <br />
    <RouterLink to="/about">ABOUT PAGE</RouterLink>
  </div>
</template>

<script>
import { axiosPrivate } from '../api/axios'

export default {
  name: 'HomeView',

  data() {
    return {
      msg: 'home',
      userLoaded: false, // Ajoutez une variable pour suivre si l'utilisateur a été chargé
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
        this.$router.push('/login')
      } catch (err) {
        console.log(res.data)
      }
    },
  },
}
</script>
