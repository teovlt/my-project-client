<template>
  <div>
    <Navbar />
    Hello from {{ msg }}
    <br />
    <RouterLink to="/about">ABOUT PAGE</RouterLink>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar: Navbar,
  },
  data: () => ({
    msg: 'home',
  }),
  computed: () => ({}),
}
</script>
