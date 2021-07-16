import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import router from './router'
import request from './utils/request'

const app = createApp(App)


console.log('环境变量', import.meta.env);
app.config.globalProperties.$request = request

app.use(ElementPlus)
    .use(router)
    .mount('#app')
