import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Movies from './components/AppMovies'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/movies' },
  {path: '/movies', component: Movies}
  
  

]


const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
