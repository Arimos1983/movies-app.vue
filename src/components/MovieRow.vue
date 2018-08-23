<template>
    <div>
        
        <div class="container">
            <ul class="list-group">
                <li class="list-group-item">Title: {{movie.title}}</li>
                <li class="list-group-item">Director: {{movie.director}}</li>
                <li class="list-group-item">{{movie.imageUrl}}</li>
                <li class="list-group-item">Relesed: {{movie.releaseDate}}</li>
                <li class="list-group-item">Genre: {{movie.genre}}</li><br>
            </ul>
            <button @click="select">Select</button>
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


