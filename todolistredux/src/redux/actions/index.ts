import * as types from "@constans/ActionTypes";
import * as i from "@interface/todo/todo.interface";
export const addTodo = (value: i.Todo) => ({
  action: types.ADD_TODO,
  payload: value,
});

export const deleteTodo = (value: Number) => ({
  action: types.DELETE_TODO,
  payload: value,
});
