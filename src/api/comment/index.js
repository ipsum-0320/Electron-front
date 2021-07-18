import request from "@/utils/request";
export function makeComment(data){
    return request({
        url: '/makeComment',
        method: 'post',
        data: data
    });
}

export function makeReply(data){
    return request({
        url: '/makeReply',
        method: 'post',
        data: data
    });
}

export function getCommentListByProductId(productId,pageNum,pageSize){
    return request({
        url: '/getCommentListByProductId',
        method: 'get',
        params: {
            productId,
            pageNum,
            pageSize
        }
    });
}

export function getComment(commentId){
    return request({
        url: '/getComment',
        method: 'get',
        params: {
            commentId
        }
    });
}

export function getChildCommentListByCommentId(commentId){
    return request({
        url: '/getChildCommentListByCommentId',
        method: 'get',
        params: {
            commentId
        }
    });
}

export function getCommentListByUsername(username,pageNum,pageSize){
    return request({
        url: '/getCommentListByUsername',
        method: 'get',
        params: {
            username,
            pageNum,
            pageSize
        }
    });
}

export function getChildCommentListByUsername(username,pageNum,pageSize){
    return request({
        url: '/getChildCommentListByUsername',
        method: 'get',
        params: {
            username,
            pageNum,
            pageSize
        }
    });
}

export function deleteComment(commentId,productId){
    return request({
        url: '/deleteComment',
        method: 'get',
        data: {
            commentId,
            productId
        }
    });
}

export function deleteChildComment(childCommentId,commentId){
    return request({
        url: '/deleteChildComment',
        method: 'get',
        data: {
            childCommentId,
            commentId
        }
    });
}
