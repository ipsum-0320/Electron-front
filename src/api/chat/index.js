import request from "@/utils/request";
export function makeChat(data) {
    return request({
        url: '/makeChat',
        method: 'post',
        data:{
            data
        }
    });
}

export function getChatListByUsername(username) {
    return request({
        url: '/getChatListByUsername',
        method: 'get',
        data: {
            username
        }
    });
}

export function getChatListByUserAndToUser(username,toUsername,pageNum,pageSize) {
    return request({
        url: '/getChatListByUserAndToUser',
        method: 'get',
        data: {
            username,
            toUsername,
            pageNum,
            pageSize
        }
    });
}

export function readMessage(username) {
    return request({
        url: 'deleteMessage',
        method: 'get',
        data: {
            username
        }
    });
}