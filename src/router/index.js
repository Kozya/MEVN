import { createRouter, createWebHistory } from 'vue-router'
import Shop from '../components/Shop.vue'
import ShoppingCart from '../components/ShoppingCart.vue'

const routes = [
  {
    path: '/',
    name: 'shop',
    component: Shop,
  },
  {
    path: '/cart',
    name: 'cart',
    component:ShoppingCart,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
