import SearchC from "./SearchC";
import SortC from "./SortC";
import AddC from "./AddC";
import { memo } from "react";
function Control() {
  console.log("render control");
  return (
    <div className="row mb-3">
      <div className="col-6">
        <div className="row">
          <div className="col-7">
            <SearchC />
          </div>
          <div className="col-5">
            <SortC />
          </div>
        </div>
      </div>
      <div className="col-6">
        <AddC />
      </div>
    </div>
  );
}
export default memo(Control);
