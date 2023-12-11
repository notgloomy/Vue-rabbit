import  httpInstance  from '@/utils/http'

// 获取banner轮播图数据
export function getBannerAPI (params = {}) {
    // 默认为1 商品为2
    const { distributionSite = '1' } = params
    return httpInstance({
      url: '/home/banner',
      params: {
        distributionSite
      }
    })
  }
/*export const getBannerAPI = (params = {}) => {
    const { distributionSite = '1' } = params
    httpInstance.get('/home/banner',{
        params:{
            distributionSite
        }
    })
}*/

// 获取新鲜好物
export const getNewAPI = () => httpInstance.get('/home/new')

// 获取人气推荐
export const getHotAPI = () => httpInstance.get('/home/hot')

// 获取所有商品
export const getGoodsAPI = () => httpInstance.get('/home/goods')