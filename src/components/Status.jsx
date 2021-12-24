export default function Status({ status }) {
  let parcelStatus;

  if (status === "delivered") {
    parcelStatus = "Delivered";
  } else if (status === "on-the-way") {
    parcelStatus = "One the way";
  } else if (status === "order-info-received") {
    parcelStatus = "Order info received";
  } else if (status === "ready-for-pickup") {
    parcelStatus = "Ready for pickup";
  }

  return (
    <p className="x-small">
      <strong>Status: </strong>
      {parcelStatus}
    </p>
  );
}
