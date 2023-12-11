import  httpInstance  from '@/utils/http'

// 获取banner轮播图数据
export const getBannerAPI = () => httpInstance.get('/home/banner')

// 获取新鲜好物
export const getNewAPI = () => httpInstance.get('/home/new')

// 获取人气推荐
export const getHotAPI = () => httpInstance.get('/home/hot')

// 获取所有商品
export const getGoodsAPI = () => httpInstance.get('/home/goods')