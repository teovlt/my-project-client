<template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="connectUser()">
      <input type="text" placeholder="Nom d'utilisateur" v-model="userName" />
      <input type="password" placeholder="Mot de passe" v-model="password" />
      <input type="password" placeholder="Confirmez votre mot de passe" v-model="checkPassword" />
      <button type="submit">Se créer un compte</button>
    </form>
    <router-link to="/login">J'ai déja un compte, se connecter !</router-link>
  </div>
</template>

<script>
export default {
  name: 'SignUpView',
  data: () => ({
    userName: '',
    password: '',
    checkPassword: '',
  }),
  methods: {
    connectUser() {
      console.log('Username : ' + this.userName)
      console.log('Password : ' + this.password)
      console.log('Password verif : ' + this.checkPassword)
      this.$router.push('/')
    },
  },
}
</script>
