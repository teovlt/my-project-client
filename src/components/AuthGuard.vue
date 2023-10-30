<template>
  <div>
    <p v-if="!isAuthenticated">Vous devez être connecté pour accéder à cette page. Redirection vers la page de connexion...</p>
    <router-view v-else />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import router from '../router/routes'

export default {
  setup() {
    const store = useStore()
    const isAuthenticated = computed(() => store.state.isLoggedIn)

    if (!isAuthenticated.value) {
      router.replace({ name: 'login' })
    }
    return {
      isAuthenticated,
    }
  },
}
</script>
