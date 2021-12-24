// NPM package
import { useState } from "react";

// Local files
import ListItem from "./ListItem";
import ListItemModal from "../components/ListItemModal";
import { useFetch } from "../hooks/useFetch";
import Modal from "./Modal";

export default function List() {
  const URL = `https://my.api.mockaroo.com/insta-orders.json?key=e49e6840`;
  const { data: packages, isPending, error } = useFetch(URL);
  const [modal, setModal] = useState(null);

  const packageList =
    packages &&
    packages.map((parcel) => (
      <ListItem
        key={parcel.parcel_id}
        parcel={parcel}
        onClick={() => onItem(parcel)}
      />
    ));

  function onItem(parcel) {
    setModal(<ListItemModal parcel={parcel} />);
  }

  return (
    <ul className="list">
      {isPending && <p className="loading-message">Loading packages...</p>}
      {error && <p className="error-message">{error}</p>}
      {packageList}
      <Modal state={[modal, setModal]} />
    </ul>
  );
}
