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
    },
    {
      path:'/changearea',
      component: () => import('../views/Changearea.vue')
    },
    {
      path:'/person',
      component: () => import('../views/Person.vue')
    },
    {
      path:'/collection',
      component: () => import('../views/Collection.vue')
    },
    {
      path:'/wallet',
      component: () => import('../views/Wallet.vue')
    },
    {
      path:'/integral',
      component: () => import('../views/Integral.vue')
    },
    {
      path:'/coupon',
      component: () => import('../views/Coupon.vue')
    },
    {
      path:'/order',
      component: () => import('../views/Order.vue')
    },
    {
      path:'/setting',
      component: () => import('../views/Setting.vue')
    }
  ]
})

export default router
