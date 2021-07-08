import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/signIn/signIn")
  },
  {
    path: '/main',
    name: 'main',
    redirect: '/main/cart',
    component: () => import("@/views/layout/layout"),
    children: [
      {
        path: 'cart',
        name: 'cart',
        component: () => import("@/views/cart/cart")
      },
      {
        path: 'orderList',
        name: 'orderList',
        component: () => import("@/views/orderList/orderList")
      },
      {
        path: 'category',
        name: 'category',
        component: () => import("@/views/category/category")
      },
      {
        path: 'product',
        name: 'product',
        component: () => import("@/views/product/product")
      },
      {
        path: 'search',
        name: 'search',
        component: () => import("@/views/search/search")
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
