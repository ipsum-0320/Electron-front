import request from "@/utils/request";
export function autoComplete(keyword){
    return request({
        url: '/autoComplete',
        method: 'get',
        params: {
            keyword
        }
    });
}

export function search(keyword){
    return request({
        url: '/search',
        method: 'get',
        params: {
            keyword
        }
    });
}