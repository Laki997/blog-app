<template>
  <div>
    <form @submit.prevent="add">
      <div class="form-group">
        <label for="exampleFormControlInput1">Title</label>
        <input
          type="text"
          v-model="newPost.title"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter title"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Text</label>
        <input
          type="text"
          v-model="newPost.text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter text"
        />
      </div>
      <button type="submit">Add</button>

      <button @click="reset">Reset</button>
    </form>
  </div>
</template>

<script>
import postService from "../services/PostService.js";
export default {
  data() {
    return {
      newPost: {
        title: "",
        text: "",
      },
    };
  },

  methods: {
    async add() {
      await postService.add(this.newPost);
      this.$router.push({ name: "posts" });
    },

    reset() {
      (this.newPost.title = ""), (this.newPost.text = "");
    },
  },
};
</script>

<style scoped></style>
