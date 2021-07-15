import request from "@/utils/request";
export function viewCollection(username) {
    return request({
        url: '/viewCollection',
        method: 'get',
        data: {
            username
        }
    });
}

export function insertCollection(username,itemId){
    return request({
        url: '/insertCollection',
        method: 'post',
        data: {
            username,
            itemId
        }
    });
}

export function deleteCollection(data){
    return request({
        url: '/deleteCollection',
        method: 'post',
        data: {
            data
        }
    });
}