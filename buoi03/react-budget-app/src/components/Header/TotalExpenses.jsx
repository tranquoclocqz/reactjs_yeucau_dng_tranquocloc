export default function TotalExpenses({ value, percent }) {
  return (
    <div className="budget__expenses clearfix">
      <div className="budget__expenses--text">Expenses</div>
      <div className="right clearfix">
        <div className="budget__expenses--value">{value}</div>
        <div className="budget__expenses--percentage">{percent}</div>
      </div>
    </div>
  );
}
