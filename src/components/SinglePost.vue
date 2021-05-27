<template>
  <div>
    <h1>{{ singlePost.title }}</h1>
    <h3>{{ singlePost.text }}</h3>
  </div>
</template>

<script>
import postService from "../services/PostService.js";
export default {
  props: ["id"],
  data() {
    return {
      singlePost: "",
    };
  },

  methods: {},

  async created() {
    this.singlePost = await postService.get(this.id);
  },
};
</script>

<style scoped></style>
