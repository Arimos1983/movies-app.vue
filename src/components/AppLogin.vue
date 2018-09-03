<template>
  <div >
      <form @submit.prevent="login" class="container">
        <div class="form-group" >
            <label for="email">Email:</label>
            <input name="email" type="text" class="form-control" id="email"  placeholder="..." v-model="email">
            <p class="alert alert-danger" v-if="errors">{{ errors }}</p>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input name="password" type="text" class="form-control" id="password"  placeholder="..." v-model="password">
            <p class="alert alert-danger" v-if="errors">{{ errors }}</p>
        </div>
        <div class="form-group">
            <button type="submit" name="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
    
  </div>
</template>

<script>
import { auth } from '../services/Auth'
export default {
  name: 'AppLogin',
  
  data(){
      return {
          email:"",
          password:"",
          errors:""
      
  }
      },
  
  methods:
  {
      login(){
          auth.login(this.email,this.password)
          .then(() => {
          this.$router.push("/movies")
        })
        .catch(error => this.errors = error.response.data.error)
      }
  }
  
}
</script>

