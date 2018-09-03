<template>
    <div>
        
        <div class="container">
            <ul class="list-group">
                <router-link :to="{name: 'SingleMovie', params:{id: movie.id}}">Title: {{movie.title}}</router-link>
                <li class="list-group-item">Director: {{movie.director}}</li>
                <li class="list-group-item">{{movie.imageUrl}}</li>
                <li class="list-group-item">Relesed: {{movie.releaseDate}}</li>
                <li class="list-group-item">Genre: {{movie.genre}}</li><br>
            </ul>
            <button class="btn btn-primary" @click="select">Select</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MovieRow',
  props: ['movie'],
  methods:{

      select(){
          this.$emit("selectedMovie", this.movie.id);
      }

  }
  
}
</script>


