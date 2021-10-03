// this component is too long (50+ lines) having a vertical list of kets in the const item is a sign that you did not need all or need to refactor
export default function ListItemModal({ item }) {
  const {
    parcel_id,
    sender,
    status,
    last_updated,
    eta,
    user_name,
    user_phone,
    verification_required,
    location_id,
    location_name,
    location_coordinate_longitude,
    location_coordinate_latitude,
    location_status_ok,
    notes,
  } = item; // why import everything if is not relevant for theend user.

  return (
    <div className="list-item-modal__container">
      <div className="list-item-modal">
        <h3 className="item__parcel__id">{parcel_id} </h3>
        <p>
          {/* why the span, if there is no attempt to make it look visually distinct using CSS? */}
          <span>to: </span> {user_name}
        </p>
        <p>
          <span>Phone number: </span> {user_phone}
        </p>
        <p>
          <span>From:</span> {sender}
        </p>
        <p>{status}</p>
        {/* cool use of ternary operator to show different messages */}
        <p>{verification_required ? "ID required" : "No ID required"}</p>
        <p>
          <span>ETA:</span> {new Date(`${eta}`).toUTCString()}
        </p>
        <p>
          <span>Note:</span> {notes}
        </p>
        <p>
          <span>Last updated:</span> {new Date(`${last_updated}`).toUTCString()}
        </p>
        <p>
          <span>Location:</span> {location_name}
        </p>
        <p>
          <span>Location ID:</span> {location_id}
        </p>
        <p>{location_coordinate_latitude}</p>
        <p>{location_coordinate_longitude}</p>
        <p>{location_status_ok}</p>
      </div>
    </div>
  );
}
