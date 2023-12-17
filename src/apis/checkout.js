import httpInstance from "@/utils/http"
// 封装订单相关的接口

// 获取订单详情接口
export const getCheckInfoAPI = () => {
    return httpInstance({
        url: '/member/order/pre'
    })
}