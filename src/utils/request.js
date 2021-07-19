import axios from "axios";
import { ElMessage  } from "element-plus";
import store from '../store';

const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
  validateStatus: status => status < 500
});

request.interceptors.request.use(config => {
  if (config.url !== '/signOn') {
    // console.log('request');
    config.headers.token = store.state.token;
    // config.headers.token = getCookie('token');
    // 如果请求的 URL 不是 signOn 的话，加上 token。
  }
  return config;
}, err => {
  return Promise.reject(err);
});
/*
 * 同一时间只能登陆一个账户，否则 token 会失效。
 */


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
    return Promise.reject(res.status);
  } else {
    if (res.data.code === 500) {
      // 后端自定义码非以 2 开头则来到这里。
      return Promise.reject(res.data.code);
    }
    // setCookie('token', res.headers.authorization, 1);
    if (res.headers.authorization !== undefined) {
      store.commit('setToken', res.headers.authorization);
    }
    // 设置 Token。
    // console.log('response');
    return Promise.resolve(res.data.object);
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
  console.log(err);
  return Promise.reject(err);
});

export default request;

