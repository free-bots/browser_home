<template>
  <div id="clock">
    <div class="clockline bracket" :style="bracketsStyle">{</div>
    <div class="clockline" :style="textColor">{{time}}</div>
    <div class="clockline bracket" :style="bracketsStyle">}</div>
    <p class="text" :style="textColor">It's time for some code...</p>
  </div>
</template>

<script>
import { setInterval } from "timers";
export default {
  props: ["showBlink", "bracketscolor", "textcolor"],
  name: "clock",
  data() {
    return {
      time: "00:00:00",
      showDot: false
    };
  },
  methodes: {},
  mounted() {
    // update the time
    setInterval(() => {
      let t = new Date().toLocaleTimeString();
      if (this.showBlink) {
        if (this.showDot) {
          t = t.replace(/:/g, " ");
        }
        this.showDot = !this.showDot;
      }
      this.time = t;
    }, 999);
  },
  computed: {
    bracketsStyle() {
      return {
        "--bracketscolor": this.bracketscolor || "purple"
      };
    },
    textColor() {
      return {
        "--textcolor": this.textcolor || "white"
      };
    }
  }
};
</script>

<style scoped>
#clock {
  text-align: center;
  color: var(--textcolor);
}
.clockline {
  display: inline-block;
  font-size: 5em;
  color: var(--textcolor);
}
.bracket {
  font-size: 6em;
  color: var(--bracketscolor);
}
.text {
  font-size: 1.3em;
  color: var(--textcolor);
}
</style>