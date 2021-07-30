import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/style/index.scss';

// 事件订阅及发布
import mitt from 'mitt';

// components
import dialog from '@/components/dialog/dialog.vue';

// directive
import Directives from '@/directives/index';

const emitter = mitt();

// createApp
const app = createApp(App);
app.component('el-dialog', dialog);

// mount
app.use(store).use(router).use(Directives).mount('#app');
export {
  emitter,
};
