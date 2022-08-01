import ListExpenses from "./ListExpenses";
import ListIncome from "./ListIncome";
import { useSelector } from "react-redux";
import { calcTotal } from "../../helpers/function";
function List() {
  const listBudgetReducer = useSelector(
    (state) => state.budgetReducer.listDataIncome
  );
  const listIncome = listBudgetReducer.filter((e) => e.amount > 0);
  const listExpenses = listBudgetReducer.filter((e) => e.amount < 0);
  const totalListIncome = calcTotal(listIncome);
  return (
    <div className="container clearfix">
      <ListIncome listIncome={listIncome} />
      <ListExpenses listExpenses={listExpenses} total={totalListIncome} />
    </div>
  );
}
export default List;
