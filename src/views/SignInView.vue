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
export default {
  name: 'SignInView',
  data: () => ({
    userName: '',
    password: '',
  }),
  methods: {
    async connectUser() {
      console.log('connexion')
    },
  },
}
</script>
