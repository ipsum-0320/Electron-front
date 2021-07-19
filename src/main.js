import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission';
import mitt from 'mitt'

const app = createApp(App);
app.config.globalProperties.$EventBus = new mitt();
// 要挂载到原型上！

app.use(store).use(router).mount('#app');
