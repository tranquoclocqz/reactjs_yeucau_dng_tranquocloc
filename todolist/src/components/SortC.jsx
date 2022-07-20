import React, { useState, useContext, useEffect } from "react";
import TodoListContext from "../context/TodoList";
export default function SortC() {
  const [sortValue, setSortValue] = useState("");
  const { dispatch } = useContext(TodoListContext);
  useEffect(() => {
    dispatch({ type: "SET_SORT_BY", payload: sortValue });
  }, [sortValue]);
  console.log("render Sort");
  return (
    <select
      className="form-control"
      onChange={(e) => setSortValue(e.target.value)}
    >
      <option value="">Sort option</option>
      <optgroup label="Name">
        <option value="name-asc">Name ASC</option>
        <option value="name-desc">Name Desc</option>
      </optgroup>
      <optgroup label="Level">
        <option value="level-asc">Level ASC</option>
        <option value="level-desc">Level Desc</option>
      </optgroup>
    </select>
  );
}
