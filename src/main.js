import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import mitt from 'mitt'
import mixins from './mixins'



const emitter = mitt();
const app = createApp(App);
//emitter 및 액시오스 전역화
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.axios = axios;
app.mixin(mixins)
app.use(store).use(router).mount('#app')
