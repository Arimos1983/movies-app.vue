<template>
  <div>
    <ul v-for="movie in movies" :key="movie.id" class="list-group">
        <li>{{movie.title}}</li>
        <li>{{movie.director}}</li>
        <li>{{movie.imageUrl}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'MovieRow',
  props: ['movies'],
  
}
</script>


