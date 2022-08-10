import {
  GET_LIST_POST
} from "../constants/post";

import {
  postService
} from "../../services/post.service"

export const getListPost = (value) => {
  return {
    type: GET_LIST_POST,
    payload: {
      posts: value
    }
  }
}

export const getListPostAsync = (params) => {
  return async (dispatch) => {
    try {
      const response = await postService.getList(params);
      dispatch(getListPost(response));
    } catch (error) {
      console.error(error.message);
    }
  }
}