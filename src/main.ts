import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/style/index.scss';
import {
  drag
} from  '@/directives/index';
import mitt from 'mitt';
const emitter = mitt();
const app = createApp(App);
app.use(store).use(router).mount('#app');
app.directive('drag', drag );

export {
  emitter
}