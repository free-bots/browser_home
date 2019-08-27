<template>
  <div class="container">
    <a href="/" class="home">
      <img src="@/assets/home.png" alt />
    </a>
    <div class="flex-container">
      <div class="row">
        <div class="column">
          <form action>
            <label for="brackets">Color for brackets</label>
            <br />
            <br />
            <input
              type="color"
              name
              id="brackets"
              :value="this.clock.bracketscolor"
              @input="setClockBracketsColor"
            />
            <br />
            <br />
            <label for="clocktext">Textcolor of the clock</label>
            <br />
            <br />
            <input
              type="color"
              name
              id="clocktext"
              :value="this.clock.textcolor"
              @input="setClockTextColor"
            />
            <br />
            <br />
            <label for="blink">Show blinking dots</label>
            <br />
            <br />
            <input
              type="checkbox"
              name
              id="blink"
              :checked="this.clock.blink"
              @input="setClockBlink"
            />
            <br />
          </form>
        </div>

        <div class="column">
          <Clock
            :showBlink="this.clock.blink"
            :textcolor="this.clock.textcolor"
            :bracketscolor="this.clock.bracketscolor"
          ></Clock>
        </div>
      </div>
    </div>

    <div class="flex-container">
      <div class="row">
        <div class="column">
          <form action>
            <label for="location">Location for the weather</label>
            <br />
            <br />
            <input
              type="text"
              name
              id="location"
              :value="this.weather.location"
              @input="setWeatherLocation"
            />
            <br />
            <br />
            <label for="weatherinterval">Refresh time of the weather</label>
            <br />
            <br />
            <input
              type="text"
              name
              id="weatherinterval"
              :value="this.weather.interval"
              @input="setWeatherInterval"
            />
            <br />
            <br />
            <label for="weatherapikey">Api key for openweathermap</label>
            <br />
            <br />
            <input name id="weatherapikey" :value="this.weather.apiKey" @input="setWeatherApiKey" />
          </form>
        </div>

        <div class="column">
          <div class="columnfix">
            <Weather
              :location="this.weather.location"
              :apiKey="this.weather.apiKey"
              :interval="this.weather.interval"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-container">
      <div class="row">
        <div class="column">
          <form action>
            <label for="torcheck">Show tor status</label>
            <br />
            <br />
            <input
              type="checkbox"
              name
              id="torcheck"
              :checked="this.torcheck.show"
              @input="setTorCheckShow"
            />
            <br />
          </form>
        </div>
        <div class="column">
          <TorCheck />
        </div>
      </div>
    </div>
    <div class="flex-container">
      <div class="row">
        <div class="column">
          <form action>
            <label for="github">GitHub login name</label>
            <br />
            <br />
            <input type="text" name id="github" :value="this.github.user" @input="setGitHubUser" />
            <br />
          </form>
        </div>
        <div class="column">
          <div class="columnfix">
            <Github :user="this.github.user" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex-container">
      <div class="row">
        <div class="column">
          <form action>
            <label for="bookmarks">Bookmarks</label>
            <br />
            <br />
            <BookmarksSettings />

            <br />
          </form>
        </div>
        <div class="column">
          <Bookmarks />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Clock from "../components/Clock";
import Weather from "../components/Weather";
import TorCheck from "../components/TorCheck";
import Github from "../components/Github.vue";
import BookmarksSettings from "../components/BookmarksSettings.vue";
import Bookmarks from "../components/Bookmarks.vue";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "settings",
  components: {
    Clock,
    Weather,
    TorCheck,
    Github,
    BookmarksSettings,
    Bookmarks
  },
  methods: {
    setClockBracketsColor(e) {
      this.clock_brackets_color(e.target.value);
    },
    setClockTextColor(e) {
      this.clock_text_color(e.target.value);
    },
    setClockBlink(e) {
      this.clock_blink(e.target.checked);
    },
    setWeatherLocation(e) {
      this.weather_location(e.target.value);
    },
    setWeatherInterval(e) {
      this.weather_interval(e.target.value);
    },
    setWeatherApiKey(e) {
      this.weather_api_key(e.target.value);
    },
    setTorCheckShow(e) {
      this.torcheck_show(e.target.checked);
    },
    setGitHubUser(e) {
      this.github_user(e.target.value);
    },
    ...mapActions([
      "clock_blink",
      "clock_brackets_color",
      "clock_text_color",
      "weather_location",
      "weather_api_key",
      "weather_interval",
      "torcheck_show",
      "github_user"
    ])
  },
  computed: {
    ...mapGetters([
      "clock",
      "weather",
      "torcheck",
      "bookmarks",
      "home",
      "github"
    ])
  },
  data() {
    return {
      location: [
        {
          name: "",
          country: "",
          id: ""
        }
      ]
    };
  },
  mounted() {}
};
</script>

<style scoped>
.flex-container {
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.column {
  flex: 50%;
  flex-wrap: wrap;
  align-items: center;
  max-width: 450px;
  min-width: 50%;
}
.container {
  background-image: linear-gradient(to right, #360033, #0b8793);
  height: 100%;
  color: white;
}
.columnfix {
  display: flex;
  justify-content: center;
  align-items: center;
}
.home {
  position: absolute;
  left: 5px;
  margin: 5px;
}
.home img {
  height: 35px;
  width: 35px;
}
form {
  text-align: center;
  font-size: 1.3em;
  margin: 80px;
}

input {
  border: none;
  border-radius: 30px;
  padding: 10px;
  text-align: center;
}
@media only screen and (max-width: 1400px) {
  .column {
    flex: 100%;
    flex-wrap: wrap;
    align-items: center;
    max-width: 450px;
    min-width: 100%;
  }
}
</style>