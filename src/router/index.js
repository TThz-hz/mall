import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import ('pages/home/Home.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import ('pages/category/category.vue')
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: () => import ('pages/shopcart/shopcart.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import ('pages/profile/profile.vue')
  },

]


const router = new Router({
  routes,
  mode: 'history',
})

export default router
