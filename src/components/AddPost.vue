<template>
  <div>
    <form @submit.prevent="submitPost">
      <div class="form-group">
        <label for="exampleFormControlInput1">Title</label>
        <input
          type="text"
          v-model="newPost.title"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter title"
          minlength="2"
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
          maxlength="300"
        />
      </div>
      <div v-if="addOrEdit">
        <button class="btn btn-primary btn-bg" type="submit">Edit</button>
      </div>
      <div v-else>
        <button class="btn btn-primary btn-bg" type="submit">Add</button>
      </div>
      <br />
      <br />

      <button class="btn btn-warning btn-bg" @click="reset">Reset</button>
    </form>
  </div>
</template>

<script>
import postService from "../services/PostService.js";
export default {
  props: ["id"],
  data() {
    return {
      newPost: {
        title: "",
        text: "",
      },
    };
  },

  methods: {
    reset() {
      (this.newPost.title = ""), (this.newPost.text = "");
    },
    async submitPost() {
      if (this.addOrEdit) {
        await postService.edit(this.id, this.newPost);

        this.$router.push({ name: "posts" });
      } else {
        await postService.add(this.newPost);
        this.$router.push({ name: "posts" });
      }
    },
  },

  computed: {
    addOrEdit() {
      console.log(this.id);
      if (this.id) {
        return true;
      } else {
        return false;
      }
    },
  },

  async created() {
    if (this.id) {
      let singlePost = await postService.get(this.id);
      this.newPost = singlePost;
    }
    return;
  },
};
</script>

<style scoped></style>
