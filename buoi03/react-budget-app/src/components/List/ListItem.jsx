import { showMoney, calcPercent } from "../../helpers/function";
import { removeBudget } from "../../redux/actions/budgetAction";
import { useDispatch } from "react-redux";
function ListItem({ item, total }) {
  const dispatch = useDispatch();
  const { description, id, amount } = item;
  function handleRemoveBudget(id) {
    dispatch(removeBudget(id));
  }
  return (
    <div className="item clearfix">
      <div className="item__description">{description}</div>
      <div className="right clearfix">
        <div className="item__value">{showMoney(amount)}</div>
        {amount < 0 && (
          <div className="item__percentage">{calcPercent(amount, total)}</div>
        )}
        <div className="item__delete">
          <button
            className="item__delete--btn"
            onClick={() => handleRemoveBudget(id)}
          >
            <i className="ion-ios-close-outline" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ListItem;
