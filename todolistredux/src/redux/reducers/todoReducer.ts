import { ADD_TODO, DELETE_TODO } from "@constans/ActionTypes";
import * as i from "@interface/todo/todo.interface";

const initState: i.Todo[] = [];
function todoReducer(state = initState, action: any) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}
export default todoReducer;
