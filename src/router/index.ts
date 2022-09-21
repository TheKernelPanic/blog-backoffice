import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/PostCreationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
