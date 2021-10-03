export default function ListItem({ item, onClick }) {
  const { parcel_id, sender, status, last_updated } = item;
  return (
    // nesting
    // why there is a div inside a li each one with CSS classes attached to it.
    // This make your CSS harder to code -1
    <li className="list-item-container">
      <div className="list-item">
        <div className="item-short-info">
          <h3 className="item__parcel__id">{parcel_id} </h3>
          <p>{sender} </p>
          <p>{status} </p>
          <p>{new Date(`${last_updated}`).toUTCString()} </p>
        </div>
        <button className="button" onClick={onClick}>
          View
        </button>
      </div>
      <hr />
    </li>
  );
}
