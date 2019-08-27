import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./Home.vue";
import Settings from "./Settings.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    }
  ]
});
