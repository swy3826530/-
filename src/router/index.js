import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		rederect:'/home',
		component: Home
	},
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('components/goods/Details.vue')
  },
  {
    path: '/classify',
    name: 'Classify',
    component: () => import('components/classify/Classify.vue'),
  },
  {
  	path:"/goodslist",
  	component: () => import('components/goodslist/GoodsList.vue')
  },
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    component: () => import('components/shoppingcart/ShoppingCart.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('components/search/Search.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
