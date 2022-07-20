import { useState, useContext, useEffect, memo } from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import TodoListContext from "../context/TodoList";

export default function AddC() {
  const { state, setItems, dispatch } = useContext(TodoListContext);
  const { openForm, itemSelected } = state;
  const [name, setName] = useState("");
  const [level, setLevel] = useState("1");
  const [id, setId] = useState("");
  console.log("render add");
  useEffect(() => {
    if (Object.keys(itemSelected).length !== 0) {
      setName(itemSelected.name);
      setLevel(itemSelected.level);
      setId(itemSelected.id);
    }
  }, [itemSelected]);

  const addTask = () => {
    if (id) {
      setItems((prevState) => {
        return [...prevState].map((e) => {
          if (e.id === id) {
            return {
              id: id,
              name: name,
              level: level,
            };
          } else {
            return e;
          }
        });
      });
    } else {
      console.log({
        id: uuidv4(),
        name: name,
        level: level,
      });
      setItems((prevState) => {
        return [
          ...prevState,
          {
            id: uuidv4(),
            name: name,
            level: level,
          },
        ];
      });
    }
    dispatch({ type: "SET_CLOSE_FORM" });
  };
  const resetForm = () => {
    setId("");
    setName("");
    setLevel(1);
  };

  return (
    <>
      <button
        className="btn btn-primary btn-block mb-3"
        onClick={() => dispatch({ type: "SET_OPEN_FORM" })}
      >
        Add Task
      </button>
      <div className={classNames("row", { "d-none": !openForm })}>
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name || ""}
          />
        </div>
        <div className="col-4">
          <select
            className="form-control"
            onChange={(e) => setLevel(e.target.value)}
            value={level}
          >
            <option value="1">Small</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-primary pl-1 pr-1 btn-block"
            onClick={() => {
              addTask();
              resetForm();
            }}
          >
            Submit
          </button>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-secondary pl-1 pr-1 btn-block"
            onClick={() => {
              dispatch({ type: "SET_CLOSE_FORM" });
              resetForm();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
