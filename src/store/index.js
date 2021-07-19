import { createStore } from 'vuex';
// store 中的数据存储在内存中。

export default createStore({
  state: {
    isLogin: false,
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
      state.webSocket = new WebSocket(`ws://120.77.83.8:8083/websocket/${payload}`, [state.token]);
      console.log(state.webSocket);
      state.webSocket.onmessage = res => {
        let msg = JSON.parse(res.data);
        if (Array.isArray(msg)) {
          for (let i = 0; i < msg.length; i++) {
            if (msg[i].messageType === 'CHAT') {
              let temp = [];
              temp.push(msg[i]);
              state.webSocketData = temp;
              break;
            }
          }
          console.log(state.webSocketData);
        } else {
          if (msg.messageType === 'COMMENT' || msg.messageType === 'CHILDCOMMENT') return;
          state.webSocketData = msg;
          console.log(state.webSocketData);
        }
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
    },
    setWebSocketData(state, payload) {
      state.webSocketData = payload;
    }
  },
  actions: {

  },
  modules: {

  }
})
