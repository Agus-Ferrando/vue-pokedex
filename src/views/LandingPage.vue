<template>
  <div class="routes">
    <div class="link" @click="showSignup">Sign Up</div>
    <div class="link" @click="showLogin">Log in</div>
  </div>
  <section>
  <img alt="Vue logo" src="../assets/pokedex.png" class="logo">
  </section>
  <section class="form" v-if="signup">
    <SignUp />
  </section>
  <section class="form" v-if="login">
    <LogIn />
  </section>
</template>

<script>
import SignUp from '../components/SignUp.vue';
import LogIn from '../components/LogIn.vue'

export default {
  name: 'LandingPage',
  components: {SignUp, LogIn},
    data(){
      return {
        login: false,
        signup: false
    }
  },
  methods:{
    showSignup(){
      this.signup == true;
    },
    showLogin(){
      this.login == true
    }
  }
}
</script>

<style scoped>

.routes{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.link{
  color: #555;
  text-decoration: none;
  font-size: 1.5em;
  margin: 1em;
}

section{
  display: flex;
  justify-content: center;
}
.logo{
  width: 30%;
  margin-top: 2em;
}

</style>