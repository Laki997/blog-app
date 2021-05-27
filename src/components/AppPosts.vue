<template>
  <div>
    <ul v-for="post in posts" :key="post.id">
      {{
        post.title
      }}
    </ul>
    <router-link :to="`/post/${post.id}`">Single post</router-link>
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
