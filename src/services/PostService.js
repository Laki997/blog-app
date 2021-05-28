import axios from "axios";

class PostService {
  constructor() {
    const instance = axios.create({
      baseURL: "http://localhost:3000/",
    });
    this.client = instance;
  }

  async getAll() {
    let { data } = await this.client.get(
      `api/posts?filter={"include":["comments"]}`
    );

    return data;
  }

  async get(id) {
    let { data } = await this.client.get(
      `api/posts/${id}?filter={"include":["comments"]}`
    );

    return data;
  }

  async add(newPost) {
    return await this.client.post("/api/posts", {
      title: newPost.title,
      text: newPost.text,
    });
  }

  async edit(id, post) {
    await this.client.put(`api/posts/${id}`, {
      title: post.title,
      text: post.text,
    });
  }

  async delete(id) {
    await this.client.delete(`api/posts/${id}`);
  }

  async addComment(comment, postId) {
    return await this.client.post(`api/posts/${postId}/comments`, {
      text: comment.text,
      postId: postId,
    });
  }

  // async getAllComments() {
  //   let { data } = await this.client.get(`api/comments`);
  //   return data;
  // }
}

export default new PostService();
