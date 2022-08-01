import { addBudget } from "../../redux/actions/budgetAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import classname from "classnames";
function Form() {
  const dispatch = useDispatch();
  const [type, setType] = useState("inc");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  function handleSetAmount(value) {
    setAmount(value);
  }
  function handleSetDesc(value) {
    setDesc(value);
  }
  function handleSetBudgetType(value) {
    setType(value);
  }
  function handleAddItem() {
    const n = type === "exp" ? -1 : 1;
    dispatch(
      addBudget({
        id: uuidv4(),
        description: desc,
        amount: amount * n,
      })
    );
    setAmount(0);
    setDesc("");
  }
  return (
    <div className="add">
      <div className="add__container">
        <select
          className={classname("add__type", {
            "red red-focus": type === "exp",
          })}
          defaultValue="inc"
          onChange={(e) => handleSetBudgetType(e.target.value)}
        >
          <option value="inc">+</option>
          <option value="exp">-</option>
        </select>
        <input
          type="text"
          className={classname("add__description", {
            "red red-focus": type === "exp",
          })}
          placeholder="Add description"
          onChange={(e) => handleSetDesc(e.target.value)}
        />
        <input
          type="number"
          className={classname("add__value", {
            "red red-focus": type === "exp",
          })}
          placeholder="Value"
          onChange={(e) => handleSetAmount(e.target.value)}
        />
        <button
          className={classname("add__btn", {
            "red red-focus": type === "exp",
          })}
          onClick={() => handleAddItem()}
        >
          <i className="ion-ios-checkmark-outline"></i>
        </button>
      </div>
    </div>
  );
}
export default Form;
