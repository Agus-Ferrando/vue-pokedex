import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import SearchPokemon from '../views/SearchPokemon.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/search',
    name: 'search-pokemons',
    component: SearchPokemon
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: SignUp
  },
  {
    path: '/login',
    name: 'log-in',
    component: LogIn
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
