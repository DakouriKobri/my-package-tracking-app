import Status from "./Status";

export default function ParcelInfo({ parcel }) {
  const { eta, last_updated, notes, parcel_id, status } = parcel;

  return (
    <div className="medium">
      <p className="x-small">
        <strong>Parcel ID - {parcel_id}</strong>
      </p>
      <p className="x-small">
        <strong>Pick up from: </strong>
        {new Date(`${eta}`).toUTCString()}
      </p>
      <Status status={status} />
      {notes && (
        <p className="x-small">
          <strong>Note:</strong> {notes}
        </p>
      )}
      <p>
        <strong>Last updated:</strong>
        {new Date(`${last_updated}`).toUTCString()}
      </p>
    </div>
  );
}
