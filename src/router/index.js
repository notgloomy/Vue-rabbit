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
      }
    ]
   }
  ]
})

export default router
