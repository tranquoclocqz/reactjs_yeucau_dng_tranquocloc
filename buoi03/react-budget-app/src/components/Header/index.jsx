import TotalAmount from "./TotalAmount";
import TotalIncome from "./TotalIncome";
import TotalExpenses from "./TotalExpenses";
import { useSelector } from "react-redux";
import { calcTotal, showMoney, calcPercent } from "../../helpers/function";

function Header() {
  const listBudgetReducer = useSelector(
    (state) => state.budgetReducer.listDataIncome
  );
  const listIncome = listBudgetReducer.filter((e) => e.amount > 0);
  const listExpenses = listBudgetReducer.filter((e) => e.amount < 0);
  const totalListIncome = calcTotal(listIncome);
  const totalListExpenses = calcTotal(listExpenses);
  const totalAmount = totalListIncome + totalListExpenses;
  const percent = calcPercent(totalListExpenses, totalListIncome);
  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in <span className="budget__title--month">7</span>:
        </div>
        <TotalAmount value={showMoney(totalAmount)} />
        <TotalIncome value={showMoney(totalListIncome)} />
        <TotalExpenses
          value={showMoney(totalListExpenses)}
          percent={percent}
        />
      </div>
    </div>
  );
}

export default Header;
