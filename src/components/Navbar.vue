<template>
  <header>
    <button>LOGO</button>
    <h2>Titre du site</h2>
    <button @click="logout">Se déconnecter</button>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    async logout() {
      console.log('logout')
    },
  },
}
</script>
