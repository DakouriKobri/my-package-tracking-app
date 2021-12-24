import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

export default function Map({ parcel }) {
  const {
    location_coordinate_latitude: lat,
    location_coordinate_longitude: lng,
    location_name: location,
  } = parcel;

  return (
    <div className="map">
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={{ lat, lng }}
        defaultZoom={16}
      >
        <MapMarker lat={lat} lng={lng} location={location} />
      </GoogleMapReact>
    </div>
  );
}
