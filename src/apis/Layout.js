import httpInstance from "@/utils/http"

export const  getCategoryAPI = () => httpInstance.get('/home/category/head')