<template>
  <div id="home">
    <div id="widget-container">
      <router-link to="/settings" class="settings">
        <img src="@/assets/settings.png" alt />
      </router-link>
      <div class="top">
        <Clock
          :showBlink="this.clock.blink"
          :textcolor="this.clock.textcolor"
          :bracketscolor="this.clock.bracketscolor"
        ></Clock>
        <div v-if="this.torcheck.show">
          <TorCheck />
        </div>
      </div>

      <div>
        <draggable id="flex-container" v-model="widgetPostion">
          <div v-for="widget in widgetPostion" v-bind:key="widget.id" class="column">
            <div v-if="widget.type==='weather'">
              <Weather
                class="weather"
                :location="weather.location"
                :apiKey="weather.apiKey"
                :interval="weather.interval"
              />
            </div>
            <div v-else-if="widget.type === 'bookmarks'">
              <Bookmarks id="bookmarks" :bookmarks="bookmarks.bookmarks" />
            </div>
            <div v-else-if="widget.type==='github'">
              <GitHub :user="github.user" class="github" />
            </div>
            <div v-else></div>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import Clock from "../components/Clock.vue";
import Weather from "../components/Weather.vue";
import Bookmarks from "../components/Bookmarks.vue";
import TorCheck from "../components/TorCheck.vue";
import GitHub from "../components/Github.vue";

import { mapGetters, mapActions } from "vuex";

import draggable from "vuedraggable";

export default {
  name: "Home",
  components: {
    Clock,
    Weather,
    Bookmarks,
    TorCheck,
    GitHub,
    draggable
  },
  methods: {
    ...mapActions(["home_widgets"])
  },
  computed: {
    widgetPostion: {
      get() {
        return this.$store.state.settings.home.widgets;
      },
      set(value) {
        this.$store.commit("home_widgets", value);
      }
    },
    ...mapGetters([
      "clock",
      "weather",
      "torcheck",
      "bookmarks",
      "home",
      "github"
    ])
  }
};
</script>

<style scoped>
body {
  margin: 0;
}
#home {
  background: black;
  background-image: linear-gradient(to right, #360033, #0b8793);
  height: 100%;
  min-height: 100vh;
}
#bookmarks {
  /* auto for the scrollbar*/
  overflow: auto;
  max-height: 50vh;
}
#flex-container {
  display: flex;
  justify-content: center;
  background: none;
}
.column-fullsize {
  flex: 100%;
  min-width: 100%;
}
.column {
  flex: 25%;
  min-width: 450px;
  max-width: 500px;
  max-height: 500px;
  margin: 20px;
}
.top {
  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;
}

*::-webkit-scrollbar {
  display: none;
}
.settings {
  position: absolute;
  right: 5px;
  margin: 5px;
}
.settings img {
  height: 35px;
  width: 35px;
}

/* center the content */
@media only screen and (max-width: 1600px) {
  #flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .column {
    flex: 100%;
    flex-wrap: wrap;
    align-items: center;
  }
}
</style>
