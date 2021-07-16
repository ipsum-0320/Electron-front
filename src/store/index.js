import { createStore } from 'vuex';
import router from '../router'
// store 中的数据存储在内存中。
import {getCookie} from "@/utils/cookie";

export default createStore({
  state: {
    isLogin: true,
    username: undefined,
    avatarURL: undefined,
    webSocket: undefined,
    webSocketData: undefined,
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
      state.webSocket = new WebSocket(`ws://120.77.83.8:8084/websocket/${payload}`);
      console.log(state.webSocket);
      state.webSocket.onmessage = res => {
        state.webSocketData = JSON.parse(res.data);
        console.log(state.webSocketData);
      };
    },
    closeWebSocket(state) {
      if (state.webSocket === undefined) return;
      state.webSocket.close();
    },
    setToken(state, payload) {
      state.token = payload;
    },
    setAvatarURL(state, payload) {
      state.avatarURL = payload;
    }
  },
  actions: {

  },
  modules: {

  }
})
