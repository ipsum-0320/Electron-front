import request from "@/utils/request";
export function viewCollection(username) {
    return request({
        url: '/viewCollection',
        method: 'get',
        params: {
            username
        }
    });
}

export function insertCollection(username,productId){
    return request({
        url: '/insertCollection',
        method: 'post',
        data: {
            username,
            productId
        }
    });
}

export function deleteCollection(data){
    return request({
        url: '/deleteCollection',
        method: 'post',
        data: data
    });
}