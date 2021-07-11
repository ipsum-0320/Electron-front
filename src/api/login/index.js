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
