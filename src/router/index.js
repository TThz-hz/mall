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
    component: () => import ('pages/category/Category.vue')
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: () => import ('pages/shopcart/Shopcart.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import ('pages/profile/Profile.vue')
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: () => import ('../pages/detail/Detail.vue')
  },
]


const router = new Router({
  routes,
  // mode: 'history',
})

export default router
