<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

// 触发获取列表导航的action
import { useCategoryStore } from '@/stores/category'
const categoryStore = useCategoryStore()

categoryStore.getCategory()
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <!-- 添加key 破坏复用机制 强制重新销毁-->
  <!-- <RouterView :key="$route.fullPath"/> -->
  <LayoutFooter />
</template>