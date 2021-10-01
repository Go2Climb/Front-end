import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AgencyProfile',
    name: 'AgencyProfile',
    component: () => import('../views/AgencyProfile')
  },
  {
    path: '/AgencyClients',
    name: 'AgencyClients',
    component: () => import('../views/AgencyClients')
  },
  {
    path: '/ServiceDetails',
    name: 'ServiceDetails',
    component: () => import('../views/ServiceDetail')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
