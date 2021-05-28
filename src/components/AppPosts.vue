<template>
  <div>
    <ul v-for="post in posts" :key="post.id">
      <router-link :to="`/edit/${post.id}`" tag="button" class="btn btn-primary"
        >Edit</router-link
      >
      {{
        post.title
      }}
      <div>
        <p>{{ posts.createdAt | formatDate(null, "YYYY-MM-DD") }}</p>
        <p>{{ posts.createdAd | diffForHumans }}</p>
      </div>
      <router-link :to="`/post/${post.id}`">Single post</router-link>
      <button @click="deletePost(post.id)" class="btn btn-danger btn-lg">
        Delete
      </button>
      ({{
        post.comments.length
      }})
    </ul>
  </div>
</template>

<script>
import postService from "../services/PostService.js";
import DateMixin from "../mixins/DateMixin.js";

export default {
  mixins: [DateMixin],
  props: ["id"],
  data() {
    return {
      posts: "",
      singlePost: "",
      brojKomentara: "",
    };
  },

  methods: {
    async get(id) {
      this.singlePost = await postService.get(id);
    },

    async deletePost(id) {
      const post = this.posts.find((post) => {
        return post.id === Number(id);
      });
      let index = this.posts.indexOf(post);

      await postService.delete(id);
      this.posts.splice(index, 1);
    },
  },

  async created() {
    this.posts = await postService.getAll();
  },
};
</script>

<style scoped></style>
