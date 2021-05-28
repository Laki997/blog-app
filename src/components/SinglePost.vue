<template>
  <div>
    <h1>Post</h1>
    <hr />
    <h1>{{ singlePost.title }}</h1>
    <h3>{{ singlePost.text }}</h3>
    <div>
      <p>{{ singlePost.createdAt | formatDate(null, "YYYY-MM-DD") }}</p>
      <p>{{ singlePost.createdAd | diffForHumans }}</p>
    </div>
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
import DateMixin from "../mixins/DateMixin.js";
import postService from "../services/PostService.js";
export default {
  mixins: [DateMixin],
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
    this.comments = this.singlePost.comments;
    console.log(this.comments);
  },
};
</script>

<style scoped></style>
