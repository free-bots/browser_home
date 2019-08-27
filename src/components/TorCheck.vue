<template>
  <div id="container">
    <div id="ip">
      <p v-if="error">can't check for tor support -___-</p>
      <p v-if="IsTor && error === ''">You are connected with the ip: {{Ip}}</p>
      <p v-else-if="!IsTor && error === ''">You are not connected with the ip: {{Ip}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "torcheck",
  data() {
    return {
      IsTor: false,
      Ip: "",
      error: ""
    };
  },
  mounted() {
    axios
      .get("https://check.torproject.org/api/ip")
      .then(res => {
        const data = res.data;
        this.IsTor = data.IsTor;
        this.Ip = data.IP;
        this.error = "";
      })
      .catch(err => {
        this.error = err;
      });
  }
};
</script>

<style>
#container {
  text-align: center;
  color: white;
  font-size: 1em;
}
</style>