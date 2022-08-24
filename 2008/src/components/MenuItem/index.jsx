export default function MenuItem({ menu }) {
  if (menu.length === 0) return null;
  return menu.map((item) => {
    return (
      <li key={`menu_item_${item.id}`}>
        <a href={item.url}>{item.title}</a>
        {item.childItems.length > 0 && (
          <ul>
            <MenuItem menu={item.childItems} />
          </ul>
        )}
      </li>
    );
  });
}
