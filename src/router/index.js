import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      // name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path:'/mine',
      component: () => import('../views/Mine.vue')
    },
    {
      path:'/service',
      component: () => import('../views/Service.vue')
    }
    
  ]
})

export default router
