export default function TotalIncome({ value }) {
  return (
    <div className="budget__income clearfix">
      <div className="budget__income--text">Income</div>
      <div className="right">
        <div className="budget__income--value">{value}</div>
        <div className="budget__income--percentage">&nbsp;</div>
      </div>
    </div>
  );
}
