import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/style/index.scss';
import mitt from 'mitt';
const emitter = mitt();
createApp(App).use(store).use(router).mount('#app');

export {
  emitter
}