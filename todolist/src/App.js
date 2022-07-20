import ListItem from "./components/ListItem";
import Control from "./components/Control";
import React, { useState, useReducer, useEffect } from "react";
import TodoListContext from "./context/TodoList";

const initState = {
  openForm: false,
  itemSelected: {},
  sortBy: "",
  textSearch: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_OPEN_FORM":
      return { ...state, openForm: true };
    case "SET_CLOSE_FORM":
      return { ...state, openForm: false };
    case "SET_ITEM_SELECTED":
      return { ...state, itemSelected: action.payload };
    case "SET_SORT_BY":
      return { ...state, sortBy: action.payload };
    case "SET_TEXT_SEARCH":
      return { ...state, textSearch: action.payload };
    default:
      return state;
  }
};

function App() {
  const [items, setItems] = useState([]);
  const deleteItem = (id) => {
    setItems((prevState) => {
      return prevState.filter((e) => e.id !== id);
    });
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const setContextValue = {
    state: state,
    dispatch: dispatch,
    setItems: setItems,
  };

  const RenderList = () => {
    let i = [];
    if (state.textSearch.length !== 0) {
      const reg = new RegExp(state.textSearch, "gi");
      i = items.filter((e) => {
          return e.name.match(reg) != null;
      });
    } else {
      i = items;
    }
    return i.length != 0 && <ListItem items={i} deleteItem={deleteItem} />;
  };
  return (
    <TodoListContext.Provider value={setContextValue}>
      <div className="container">
        <h1>Todo list</h1>
        <hr />
        <Control />
        <RenderList />
      </div>
    </TodoListContext.Provider>
  );
}

export default App;
