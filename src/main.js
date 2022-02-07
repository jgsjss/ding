import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import mitt from 'mitt'
import mixins from './mixins'
import vuesweetalert2 from 'vue-sweetalert2'
import "./assets/sweetalert2.min.css"

/*-----vue3-date-time-picker-----*/
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'

import xeicon from 'xeicon'

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.axios = axios;
app.component('Datepicker', Datepicker);



app.mixin(mixins)
app.use(vuesweetalert2)
app.use(xeicon)
// app.use(VueCookies);


app.use(store).use(router).mount('#app')
