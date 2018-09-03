<template>
  <div id="app">
    <nav class="navbar navbar-light bg-dark">
      <router-link to="/movies">Movies</router-link>
      <router-link to="/add">Add Movies</router-link>

      <div v-if="!isAuthenticated()">
        <router-link to="/login">Login</router-link><br>
        <router-link to="/register">Register</router-link>
      </div>

      <div v-else>
        <button class="btn btn-link"  @click="logout">Logout</button>
      </div>

    </nav>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>

import { auth } from './services/Auth'
export default {
  name: 'app',
  components: {
    
  },
  data(){
    return{
      isAuthenticated: auth.isAuthenticated
    }
  },
  methods:{
    logout(){
      auth.logout()
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
