import request from "@/utils/request";
export function payment(paymentPassword,username){
    return request({
        url: '/payment',
        method: '/post',
        data: {
            paymentPassword,
            username
        }
    });
}