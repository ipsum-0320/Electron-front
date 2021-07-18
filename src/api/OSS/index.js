import request from '@/utils/request'
export function upload(progress, data) {
  return request({
    url:'/api/demo/oss/upload',
    method:'post',
    data:data,
    onUploadProgress: progressEvent => {
      const complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
      progress({ percent: complete });
    }
  })
}

export function editAvatar(username, filename) {
  return request({
    url: '/editHeadJpg',
    method: 'post',
    data: {
      username,
      filename
    }
  });
}
