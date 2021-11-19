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
    path: '/customer/profile',
    name: 'CustomerProfile',
    component: () => import('../customer/pages/CustomerProfile')
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
  },
  {
    path: '/agency/add-service/:id',
    name: 'AddService',
    component: () => import('../agency/pages/AddServices')
  },
  {
    path: '/agency/add-service/promotion/:id',
    name: 'PromoteService',
    component: () => import('../agency/pages/PromoteService')
  },
  {
    path: '/search-service/:name',
    name: 'SearchService',
    component: () => import('../search-service/pages/SearchServices'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
