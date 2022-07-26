import "./main-title.css";
import classname from "classnames";
import Button from "../Button";
function MainTitle({ title, btnAttribute }) {
  return (
    <div
      className={classname("main-title spacing", {
        "d-flex tcl-jc-between tcl-ais-center": btnAttribute,
      })}
    >
      <h2>{title}</h2>
      {btnAttribute && <Button {...btnAttribute}/>}
    </div>
  );
}

export default MainTitle;
