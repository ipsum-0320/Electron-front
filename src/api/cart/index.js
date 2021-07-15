import request from "@/utils/request";
export function viewCart(username) {
    return request({
        url: '/viewCart',
        method: 'get',
        data: {
            username
        }
    });
}

export function updateCart(data) {
    return request({
        url: '/updateCart',
        method: 'post',
        data: {
            data
        }
    });
}

export function removeItemFromCart(username,itemId) {
    return request({
        url: '/removeItemFromCart',
        method: 'post',
        data: {
            username,
            itemId
        }
    });
}

export function addItemToCart(username,itemId,quantities) {
    return request({
        url: '/addItemToCart',
        method: 'post',
        data: {
            username,
            itemId,
            quantities
        }
    });
}