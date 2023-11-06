<template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="connectUser()">
      <input type="text" placeholder="Nom d'utilisateur" v-model="userName" />
      <input type="password" placeholder="password" v-model="password" />
      <button type="submit">Se connecter</button>
    </form>
    <router-link to="/register">Je n'ai pas de compte. S'inscrire ici!</router-link>
  </div>
</template>

<script>
import { axiosPrivate } from '../api/axios'
import store from '../store'
const LOGIN_URL = '/auth/login'

export default {
  name: 'SignInView',
  data: () => ({
    userName: '',
    password: '',
  }),
  computed: {},
  methods: {
    async connectUser() {
      try {
        const res = await axiosPrivate.post(LOGIN_URL, JSON.stringify({ name: this.userName, password: this.password }))
        const accessToken = res?.data?.accessToken
        this.$store.dispatch('setUser', { ...res.data.user, accessToken: accessToken })
        this.$store.commit('setLoggedIn', true)
        this.$router.push('/')
      } catch (error) {
        if (!error?.response) {
          console.log('Une erreur est survenue ')
        } else if (error.response?.status === 404) {
          console.log("Votre nom d'utilisateur et/ou votre mot de passe et incorrect")
        }
      }
    },
  },
}
</script>
