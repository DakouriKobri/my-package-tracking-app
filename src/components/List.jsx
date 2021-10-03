// Local file
import ListItem from "./ListItem";
import ListItemModal from "../components/ListItemModal";

export default function List({ items, setModal }) {
  // Components
  const Items = items.map((item) => (
    <ListItem key={item.id} item={item} onClick={() => onItem(item)} />
  ));

  // Methods
  function onItem(item) {
    setModal(<ListItemModal item={item} />);
  }

  return (
    <ul className="list">
      {/* don't add logic inside JSX, this can be done outside as a component */}
      {/* refactored for reference */}
      {Items}
    </ul>
  );
}
