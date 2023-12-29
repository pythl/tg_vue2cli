import Vue from "vue";
import App from "./App.vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "@/assets/less/index.less";
import api from "./http/index";
import store from "./store/";
import router from "./router";
import iconPark from "@/plugins/iconpark/";

Vue.config.productionTip = false;
Vue.use(api);
Vue.use(Antd);

//注册iconpark
iconPark();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
