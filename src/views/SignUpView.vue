<template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="createUser()">
      <input type="text" placeholder="Nom d'utilisateur" v-model="userName" />
      <input type="password" placeholder="Mot de passe" v-model="password" />
      <input type="password" placeholder="Confirmez votre mot de passe" v-model="checkPassword" />
      <button type="submit">Se créer un compte</button>
    </form>
    <router-link to="/login">J'ai déja un compte, se connecter !</router-link>
  </div>
</template>

<script>
import axios from '../api/axios'
const REGISTER_URL = '/auth/register'
export default {
  name: 'SignUpView',
  data: () => ({
    userName: '',
    password: '',
    checkPassword: '',
  }),
  methods: {
    async createUser() {
      try {
        const res = await axios.post(REGISTER_URL, JSON.stringify({ name: this.userName, password: this.password }), {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        })
        const accessToken = res?.data?.accessToken
        console.log(accessToken)

        this.$router.push('/')
      } catch (err) {
        if (err.code === 404) {
          console.log("Nom d'utilisateur déja pris")
        } else {
          console.log('Une erreur est survenue')
        }
      }
    },
  },
}
</script>
