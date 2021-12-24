export default function Recipient({ parcel }) {
  const { user_name, user_phone, verification_required } = parcel;

  return (
    <div className="medium">
      <p className="x-small">
        <strong>to: </strong> {user_name}
      </p>
      <p className="x-small">
        <strong>Tel: </strong> {user_phone}
      </p>
      <p>
        <strong>Personal ID required: </strong>
        {verification_required ? "Yes" : "No"}
      </p>
    </div>
  );
}
