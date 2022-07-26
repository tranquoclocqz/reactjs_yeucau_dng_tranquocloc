import { useState } from "react";
function Input({ type = `text`, ...attributes }) {
  const [inputType, setInputType] = useState(type);
  return (
    <>
      <input type={inputType} {...attributes} />
      {type === `password` && (
        <i
          className="toggle-password ion-eye"
          onClick={() =>
            setInputType(inputType === "password" ? "text" : "password")
          }
        />
      )}
    </>
  );
}
export default Input;
