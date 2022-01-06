import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'
import mixins from './mixins'

const emitter = mitt()
const app = createApp(App)
app.config.globalProperties.emitter = emitter
app.mixin(mixins)

app.use(store).use(router).mount('#app')
