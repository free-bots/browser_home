import Vuex from "vuex";
import Vue from "vue";
import settings from "./modules/settings.js";

// Load Vuex
Vue.use(Vuex);

// create the store
export default new Vuex.Store({
  modules: {
    settings
  }
});
