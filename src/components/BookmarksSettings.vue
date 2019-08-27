<template>
  <div>
    <button @click.prevent="addEntry">add</button>
    <draggable v-model="bookmarkWrapper">
      <div v-for="bookmark in bookmarkWrapper" v-bind:key="bookmark.id">
        <BookmarkSettingsItem
          :name="bookmark.name"
          :url="bookmark.url"
          :img="bookmark.img"
          :id="bookmark.id"
          @name="updateName"
          @url="updateUrl"
          @img="updateImg"
          @del="deleteEntry"
        />
      </div>
    </draggable>
  </div>
</template>

<script>
import BookmarkSettingsItem from "../components/BookmarkSettingsItem.vue";
import draggable from "vuedraggable";
import bookmarkslist from "../bookmarks.js";
import { mapGetters, mapActions } from "vuex";
import bookmarks from "../bookmarks.js";
import { get } from "http";

export default {
  props: [],
  name: "bookmarkssettings",
  components: {
    BookmarkSettingsItem,
    draggable
  },

  methods: {
    updateName(e) {
      console.log(e);
      this.bookmarks_name(e);
    },
    updateUrl(e) {
      this.bookmarks_url(e);
    },
    updateImg(e) {
      this.bookmarks_img(e);
    },
    deleteEntry(e) {
      this.$store.commit(
        "bookmarks_list",
        this.bookmarks.bookmarks.filter(bookmark => bookmark.id != e.id)
      );
    },
    addEntry() {
      this.$store.commit("bookmarks_add");
    },
    ...mapActions(["bookmarks_name", "bookmarks_url", "bookmarks_img"])
  },
  computed: {
    bookmarkWrapper: {
      get() {
        console.log(this.$store.state.settings.bookmarks.bookmarks);
        return this.$store.state.settings.bookmarks.bookmarks;
      },
      set(value) {
        console.log(value);
        //this.$store.commit();
        this.$store.commit("bookmarks_list", value);
      }
    },
    ...mapGetters(["bookmarks"])
  },
  mounted() {}
};
</script>

<style scoped>
</style>