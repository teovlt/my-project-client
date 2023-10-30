<template>
  <header>
    <button>LOGO</button>
    <h2>Titre du site</h2>
    <button @click="logout">Se déconnecter</button>
  </header>
</template>

<script>
import axios from '../api/axios'
export default {
  methods: {
    async logout() {
      try {
        const res = await axios('/auth/logout')
        console.log(res.data)
        this.$router.push('/login')
      } catch (err) {
        console.log(res.data)
      }
    },
  },
}
</script>
