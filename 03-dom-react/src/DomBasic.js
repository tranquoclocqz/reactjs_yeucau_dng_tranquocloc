import { useState } from "react";
function DomBasic() {
  const [text, setText] = useState("");
  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input type="text" id="fullname" onChange={(e) => handleInputChange(e)} />{" "}
      <br />
      <h3>
        Giá trị nhập của user: {text}
      </h3>
    </>
  );
}
export default DomBasic;