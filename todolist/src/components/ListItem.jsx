import TodoListContext from "../context/TodoList";
import { useContext } from "react";

export default function ListItem({ items, deleteItem }) {
  const { dispatch } = useContext(TodoListContext);
  const renderLevel = (level) => {
    switch (level) {
      case "1":
        return <label className="badge badge-secondary">Small</label>;
      case "2":
        return <label className="badge badge-primary">Medium</label>;
      case "3":
        return <label className="badge badge-danger">High</label>;
      default:
        return <label className="badge badge-secondary">Small</label>;
    }
  };
  return (
    <div className="card border-1 border-success">
      <div className="card-header bg-success text-white">List Task</div>
      <div className="card-body p-0">
        <table className="table">
          <thead>
            <tr>
              <td>#</td>
              <td>Task</td>
              <td>Level</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {items.map((e, k) => {
              return (
                <tr key={e.id}>
                  <td>{k + 1}</td>
                  <td>{e.name}</td>
                  <td>{renderLevel(e.level)}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => {
                        dispatch({ type: "SET_ITEM_SELECTED", payload: e });
                        dispatch({ type: "SET_OPEN_FORM" });
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger ml-1"
                      onClick={() => deleteItem(e.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
