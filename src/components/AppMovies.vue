<template>
  <div >
    <div class="search-wrapper">
        <label>Search Movies:</label>
        <input type="text" @input="setSearchTerm" placeholder="Search Movies"/>
    </div>
    <MovieRow v-for="movie in filteredMovies" :key="movie.id" :movie="movie" />
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
      movies: [],
      searchTerm: ""
    }
  },

  computed: {

      filteredMovies(){
    
           return this.movies.filter(movie => movie.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0)
      }
  },

  methods: {
    setSearchTerm(event) {
    
      this.searchTerm = event.target.value;
    }
  },

  beforeRouteEnter(to, from, next) {
    movies.getAll()
      .then((response) => {
          next((vm) => {
            vm.movies = response.data
          })
      })
  }
  
}
</script>


