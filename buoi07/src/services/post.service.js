import api from "./api";

export const postService = {
  getList: (params) => {
    return api.get('wp/v2/posts', {
      params
    });
  }
}