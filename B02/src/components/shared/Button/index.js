import "./button.css";
import IconLoading from "../IconLoading";
import classnames from "classnames";
function Button(props) {
  
  let {
    type,
    htmlType,
    className,
    size,
    onClick,
    loading,
    children,
    as = "button",
    ...attributes
  } = props;
  const Tag = as !== "button" ? "a" : "button";
  let btnClass = {
    "btn-size-large": size === "large",
    "btn-default": type === "default",
    "btn-category": type === "category",
    "btn-primary": type === "primary",
  };
  return (
    <Tag
      onClick={onClick}
      type={htmlType ?? "button"}
      className={classnames("btn", className, btnClass)}
      {...attributes}
    >
      {loading && <IconLoading/>}
      {children}
    </Tag>
  );
}

export default Button;
