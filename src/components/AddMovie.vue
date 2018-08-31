<template>
  <div >
      <form @submit.prevent="addMovie">
        <div class="form-group" >
            <label for="title">Title</label>
            <input name="title" type="text" class="form-control" id="title"  placeholder="Title" v-model="movie.title">
            <p class="error" v-if="errors.title">{{ errors.title }}</p>
        </div>
        <div class="form-group">
            <label for="director">Director</label>
            <input name="director" type="text" class="form-control" id="director"  placeholder="director" v-model="movie.director">
        </div>
        <div class="form-group">
            <label for="imageUrl">imageUrl</label>
            <input name="imageUrl" type="text" class="form-control" id="imageUrl"  placeholder="imageUrl" v-model="movie.imageUrl">
        </div>
        <div class="form-group">
            <label for="duration">Duration</label>
            <input name="duration" type="text" class="form-control" id="duration"  placeholder="duration" v-model="movie.duration">
        </div>
        <div class="form-group">
            <label for="releaseDate">Release date</label>
            <input name="releaseDate" type="text" class="form-control" id="releaseDate"  placeholder="Release date" v-model="movie.releaseDate">
        </div>
        <div class="form-group">
            <label for="genre">Genre</label>
            <input name="genre" type="text" class="form-control" id="genre"  placeholder="Genre" v-model="movie.genre">
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
              title:''
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
        .catch(err => console.log(err.response.data.errors))
      }
  }
  
}
</script>

