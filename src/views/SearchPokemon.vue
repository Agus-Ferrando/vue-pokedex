<template>
  <body>
   <main>
      <h1>POKEDEX SEARCHER</h1>
      <div class="search-box">
        <input type="text" class="search-bar" v-model="query" @keypress="fetchPokemon" placeholder="Search a pokemon">
      </div>

      <section class="pokemon-wrap" v-if='typeof pokemon.name != "undefined"'>
        <div class="pokemon-name">{{pokemon.name}}</div>
          <div class="poke-box">
            <img v-bind:src=pokemon.sprites.front_default class="poke-img">
            <div class="pokemon-info">
              Height: {{pokemon.height}}<br>
              Weight: {{pokemon.weight}}<br>
              Type: {{pokemon.types[0].type.name}}<br>
             
            </div>
            <div class="fav-btn">
              <a v-if="isFavorite" href="#" @click="removeFavorites">❌</a>
              <a v-else href="#" @click="addFavorites">⭐</a>
            </div>
          </div>  
      </section>

      <section class="favs">
        <div class="oneFav" v-for="[,favorite] in favorites" :key="favorite">
          <img v-bind:src="favorite.sprites.front_default" class="fav-img">
        </div>

      </section>
    </main>
   </body> 
</template>

<script>

export default {
  name: 'SearchPokemon',
  data(){
    return {
      url_base: 'https://pokeapi.co/api/v2/pokemon',
      query: '',
      pokemon: {},
      favorites: new Map()
    }
  },
  computed:{
    isFavorite(){
      return this.favorites.has(this.pokemon.name)
    }
  },
  methods: {
    fetchPokemon(e){
      if(e.key == "Enter") {
        fetch(`${this.url_base}/${this.query}`)
          .then( res => {
            return res.json();
          }).then(this.setResults);
      }
    },
    setResults(results) {
      this.pokemon = results;
      console.log(results)
    },
    addFavorites(){
      this.favorites.set(this.pokemon.name, this.pokemon)
      console.log(this.favorites)
    },
    removeFavorites(){
      this.favorites.delete(this.pokemon.name, this.pokemon)
      console.log(this.favorites)
    },
  } 
}

</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'montserrat', sans-serif;
  background-image: url('../assets/fondo.jpg');
  background-size: cover; 
  transition: 0.4s;
  }

  h1{
    margin-bottom: 30px;
    text-align: center;
    color:  rgb(161, 40, 40);
   
  }
   .search-box {
    width: 100%;
    margin-bottom: 30px;
  }

  .search-box .search-bar {
    display: block;
    width: 100%;
    padding: 15px;
    color: #313131;
    font-size: 20px;
    appearance: none;
    border:none;
    outline: none;
    background: none;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px 16px 0px 16px;
    transition: 0.4s;
    text-align: center;
  }

   main {
    min-height: 100vh;
    padding: 25px;
    background-image: linear-gradient(to bottom, rgba(131, 119, 119, 0.562), rgba(131, 119, 119, 0.562));
    display: flex;
    flex-direction: column;
    align-items: center;
  }

   .search-box .search-bar:focus {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 16px 0px 16px 0px;
  }

  .pokemon-name{
    color: Black;
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
    padding-top: 1em;
  }

  .poke-box{
    color:  rgb(161, 40, 40) ;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    margin-top: 1em;
   
  }

  .pokemon-wrap{
    background: none;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.76);
    border-radius: 0px 16px 0px 16px;
    width: 50%;
    height: 450px;    
  }

  .poke-img{
    height: 150px;
  }

  .fav-btn{
    height: 45px;
    width: 45px;
    margin-left: 15%;
  }

  a{
    text-decoration: none;  
  }

  .favs{
    display: flex;
    flex-direction: row;
    align-self: center;
  }

  .oneFav{
    margin-top: 3em;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.692);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
