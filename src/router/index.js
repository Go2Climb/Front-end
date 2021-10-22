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
    path: '/agency/profile',
    name: 'AgencyProfile',
    component: () => import('../agency/pages/AgencyProfile')
  },
  {
    path: '/agency/clients',
    name: 'AgencyClients',
    component: () => import('../agency/pages/AgencyClients')
  },
  {
    path: '/agency/service/:id',
    name: 'ServiceDetails',
    component: () => import('../agency/pages/ServiceDetail'),
    props: true
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
