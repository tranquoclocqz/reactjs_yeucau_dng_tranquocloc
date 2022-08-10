import {
  GET_LIST_POST
} from "../constants/post"
const initState = {
  articleLatest: []
};
export default function postReducer(state = initState, action) {
  switch (action.type) {
    case GET_LIST_POST:
      return {
        ...state, articleLatest: action.payload.posts
      }
      default:
        return state;
  }
}