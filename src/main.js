import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";
import mitt from "mitt";
import mixins from "./mixins";
import vuesweetalert2 from "vue-sweetalert2";
import "./assets/sweetalert2.min.css";
// import InfiniteLoading from "v3-infinite-loading";
/*-----vue3-date-time-picker-----*/
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";
import VueExcelXlsx from "vue-excel-xlsx";
const emitter = mitt();
const app = createApp(App);
const sweet = require("sweetalert2");

app.config.globalProperties.emitter = emitter;
app.config.globalProperties.axios = axios;
app.component("Datepicker", Datepicker);

app.mixin(mixins);
app.use(vuesweetalert2);
app.use(VueExcelXlsx)
// app.component("infinite-loading", InfiniteLoading);
// app.use(VueCookies);


// router.beforeEach((to, from, next) => {
//  if (to.matched.some((record) => record.meta.requireLogin)) {
//    const isLogin = store.getters["loginStore/isLogin"];
//    if (!isLogin) {
//      sweet.fire("로그인 후 이용가능");
//      next("/login");
//    } else {
//      next();
//    }
//  } else {
//    next();
//  }
// });
app.use(store).use(router).mount("#app");
