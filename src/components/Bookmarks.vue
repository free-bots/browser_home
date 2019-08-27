<template>
  <div>
    <BookmarkModal v-on:apply="apply" v-show="showModal"></BookmarkModal>
    <div id>
      <draggable v-model="bookmarkWrapper" id="container">
        <div id="column" v-for="bookmark in bookmarkWrapper" v-bind:key="bookmark.id">
          <Bookmark
            class="col"
            v-bind:name="bookmark.name"
            v-bind:url="bookmark.url"
            v-bind:img="bookmark.img"
            v-on:longclick="showModalf"
          />
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import Bookmark from "./Bookmark.vue";
import BookmarkModal from "./BookmarkModal.vue";

import draggable from "vuedraggable";

export default {
  name: "bookmarks",
  //props: ["bookmarks"],
  components: {
    Bookmark,
    BookmarkModal,
    draggable
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    showModalf() {
      //this.showModal = true;
    },
    apply(e) {
      this.showModal = false;
      // add a new Bookmark
      this.bookmarks.push(e);
    }
  },
  computed: {
    bookmarkWrapper: {
      get() {
        return this.$store.state.settings.bookmarks.bookmarks;
      },
      set(value) {
        //this.$store.commit();
        this.$store.commit("bookmarks_list", value);
      }
    }
  }
};
</script>

<style scoped>
#container {
  display: flex;
  flex-wrap: wrap;
  padding: 2%;
  justify-content: center;
  overflow: auto;
}
#column {
  /* size must be the same*/
  flex: 21%;
  max-width: 21%;
  max-height: 21%;
  padding: 2%;
}
</style>