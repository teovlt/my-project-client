<template>
  <header>
    <button>LOGO</button>
    <h2>Titre du site</h2>
    <button @click="disconnect()">Se deconnecter</button>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    msg: 'cc',
  }),
  methods: {
    async disconnect() {
      await this.$store.dispatch('logout').then(() => {
        this.$router.push('/')
      })
    },
  },
}
</script>
