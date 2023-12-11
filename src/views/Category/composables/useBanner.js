// 封装banner轮播图相关的业务代码
import { ref } from 'vue'
import { getBannerAPI } from '@/apis/Home'

export const useBanner = () => {
    const bannerList = ref([])
   const getBanner = async () => {
     const res = await getBannerAPI({
       distributionSite: '2'
    })
    console.log(res)
    bannerList.value = res.result
  } 
   getBanner()
   
   return {
    bannerList
   }
}