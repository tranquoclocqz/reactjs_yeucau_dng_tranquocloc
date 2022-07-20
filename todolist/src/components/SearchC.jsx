import React, { useState, useContext } from "react";
import TodoListContext from "../context/TodoList";
export default function SearchC() {
  const { dispatch } = useContext(TodoListContext);
  const [txtSearch, setTxtSearch] = useState("");
  console.log("render search");
  return (
    <div className="form-inline">
      <input
        type="text"
        className="form-control mr-2"
        onChange={(e) => setTxtSearch(e.target.value)}
        value={txtSearch}
      />
      <button
        className="btn btn-primary"
        type="button"
        onClick={() =>
          dispatch({ type: "SET_TEXT_SEARCH", payload: txtSearch })
        }
      >
        Search
      </button>
    </div>
  );
}
