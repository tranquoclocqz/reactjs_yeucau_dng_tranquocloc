import "./Button.css";
export default function Button(props) {
  const { ...attributes } = props;
  let Tag = props.tag ?? "button";
  delete attributes.tag;
  return (
    <Tag
      type={Tag === "button" ? "button" : undefined}
      {...attributes}
    />
  );
}
