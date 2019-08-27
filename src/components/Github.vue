<template>
  <div class="container">
    <div v-if="error !== ''">an error occurred -___-</div>
    <div v-else>
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
      ],
      error: ""
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
      })
      .catch(err => {
        this.error = err;
      });
    axios
      .get(`https://api.github.com/users/${this.user}`)
      .then(res => {
        const receive = res.data;
        this.login = receive.login;
        this.avatar_url = receive.avatar_url;
        this.html_url = receive.html_url;
      })
      .catch(err => {
        this.error = err;
      });
  }
};
</script>

<style scoped>
.container {
  font-size: 1.3em;
  border-radius: 30px;
  padding: 5%;
  background: rgb(214, 210, 210);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 500px;
  max-height: 500px;
  min-width: 450px;
  min-height: 450px;
}
.user-container {
  height: 20%;
  max-height: 140px;
}
.user {
  display: flex;
  padding: 5%;
}
.user img {
  width: 20%;
  height: 20%;
  border-radius: 30px;
}
.user div {
  text-align: center;
  width: 80%;
  padding: 5%;
  font-size: 1.5em;
  text-overflow: ellipsis;
}
.repos {
  text-align: center;
  overflow: auto;
  height: 300px;
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