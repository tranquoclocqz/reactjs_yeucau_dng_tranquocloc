import "./MainTitle.css";
import Button from "../Button";
export default function MainTitle({ type, title, btnText, btnClass, href }) {
  switch (type) {
    case "1":
      return (
        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
          <h2>{title}</h2>
          <Button tag="a" href={href} className={btnClass || "btn btn-default"}>
            {btnText}
          </Button>
        </div>
      );
    default:
      return (
        <div className="main-title spacing">
          <h2>{title}</h2>
        </div>
      );
  }
}
