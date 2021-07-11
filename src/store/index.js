import { createStore } from 'vuex';

export default createStore({
  state: {
    isLogin: true,
    user: {
      username: undefined,
      webSocket: undefined
    }
  },
  mutations: {
    login(state) {
      state.user.username = 'j2ee';
    },
    setIsLogin(state, payload) {
      state.isLogin = payload;
    }
  },
  actions: {
    asyncLogin(context, payload) {
      return new Promise((resolve, reject) => {

      });
    }
  },
  modules: {

  }
})
