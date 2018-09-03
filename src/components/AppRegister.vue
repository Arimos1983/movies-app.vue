<template>
  <div >
      <form @submit.prevent="register" class="container">
        <div class="form-group" >
            <label for="username">Name:</label>
            <input name="username" type="text" class="form-control" id="username"  placeholder="..." v-model="newUser.username">
            <p class="alert alert-danger" v-if="errors.username">{{ errors.username }}</p>
        </div>
        <div class="form-group" >
            <label for="email">Email:</label>
            <input name="email" type="text" class="form-control" id="email"  placeholder="..." v-model="newUser.email">
            <p class="alert alert-danger" v-if="errors.email">{{ errors.email }}</p>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input name="password" type="text" class="form-control" id="password"  placeholder="..." v-model="newUser.password">
            <p class="alert alert-danger" v-if="errors.password">{{ errors.password }}</p>
        </div>
        <div class="form-group">
            <label for="password_confirmation">Password confirmation:</label>
            <input name="password_confirmation" type="text" class="form-control" id="password_confirmation"  placeholder="..." v-model="newUser.password_confirmation">
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
  name: 'AppRegister',
  
  data(){
      return {
        newUser:{},

        errors:{}
      
        }
    },
  
  methods:
  {
      register(){
          auth.register(this.newUser)
          .then(() => {
          this.$router.push("/login")
        })
        .catch(error => this.errors = error.response.data.errors)
      }
  }
  
}
</script>

