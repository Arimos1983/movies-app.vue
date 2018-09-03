<template>
  <div >
      <form @submit.prevent="addMovie" class="container">
        <div class="form-group" >
            <label for="title">Title:</label>
            <input name="title" type="text" class="form-control" id="title"  placeholder="..." v-model="movie.title">
            <p class="alert alert-danger" v-if="errors.title">{{ errors.title[0] }}</p>
        </div>
        <div class="form-group">
            <label for="director">Director:</label>
            <input name="director" type="text" class="form-control" id="director"  placeholder="..." v-model="movie.director">
            <p class="alert alert-danger" v-if="errors.director">{{ errors.director[0] }}</p>
        </div>
        <div class="form-group">
            <label for="imageUrl">imageUrl:</label>
            <input name="imageUrl" type="text" class="form-control" id="imageUrl"  placeholder="..." v-model="movie.imageUrl">
            <p class="alert alert-danger" v-if="errors.imageUrl">{{ errors.imageUrl[0] }}</p>
        </div>
        <div class="form-group">
            <label for="duration">Duration:</label>
            <input name="duration" type="text" class="form-control" id="duration"  placeholder="..." v-model="movie.duration">
            <p class="alert alert-danger" v-if="errors.duration">{{ errors.duration[0] }}</p>
        </div>
        <div class="form-group">
            <label for="releaseDate">Release date:</label>
            <input name="releaseDate" type="text" class="form-control" id="releaseDate"  placeholder="..." v-model="movie.releaseDate">
            <p class="alert alert-danger" v-if="errors.releaseDate">{{ errors.releaseDate[0] }}</p>
        </div>
        <div class="form-group">
            <label for="genre">Genre:</label>
            <input name="genre" type="text" class="form-control" id="genre"  placeholder="..." v-model="movie.genre">
        </div>
        <div class="form-group">
            <button type="submit" name="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
    
  </div>
</template>

<script>
import { movies } from '../services/Movies'
export default {
  name: 'AddMovie',
  
  data(){
      return {
          movie:{},
          errors:{
              
          }
      
  }
      },
  
  methods:
  {
      addMovie(){
          movies.addMovie(this.movie)
          .then(() => {
          this.$router.push('/movies')
        })
        .catch(error => this.errors = error.response.data.errors)
      }
  }
  
}
</script>

