import { createApp } from 'vue';
import mitt from 'mitt';
import App from './App.vue';

import './assets/css/reset.css';
import './assets/css/main.css';

const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.mount('#app');