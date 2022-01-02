import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pizzas from '../components/Pizzas.vue'
import Bebidas from '../components/Bebidas.vue'
import Empanadas from '../components/Empanadas.vue'
import Postres from '../components/Postres.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pizzas',
    name: 'Pizzas',
    component: Pizzas
  },
  {
    path: '/empanadas',
    name: 'Empanadas',
    component: Empanadas
  },
  {
    path: '/bebidas',
    name: 'Bebidas',
    component: Bebidas
  },
  {
    path: '/postres',
    name: 'Postres',
    component: Postres
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
