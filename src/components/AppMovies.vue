<template>
  <div >
      <ul v-for="movie in movies" :key="movie.id">
        <li>{{movie.title}}</li>
      </ul>
  </div>
</template>

<script>
import { movies } from '../services/Movies.js'
export default {
  name: 'AppMovies',
  data(){
    return {
      movies: {}
    }
  },
  beforeRouteEnter(to, from, next) {
    movies.getAll()
      .then((response) => {
          next((vm) => {
            vm.movies = response.data
          })
      })
  },
  
}
</script>


