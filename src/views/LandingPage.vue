<template>
  <div class="routes">
    <RouterLink to="/singup" class="link">Sign Up</RouterLink>
    <RouterLink to="/login" class="link">Log in</RouterLink>
  </div>
  <section>
  <img alt="Vue logo" src="../assets/pokedex.png" class="logo">
  </section>
</template>

<script>
export default {
  name: 'LandingPage',
 
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