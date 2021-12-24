import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function MapMarker({ lat, lng, location }) {
  return (
    <Link
      to={`http://maps.google.com/maps?z=15&t=m&q=loc:${lat}+${lng}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="map-marker">
        <FaMapMarkerAlt />
        <div className="location-name">{location}</div>
      </div>
    </Link>
  );
}
