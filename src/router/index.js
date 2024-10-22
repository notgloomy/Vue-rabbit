import { createRouter, createWebHistory } from 'vue-router'

// createRouter: 创建router实例对象
// createWebHistory: 创建history模式的路由(不加#) hash(加#) 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   { path:'/login', component: () => import('@/views/Login/index.vue') },
   {
    path: '/',
    component : () => import('@/views/Layout/index.vue'),
    children: [
      {
        path:'',
        component: () => import('@/views/Home/index.vue')
      },
      {
        path:'category/:id',
        component: () => import('@/views/Category/index.vue')
      },
      {
        path:'category/sub/:id',
        component: () => import('@/views/SubCategory/index.vue')
      },
      {
        path:'detail/:id',
        component: () => import('@/views/Detail/index.vue')
      },
      {
        path: 'cartlist',
        component: () => import('@/views/CartList/index.vue')
      },
      {
        path: 'checkout',
        component: () => import('@/views/Checkout/index.vue')
      },
      {
        path: 'pay',
        component: () => import('@/views/Pay/index.vue')
      },
      {
        path: 'paycallback',
        component: () => import('@/views/Pay/PayBack.vue')
      },
      {
        path: 'member',
        component: () => import('@/views/Member/index.vue'),
        children: [
          {
            path:'',
            component: () => import('@/views/Member/components/UserInfo.vue')
          },
          {
            path:'order',
            component: () => import('@/views/Member/components/UserOrder.vue')
          }
        ]
      }
    ]
   }
  ],
  // 路由滚动行为配置项
  scrollBehavior () {
    return {
      top: 0
    }
  }
})

export default router
