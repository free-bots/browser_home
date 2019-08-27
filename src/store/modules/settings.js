//import Vue from 'vue'
import dev from "../../bookmarks.js";
import uuid from "uuid/v4";

const state = {
  clock: {
    blink: localStorage.getItem("clock_blink") === "true" || false,
    textcolor: localStorage.getItem("clock_text_color") || "#ffffff",
    bracketscolor: localStorage.getItem("clock_brackets_color") || "#631792"
  },
  weather: {
    location: localStorage.getItem("weather_location") || "Berlin",
    interval: localStorage.getItem("weather_interval") || 50000,
    apiKey: localStorage.getItem("weather_api_key") || ""
  },
  bookmarks: {
    bookmarks: localStorage.getItem("bookmarks_bookmarks")
      ? JSON.parse(localStorage.getItem("bookmarks_bookmarks"))
      : dev
  },
  torcheck: {
    show: localStorage.getItem("torcheck_show") === "true" || false
  },
  home: {
    background: localStorage.getItem("home_background") || "",
    widgets: localStorage.getItem("home_widgets")
      ? JSON.parse(localStorage.getItem("home_widgets"))
      : [
          {
            id: 0,
            type: "weather"
          },
          {
            id: 1,
            type: "bookmarks"
          },
          {
            id: 3,
            type: "github"
          }
        ]
  },
  github: {
    user: localStorage.getItem("github_user") || "free-bots"
  }
};

const getters = {
  clock: state => state.clock,
  weather: state => state.weather,
  bookmarks: state => state.bookmarks,
  torcheck: state => state.torcheck,
  home: state => state.home,
  github: state => state.github
};

const actions = {
  clock_blink({ commit }, value) {
    commit("clock_blink", value);
  },
  clock_brackets_color({ commit }, value) {
    commit("clock_brackets_color", value);
  },
  clock_text_color({ commit }, value) {
    commit("clock_text_color", value);
  },
  weather_location({ commit }, value) {
    commit("weather_location", value);
  },
  weather_interval({ commit }, value) {
    commit("weather_interval", value);
  },
  weather_api_key({ commit }, value) {
    commit("weather_api_key", value);
  },
  torcheck_show({ commit }, value) {
    commit("torcheck_show", value);
  },
  github_user({ commit }, value) {
    commit("github_user", value);
  },
  bookmarks_name({ commit }, value) {
    commit("bookmarks_name", value);
  },
  bookmarks_url({ commit }, value) {
    commit("bookmarks_url", value);
  },
  bookmarks_img({ commit }, value) {
    commit("bookmarks_img", value);
  },
  home_widgets({ commit }, value) {
    commit("home_widgets", value);
  }
};

const mutations = {
  clock_blink(state, value) {
    // update localstorage
    localStorage.setItem("clock_blink", value);
    state.clock.blink = value;
  },
  clock_brackets_color(state, value) {
    localStorage.setItem("clock_brackets_color", value);
    state.clock.bracketscolor = value;
  },
  clock_text_color(state, value) {
    localStorage.setItem("clock_text_color", value);
    state.clock.textcolor = value;
  },
  weather_location(state, value) {
    localStorage.setItem("weather_location", value);
    state.weather.location = value;
  },
  weather_interval(state, value) {
    localStorage.setItem("weather_interval", value);
    state.weather.interval = value;
  },
  weather_api_key(state, value) {
    localStorage.setItem("weather_api_key", value);
    state.weather.apiKey = value;
  },
  torcheck_show(state, value) {
    localStorage.setItem("torcheck_show", value);
    state.torcheck.show = value;
  },
  github_user(state, value) {
    localStorage.setItem("github_user", value);
    state.github.user = value;
  },
  bookmarks_name(state, value) {
    state.bookmarks.bookmarks.find(bookmark => bookmark.id === value.id).name =
      value.value;
    localStorage.setItem(
      "bookmarks_bookmarks",
      JSON.stringify(state.bookmarks.bookmarks)
    );
  },
  bookmarks_url(state, value) {
    state.bookmarks.bookmarks.find(bookmark => bookmark.id === value.id).url =
      value.value;
    localStorage.setItem(
      "bookmarks_bookmarks",
      JSON.stringify(state.bookmarks.bookmarks)
    );
  },
  bookmarks_img(state, value) {
    state.bookmarks.bookmarks.find(bookmark => bookmark.id === value.id).img =
      value.value;
    localStorage.setItem(
      "bookmarks_bookmarks",
      JSON.stringify(state.bookmarks.bookmarks)
    );
  },
  bookmarks_list(state, value) {
    localStorage.setItem("bookmarks_bookmarks", JSON.stringify(value));
    state.bookmarks.bookmarks = value;
  },
  bookmarks_add(state, value) {
    state.bookmarks.bookmarks.unshift({
      id: uuid(),
      name: "NEW",
      url: "",
      img: ""
    });
    localStorage.setItem(
      "bookmarks_bookmarks",
      JSON.stringify(state.bookmarks.bookmarks)
    );
  },
  home_widgets(state, value) {
    localStorage.setItem("home_widgets", JSON.stringify(value));
    state.home.widgets = value;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
