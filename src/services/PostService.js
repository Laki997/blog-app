import axios from "axios";

class PostService {
  constructor() {
    const instance = axios.create({
      baseURL: "http://localhost:3000/",
    });
    this.client = instance;
  }

  async getAll() {
    let { data } = await this.client.get("api/posts");

    return data;
  }

  async get(id) {
    let { data } = await this.client.get(`/api/posts/${id}`);

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
}

export default new PostService();
