import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Movies from './components/AppMovies'
import AddMovie from './components/AddMovie'
import Login from './components/AppLogin'
import { auth } from './services/Auth'


Vue.config.productionTip = false
Vue.use(VueRouter)


const routes = [
  {path: '/', redirect: '/movies' },
  {path: '/movies', component: Movies,name: "movies", meta: { require_auth: true}},
  {path: '/add', component: AddMovie, meta: { require_auth: true} },
  {path: '/login', component: Login, name: "login", meta: { require_auth: false}}
  
  

]


const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.meta.require_auth)
  {
    if (auth.isAuthenticated())
    { 
      return next();
    } 
    else 
    {
      return next({name: "login" });
    }
  }
  else
  {
    if(auth.isAuthenticated())
    {
      return next(false)
    }
    else
    {
      return next();
    }
  }
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
