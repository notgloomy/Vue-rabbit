import httpInstance from "@/utils/http"

// 获取一级路由分类
export const getTopCategoryAPI = (id) => httpInstance.get('/category',{params: {id}})