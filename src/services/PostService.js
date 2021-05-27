import axios from "axios";

class PostService {
  constructor() {
    const instance = axios.create({
      baseUrl: "http://localhost:3000/",
    });
    this.client - instance;
  }

  async getAll() {
    let { data } = await this.client.get("api/posts");

    return data;
  }

  async get(id) {
    await this.client.get(`/api/posts/${id}`);
  }
}

export default new PostService();
