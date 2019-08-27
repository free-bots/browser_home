<template>
  <div class="weather">
    <div class="current" v-if="error === ''">
      <div class="column">
        <span class="location">{{data.name}}</span>
        <br />
        <br />
        <div class="temp">{{data.main.temp}} °C</div>
      </div>

      <div class="column">
        <div class="icon">
          <img v-bind:src="img" alt />
        </div>
        <div class="description">{{data.weather[0].description}}</div>
      </div>
    </div>
    <div v-else>can't load the weather -___-</div>
    <div class="forcast">
      <div v-for="item in forcast.list" v-bind:key="item.dt" class="flex-container">
        <div class="date">{{new Date(item.dt*1000).toLocaleDateString()}}</div>
        <div class="time">{{new Date(item.dt*1000).toLocaleTimeString()}}</div>
        <div class="temp">{{item.main.temp}} °C</div>
        <div class="description">{{item.weather[0].description}}</div>
        <div class="icon">
          <img :src="getImg(item.weather[0].icon)" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["apiKey", "location", "interval"],
  name: "weather",
  data() {
    return {
      // the openweathermap json
      data: {},
      forcast: {},
      img: "",
      error: ""
    };
  },
  mounted() {
    //this.fetchWeather();
    setInterval(this.fetchWeather(), this.interval || 50000);
  },
  methods: {
    getImg(code) {
      return `http://openweathermap.org/img/wn/${code}@2x.png`;
    },
    fetchWeather() {
      //grep the current weather
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=${this.apiKey}`
        )
        .then(res => {
          const receive = res.data;
          this.data = receive;
          this.img = this.getImg(receive.weather[0].icon);
          //console.log(res.data);
        })
        .catch(err => {
          this.error = err;
        });

      //grep the forcast
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${this.location}&units=metric&appid=${this.apiKey}`
        )
        .then(res => {
          const receive = res.data;
          this.forcast = receive;
        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>

<style scoped>
.weather {
  color: black;
  text-align: center;
  border-radius: 30px;
  background: rgb(214, 210, 210);
  padding: 5%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 500px;
  max-height: 500px;
  min-width: 450px;
  min-height: 450px;
}
.current {
  font-size: 1.2em;
  display: flex;
  align-items: center;
  max-height: 140px;
}
.column {
  flex: 50%;
  padding: 5%;
}
.forcast {
  overflow: auto;
  height: 300px;
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-container div {
  flex: 25%;
}
</style>