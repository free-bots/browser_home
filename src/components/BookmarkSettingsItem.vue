<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <img :src="this.img" alt />
      </div>
      <div class="column">
        <label for="name">Name</label>
        <br />
        <input type="text" id="name" :value="this.name" @input="emitName" />
      </div>
      <div class="column">
        <label for="url">URL</label>
        <br />
        <input type="text" id="url" :value="this.url" @input="emitUrl" />
      </div>
      <div class="column">
        <label for="img">Image URL</label>
        <br />
        <input type="text" id="img" :value="this.img" @input="emitImg" />
      </div>
    </div>
    <div class="column">
      <button @click.prevent="emitDel">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "url", "img", "id"],
  name: "bookmarksettingsitem",
  methods: {
    emitName(e) {
      this.$emit("name", { id: this.id, value: e.target.value });
    },
    emitUrl(e) {
      this.$emit("url", { id: this.id, value: e.target.value });
    },
    emitImg(e) {
      this.$emit("img", { id: this.id, value: e.target.value });
    },
    emitDel(e) {
      this.$emit("del", { id: this.id });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.row {
  display: flex;
  text-align: center;
  padding: 10px;
}
.cloumn {
  flex: 20%;
}
img {
  position: relative;
  top: 25px;
  border-radius: 30px;
  min-width: 35px;
  min-height: 35px;
  max-width: 35px;
  max-height: 35px;
  object-fit: cover;
  margin-right: 20px;
}
button {
  color: white;
  position: relative;
  top: 10px;
  margin: 10px;
  padding: 10px;
  height: 40px;
  border-radius: 30px;
  border: none;
  background: rgb(99, 12, 60);
}
input {
  padding: 10px;
  border-radius: 30px;
  border: none;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
}
</style>