import request from "@/utils/request";
export function makeChat(messagePackage) {
    return request({
        url: '/makeChat',
        method: 'post',
        data: messagePackage
    });
}

export function getChatListByUsername(username) {
    return request({
        url: '/getChatListByUsername',
        method: 'get',
        params: {
            username
        }
    });
}

export function getChatListByUserAndToUser(username,toUsername,pageNum,pageSize) {
    return request({
        url: '/getChatListByUserAndToUser',
        method: 'get',
        params: {
            username,
            toUsername,
            pageNum,
            pageSize
        }
    });
}

export function readMessage(username) {
    return request({
        url: '/deleteMessage',
        method: 'get',
        params: {
            username
        }
    });
}
