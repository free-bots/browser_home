<template>
  <div class="container">
    <a
      v-bind:href="url"
      @mousedown="start"
      @mouseleave="stop"
      @mouseup="stop"
      @touchstart="start"
      @touchend="stop"
      @touchcancel="stop"
    >
      <div v-if="img !== ''">
        <img v-bind:src="img" alt />
      </div>
      <div v-else>
        <img src="@/assets/logo.png" alt />
      </div>
      <div id="name">{{name}}</div>
    </a>
  </div>
</template>

<script>
/**
 * basic square for the bookmarks
 */
export default {
  name: "bookmark",
  props: ["name", "url", "img"],
  data() {
    return {
      interval: false
    };
  },
  methods: {
    longClick() {},
    start() {
      if (!this.interval) {
        this.interval = setInterval(() => {
          this.$emit("longclick");
        }, 1000);
      }
    },
    stop() {
      clearInterval(this.interval);
      this.interval = false;
    }
  }
};
</script>

<style scoped>
.container {
  display: block;
  overflow: hidden;
}
.container a {
  text-decoration: none;
}
.container img {
  vertical-align: inherit;
  width: 60%;
  height: 60%;
  border-radius: 33%;
  background: white;
  margin: 5%;
  padding: 15%;
  object-fit: cover;
  max-width: 50px;
  max-height: 50px;
}
#name {
  margin-left: 25%;
  margin-right: 25%;
  width: 50%;
  overflow: hidden;
  color: blueviolet;
  text-align: center;
  font-size: 1em;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>