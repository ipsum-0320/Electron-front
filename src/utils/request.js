import axios from "axios";
import { ElMessage  } from "element-plus";

const request = axios.create({
  baseURL: '/api',
  timeout: 3000,
  validateStatus: status => status < 500
});

request.interceptors.response.use(res => {
  if (res.status !== 200) {
    // 服务端响应非 200 就会来到这里。
    ElMessage ({
      center: true,
      showClose: true,
      message: `Error: ${res.status}`,
      type: 'error',
      duration: 1000
    })
    return Promise.reject('error');
  } else {
    if (!/^2/.test(res.data.code)) {
      return Promise.reject('error');
    }
    return Promise.resolve(res.data);
  }
}, err => {
  // 网络故障或者服务端响应 500 就会来到这里。
  ElMessage ({
    center: true,
    showClose: true,
    message: err.message,
    type: 'error',
    duration: 1000
  });
  return Promise.reject(err);
});

export default request;

