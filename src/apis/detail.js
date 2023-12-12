import httpInstance from "@/utils/http"

export const getDetail = (id) => httpInstance.get('/goods',{params:{id}})