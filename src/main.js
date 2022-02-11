import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";
import mitt from "mitt";
import mixins from "./mixins";
import vuesweetalert2 from "vue-sweetalert2";
import "./assets/sweetalert2.min.css";
/*-----vue3-date-time-picker-----*/
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.axios = axios;
app.component("Datepicker", Datepicker);

app.mixin(mixins);
app.use(vuesweetalert2);
// app.use(VueCookies);

const sweet = require("sweetalert2");

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireLogin)) {
    const isLogin = store.getters["loginStore/isLogin"];
    if (!isLogin) {
      //
      // const myswal = new Object()
      // myswal.set(vuesweetalert2())
      // var my = new vuesweetalert2();
      sweet.fire("로그인 후 이용가능");
      // vuesweetalert2("로그인 후 이용 가능합니다.");
      // next('/login?returnUrl=' + to.fullPath);
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});
app.use(store).use(router).mount("#app");
