import request from "@/utils/request";
export function finalOrder(data){
    return request({
        url: '/finalOrder',
        method: 'post',
        data: {
            data
        }
    });
}

export function listOrders(username){
    return request({
        url: '/listOrders',
        method: 'get',
        data: {
            username
        }
    });
}

export function getOrder(orderId){
    return request({
       url: '/getOrder',
       method: 'get',
        data: {
           orderId
        }
    });
}