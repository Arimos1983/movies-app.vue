<template>
  <div >
    <div class="search-wrapper">
        <label>Search Movies:</label>
        <input type="text" @input="setSearchTerm" placeholder="Search Movies"/>
    </div>
    <div>
      <button class="btn btn-primary" @click="sortAsc(sortStatus = true)">Sort asc</button>
      <button class="btn btn-primary" @click="sortDes(sortStatus = true)">Sort des</button>
    </div>
    <div v-if="selectedMovies.length > 0">
      <h3>You have selected {{selectedMovies.length}} movies</h3>
    </div>
    <button class="btn btn-primary" @click="selectAll">Select All</button>
    <button class="btn btn-primary" @click="deselectAll">Deselect All</button>
    <MovieRow v-for="movie in filteredMovies" :key="movie.id" :movie="movie"  @selectedMovie="addSelectedMovies" :class="{'color': find(movie.id)}" />
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
      error: "No movies under that name",
      
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
      if(!this.selectedMovies.includes(id)){
      this.selectedMovies.push(id);}
      else{
        this.selectedMovies.splice(this.selectedMovies.indexOf(id),1)
      }
    },
    selectAll()
    {
      this.selectedMovies = this.movies.map(movie => movie.id);
    },
    deselectAll()
    {
      this.selectedMovies = [];
    },
    find(id) 
    {  
    return this.selectedMovies.find(movie => {return movie === id});
    },
    sortAsc()
    { 
      
      this.movies.sort(function(a, b){
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
      })
    },  
    sortDes()
    {

      this.movies.sort(function(a, b){
      if(a.title > b.title) return -1;
      if(a.title < b.title) return 1;
      return 0;
      })
      
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
.color {
  background-color: lawngreen;
}

</style>
