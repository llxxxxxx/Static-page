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
    },
    {
      path:'/personInformation',
      component: () => import('../views/Person_information.vue')
    },
    {
      path: '/smartdoor',
      component: () => import('../views/Smart_Opendoor.vue')
    },
    {
      path: '/unbind',
      component: () => import('../views/Unbind.vue')
    },
    {
      path: '/phonenumber',
      component: () => import('../views/Phone_number.vue')
    },
    {
      path: '/modifyphonenumber',
      component: () => import('../views/Modify_Phonenumber.vue')
    },
    {
      path: '/shake',
      component: () => import('../views/Shake.vue')
    },
    {
      path: '/parking',
      component: () => import('../views/Parking.vue')
    },
    {
      path: '/property',
      component: () => import('../views/Property.vue')
    },
    {
      path: '/changepassword',
      component: () => import('../views/Change_password.vue')
    },
    {
      path: '/feedback',
      component: () => import('../views/Feedback.vue')
    },
    {
      path: '/security',
      component: () => import('../views/Security.vue')
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/repair',
      component: () => import('../views/Online_repair.vue')
    },
    {
      path: '/activity',
      component: () => import('../views/Community_activity.vue')
    },
    {
      path: '/suggestion',
      component: () => import('../views/Suggestion.vue')
    }
  ]
})

export default router
