import request from "@/utils/request";
export function autoComplete(keyword){
    return request({
        url: '/autoComplete',
        method: 'get',
        data: {
            keyword
        }
    });
}

export function search(keyword){
    return request({
        url: '/search',
        method: 'get',
        data: {
            keyword
        }
    });
}