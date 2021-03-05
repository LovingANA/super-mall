import Vue from 'vue'
import VueRouter from 'vue-router'
import AppHome from '@/views/home/AppHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/popular'
  },
  {
    path: '/home',
    redirect: '/home/popular'
  },
  {
    path: '/home',
    component: AppHome,
    children: [
      {
        path: 'popular',
        component: () => import('@/components/project/GoodsList.vue')
      },
      {
        path: 'new',
        component: () => import('@/components/project/GoodsList.vue')
      },
      {
        path: 'selection',
        component: () => import('@/components/project/GoodsList.vue')
      }
    ]
  },
  {
    path: '/category',
    name: 'AppCategory',
    component: () => import('@/views/category/AppCategory.vue')
  },
  {
    path: '/cart',
    name: 'AppCart',
    component: () => import('@/views/cart/AppCart.vue')
  },
  {
    path: '/profile',
    name: 'AppProfile',
    component: () => import('@/views/profile/AppProfile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
