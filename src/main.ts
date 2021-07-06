import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/style/index.scss';

// 事件订阅及发布
import mitt from 'mitt';
const emitter = mitt();

//components
import dialog from '@/components/dialog/dialog.vue';

// createApp
const app = createApp(App);
app.component('el-dialog', dialog);

// directive
import {
  drag
} from  '@/directives/index';
app.directive('drag', drag );

// mount
app.use(store).use(router).mount('#app');
export {
  emitter
}