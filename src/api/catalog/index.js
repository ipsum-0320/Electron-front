import request from "@/utils/request";
export function viewCategory(categoryId) {
    return request({
        url: '/catalog/viewCategory',
        method: 'get',
        params: {
            categoryId
        }
    });
}

export function viewProduct(productId) {
    return request({
        url: '/catalog/viewProduct',
        method: 'get',
        params: {
            productId
        }
    });
}

export function viewItem(itemId,username) {
    return request({
        url: '/catalog/viewItem',
        method: 'get',
        params:{
            itemId,
            username
        }
    });
}
