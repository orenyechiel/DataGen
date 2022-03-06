import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:id',
    name: 'product',
    component: ProductView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
