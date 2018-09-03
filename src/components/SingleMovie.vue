<template>
  <div >
      <br><br>
        <h1>Single movie</h1>
        <br><br>
        <table class="table">
            <thead>
                <tr>
                    <th>
                        Title
                    </th>
                    <th>
                        Director
                    </th>
                    <th>
                        Release date
                    </th>
                    <th>
                        Genre
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {{movie.title}}
                    </td>
                    <td>
                        {{movie.director}}
                    </td>
                    <td>
                        {{movie.releaseDate}}
                    </td>
                    <td>
                        {{movie.genre}}
                    </td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
import { movies } from '../services/Movies.js'
export default {
  name: 'SingleMovie',
  data(){
      return{
          
          movie:{}

      }
  },

    beforeRouteEnter(to, from, next)
    {
        next(vm => {         
        movies.getMovie(vm.$route.params.id)
        .then((response) => {vm.movie = response.data})
    })}

//   beforeRouteEnter(to, from, next)
//   {
//     movies.getMovie(this.$router.params.id)
//       .then((response) => {
//           next((vm) => {
//             vm.movies = response.data
//           })
//       })
//   },
  
  
}
</script>


