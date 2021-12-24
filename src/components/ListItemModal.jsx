// Project Files
import Map from "./map/Map";
import ParcelInfo from "./ParcelInfo";
import Recipient from "./Recipient";

export default function ListItemModal({ parcel }) {
  const { sender, location_name } = parcel;

  return (
    <div className="list-item-modal">
      <div className="list-item-modal__container">
        <p className="sender">{sender}</p>
        <Recipient parcel={parcel} />
        <ParcelInfo parcel={parcel} />
        <p>
          <strong>Pickup location:</strong> {location_name}
        </p>
        <Map parcel={parcel} />
      </div>
    </div>
  );
}
