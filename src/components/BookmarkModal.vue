<template>
  <div class="container">
    <div class="modal">
      <form action v-on:submit.prevent="apply">
        <label for="name">Name of the bookmark</label>
        <br />
        <input type="text" name="name" v-model="name" placeholder="name" />
        <br />
        <label for="url">Url of the site</label>
        <br />
        <input type="text" name="url" v-model="url" placeholder="edit me" />
        <br />
        <input type="submit" value />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookmarkmodal",
  data() {
    return {
      name: "",
      url: "",
      img: ""
    };
  },
  methods: {
    apply() {
      //this.img= `https://${new URL(this.url).hostname}/favicon.ico`;
      this.$emit("apply", { name: this.name, url: this.url, img: this.img });
    }
  }
};
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 5%;
  padding: 2%;
}
</style>