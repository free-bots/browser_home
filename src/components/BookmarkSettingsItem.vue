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
}
.row {
  display: flex;
  text-align: center;
}
.cloumn {
  flex: 20%;
}
</style>