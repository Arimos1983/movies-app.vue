<template>
  <div >
    <div class="search-wrapper">
        <label>Search Movies:</label>
        <input type="text" @input="setSearchTerm" placeholder="Search Movies"/>
    </div>
    <div>
      <p>You have selected {{selectedMovies.length}} movies</p>
    </div>
    <MovieRow v-for="movie in filteredMovies" :key="movie.id" :movie="movie"  @selectedMovie="addSelectedMovies" :class="{'colorRed': find(movie.id)}" />
    <p v-if="filteredMovies.length === 0" >{{error}}</p>
    
  </div>
</template>

<script>
import { movies } from '../services/Movies.js'
import MovieRow from '../components/MovieRow.vue'
export default {
  name: 'AppMovies',

  components: {
    MovieRow
  },
  
  data(){
    return {
      selectedMovies: [],
      movies: [],
      searchTerm: "",
      error: "No movies under that name"
    }
  },

  computed: {

      filteredMovies(){

           return this.movies.filter(movie => movie.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0)
      },
      
  },

  methods:
  {
    setSearchTerm(event) 
    {
      this.searchTerm = event.target.value;
    },

    addSelectedMovies(id)
    {
      this.selectedMovies.push(id);
    },

    find(id) 
    {  
    return this.selectedMovies.find(movie => {return movie === id});
    }

  },

  beforeRouteEnter(to, from, next)
  {
    movies.getAll()
      .then((response) => {
          next((vm) => {
            vm.movies = response.data
          })
      })
  }
  
 
  
}
</script>

<style>
.colorRed {
  background-color: lawngreen;
}

</style>
