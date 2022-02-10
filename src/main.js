import Vue from "vue";
import router from "./router";
import App from "./components/App";

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App)
}).$mount("#app");
