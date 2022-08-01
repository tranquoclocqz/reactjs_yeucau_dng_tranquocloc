import ListItem from "./ListItem";
export default function ListIncome({ listIncome }) {
  return (
    <div className="income">
      <h2 className="income__title">Income</h2>
      <div className="income__list" id="list-incomes">
        {listIncome && listIncome.map((e) => <ListItem item={e} key={e.id} />)}
      </div>
    </div>
  );
}
