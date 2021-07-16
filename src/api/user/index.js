import request from "@/utils/request";
export function getAvatar(username) {
  return request({
    url: '/getHeadJpg',
    method: 'get',
    params: {
      username
    }
  });
}
