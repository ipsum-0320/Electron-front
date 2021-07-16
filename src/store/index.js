import { createStore } from 'vuex';
import router from '../router'
// store 中的数据存储在内存中。

export default createStore({
  state: {
    isLogin: false,
    username: undefined,
    webSocket: undefined,
    token: undefined,
  },
  mutations: {
    login(state, payload) {
      state.username = payload;
    },
    setIsLogin(state, payload) {
      state.isLogin = payload;
    },
    createWebSocket(state, payload) {
      state.webSocket = new WebSocket(`ws://120.77.83.8:8083/websocket/${payload}`, [state.token]);
      state.webSocket.onmessage = (e) => {
      };
    },
    closeWebSocket(state) {
      if (state.webSocket === undefined) return;
      state.webSocket.close();
    },
    setToken(state, payload) {
      state.token = payload;
    }
  },
  actions: {

  },
  modules: {

  }
})
