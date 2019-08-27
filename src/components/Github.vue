<template>
  <div class="container">
    <div class="user-container">
      <a :href="html_url" class="user">
        <img :src="avatar_url" alt />
        <div>{{login}}</div>
      </a>
    </div>
    <div class="repos">
      <div v-if="repos.length > 0">
        <div v-for="repo in repos" v-bind:key="repo.id">
          <a :href="repo.html_url" class="repoitem">{{repo.name}}</a>
        </div>
      </div>
      <div v-else>no public repos found -___-</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["user"],
  name: "github",
  data() {
    return {
      login: "",
      avatar_url: "",
      html_url: "",
      repos: [
        {
          id: "",
          name: "",
          html_url: ""
        }
      ]
    };
  },
  mounted() {
    axios
      .get(`https://api.github.com/users/${this.user}/repos`)
      .then(res => {
        const receive = res.data;
        this.repos = [];
        receive.forEach(element => {
          this.repos.push({
            id: element.id,
            name: element.name,
            html_url: element.html_url
          });
        });
        console.log(receive);
      })
      .catch(err => {});
    axios
      .get(`https://api.github.com/users/${this.user}`)
      .then(res => {
        const receive = res.data;
        console.log(receive);
        this.login = receive.login;
        this.avatar_url = receive.avatar_url;
        this.html_url = receive.html_url;
      })
      .catch(err => {});
  }
};
</script>

<style scoped>
.container {
  font-size: 1.3em;
  border-radius: 5%;
  padding: 5%;
  background: rgb(214, 210, 210);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.user-container {
}
.user {
  display: flex;
  padding: 5%;
}
.user img {
  width: 20%;
  height: 20%;
  border-radius: 33%;
}
.user div {
  text-align: center;
  width: 80%;
  padding: 5%;
  font-size: 2em;
  text-overflow: ellipsis;
}
.repos {
  text-align: center;
  overflow: auto;
  height: 32vh;
}
.repoitem {
  padding: 5%;
  display: block;
}
a {
  text-decoration: none;
  color: black;
}
</style>