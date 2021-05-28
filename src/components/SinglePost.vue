<template>
  <div>
    <h1>Post</h1>
    <hr />
    <h1>{{ singlePost.title }}</h1>
    <h3>{{ singlePost.text }}</h3>
    <hr />
    <h1>Komentari</h1>
    <div v-for="comment in comments" :key="comment.id">
      <li>{{ comment.text }}</li>
    </div>
    <div>
      <br />
      <br />
      <form @submit.prevent="addComment">
        Text: <input type="text" v-model="comment.text" required />
        <button type="submit">Dodaj komentar</button>
      </form>
    </div>
  </div>
</template>

<script>
import postService from "../services/PostService.js";
export default {
  props: ["id"],
  data() {
    return {
      singlePost: "",
      comment: {
        text: "",
        postId: this.id,
      },
      comments: "",
    };
  },

  methods: {
    async addComment() {
      console.log(this.comment);
      console.log(this.comment.postId);
      console.log(this.comment.text);
      await postService.addComment(this.comment, this.id);
      this.comment.text = "";
    },
  },

  async created() {
    this.singlePost = await postService.get(this.id);
    this.comments = await postService.getAllComments();
  },
};
</script>

<style scoped></style>
