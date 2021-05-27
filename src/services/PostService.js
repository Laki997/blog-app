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
    await this.client.get(`/api/posts/${id}`);
  }

  async add(newPost) {
    await this.client.post("/api/posts", {
      title: newPost.title,
      text: newPost.text,
    });
  }
}

export default new PostService();
