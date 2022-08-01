import ListItem from "./ListItem";
export default function ListExpenses({ listExpenses, total }) {
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list" id="list-expenses">
        {listExpenses &&
          listExpenses.map((e) => <ListItem item={e} key={e.id} total={total}/>)}
      </div>
    </div>
  );
}
