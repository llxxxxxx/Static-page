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
    },
    {
      path:'/information',
      component: () => import('../views/Information.vue')
    },
    {
      path:'/personAdd',
      component: () => import('../views/Person_add.vue')
    }
    
  ]
})

export default router
