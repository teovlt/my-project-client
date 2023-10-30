<template>
  <div>
    <router-view v-if="!isLoading"></router-view>
  </div>
</template>

<script>
import useRefreshToken from '../hooks/useRefreshToken'

const { refresh } = useRefreshToken()

export default {
  data: () => ({
    isLoading: true,
  }),
  async mounted() {
    this.loadUser()
  },
  methods: {
    async loadUser() {
      try {
        await refresh()
        const response = await useAxiosPrivate().get('/user/me')
        this.$store.dispatch('setUser', { ...this.$store.state.user, ...response.data })
      } catch (error) {
        this.$store.dispatch('clearUser')
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>
