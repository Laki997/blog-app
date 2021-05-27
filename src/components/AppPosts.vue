<template>
  <div>
    <h1>Cao</h1>
  </div>
</template>

<script>
import postService from "../services/PostService.js";
export default {
  data() {
    return {
      posts: "",
    };
  },

  methods: {
    async getAll() {
      this.posts = await postService.getAll();
    },
  },
};
</script>

<style scoped></style>
