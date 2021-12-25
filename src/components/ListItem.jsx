import Status from "./Status";

export default function ListItem({ parcel, onClick }) {
  const { parcel_id, sender, status, last_updated } = parcel;
  return (
    <li className="list-item-container">
      <div className="list-item">
        <div className="item-short-info">
          <p>
            <strong>
              {sender} - {parcel_id}
            </strong>
          </p>
          <Status status={status} />
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
