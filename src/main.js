import Vue from "vue";
import App from "./App.vue";
import router from "./pages/router.js";
import store from "./store/index.js";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  router
}).$mount("#app");
