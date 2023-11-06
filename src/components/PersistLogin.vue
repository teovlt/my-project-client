<template>
  <div>
    <router-view v-if="!isLoading"></router-view>
  </div>
</template>

<script>
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import useRefreshToken from '../hooks/useRefreshToken'
import store from '../store'

const { refresh } = useRefreshToken()
const axiosPrivate = useAxiosPrivate()

export default {
  data: () => ({
    isLoading: true,
  }),
  async mounted() {
    // await refresh()
    this.isLoading = false
    this.loadUser()
  },
  methods: {
    async loadUser() {
      try {
        const response = await axiosPrivate.get('/users/me')
        this.$store.dispatch('setUser', { user: response.data })
        console.log('JE PERSIST')
      } catch (error) {
        console.log('coucouc')
        this.$store.dispatch('clearUser')
        this.$store.commit('setLoggedIn', false)
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>
