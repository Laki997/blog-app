<template>
  <div>
    <ul v-for="post in posts" :key="post.id">
      <router-link :to="`/edit/${post.id}`" tag="button" class="btn btn-primary"
        >Edit</router-link
      >
      {{
        post.title
      }}
      <router-link :to="`/post/${post.id}`">Single post</router-link>
    </ul>
  </div>
</template>

<script>
import postService from "../services/PostService.js";
export default {
  props: ["id"],
  data() {
    return {
      posts: "",
      singlePost: "",
    };
  },

  methods: {
    async get(id) {
      this.singlePost = await postService.getAll(id);
    },
  },

  async created() {
    this.posts = await postService.getAll();
  },
};
</script>

<style scoped></style>
