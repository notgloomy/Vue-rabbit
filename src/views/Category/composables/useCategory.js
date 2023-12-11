// 封装分类数据业务相关代码
import { getTopCategoryAPI } from '@/apis/category'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export const useCategory = () => {
    // 获取数据
const categoryData = ref([])
const route = useRoute()
const getCategory = async ( id = route.params.id ) => {
  // 如何在setup中获取路由参数useRoute() -> route
  const res = await getTopCategoryAPI(id)
  categoryData.value = res.result
}
getCategory()

// 目标: 路由参数变化的时候,可以把分类数据接口重新发送
onBeforeRouteUpdate((to) => {
  getCategory(to.params.id)
})

return {
    categoryData
}
}