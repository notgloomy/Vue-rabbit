import httpInstance from "@/utils/http"

// 获取商品信息
export const getDetail = (id) => httpInstance.get('/goods',{params:{id}})

// 获取热榜商品
export const getHotGoodsAPI = ({ id, type, limit=3}) => httpInstance.get('/goods/hot',{params:{id,type,limit}})