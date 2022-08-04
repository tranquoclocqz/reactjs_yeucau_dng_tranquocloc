import * as types from "../constants"
const initState = {
  listPosts: []
};
export default function postReducer(state = initState, action) {
  switch (action.type) {
    case types.GET_LIST_POST:
      return {
        ...state, listPosts: action.payload.value
      }
      default:
        return state;
  }
}