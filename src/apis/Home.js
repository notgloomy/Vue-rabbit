import  httpInstance  from '@/utils/http'

// 获取banner轮播图数据
export const getBannerAPI = () => httpInstance.get('/home/banner')