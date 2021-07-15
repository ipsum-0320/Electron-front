import request from "@/utils/request";
export function login(username, password) {
  return request({
    // 编码格式为 application/json。
    url: '/signOn',
    method: 'post',
    data: {
      username,
      password
    }
  });
}

export function registerAccount(data) {
  return request({
    url: '/newAccount',
    method: 'post',
    data: {
      data
    }
  });
}

export function viewAccount(username) {
  return request({
    url: '/viewEditAccount',
    method: 'get',
    data: {
      username
    }
  });
}

export function editAccount(data) {
  return request({
    url: '/editAccount',
    method: 'post',
    data: {
      data
    }
  });
}

export function getHeadJpg(username) {
  return request({
    url: '/getHeadJpg',
    method: 'get',
    data: {
      username
    }
  });
}