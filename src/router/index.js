import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import SearchPokemon from '../views/SearchPokemon.vue'


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
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


export default router
