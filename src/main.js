import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import router from './router'

import config from './config'
import axios from 'axios'
console.log('环境变量', import.meta.env);
axios.post(config.mockApi +'/login').then((res)=>{
    console.log(res);
})
createApp(App)
    .use(ElementPlus)
    .use(router)
    .mount('#app')
