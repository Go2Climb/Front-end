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
    path: '/agency/service',
    name: 'ServiceDetails',
    component: () => import('../agency/pages/ServiceDetail')
  },
  {
    path: '/agency/add-service',
    name: 'AddService',
    component: () => import('../agency/pages/AddServices')
  },
  {
    path: '/agency/add-service/promotion',
    name: 'PromoteService',
    component: () => import('../agency/pages/PromoteService')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
