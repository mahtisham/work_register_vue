import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '@/components/HelloWorld.vue'
import Boards from '@/components/Boards.vue'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    name: 'register',
    path: '/register',
    component: Register
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
