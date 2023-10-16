<template>
  <div>
    Hello from {{ msg }}
    <br />
    <RouterLink to="/">HOME PAGE</RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'AboutVue',
  data: () => ({
    msg: 'about',
  }),
}
</script>
