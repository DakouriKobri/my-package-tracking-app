// NPM package
import { useState } from "react";

// Local files
import ButtonToggle from "../components/ButtonToggle";
import postman from "../assets/images/postman.jpg";
import List from "../components/List";

// why list screen has a folder if is just a 1 page in the entire app.
// also why is called .js instead of .jsx like the rest?
export default function ListScreen({ items, setModal }) {
  const [listDisplayed, setListDisplayed] = useState(false);

  return (
    <div className="list-screen">
      <ButtonToggle
        status={listDisplayed}
        onClick={() => setListDisplayed(!listDisplayed)}
      />
      {listDisplayed && <List items={items} setModal={setModal} />}
      {!listDisplayed && (
        <div className="welcome-view">
          {/* CSS scoping, you can called this just message and inside CSS you can say .welcome-view .message to access the info */}
          <p className="welcome-view__message">
            Welcome to your package tracker! Click the button above to start
            tracking your orders!
          </p>
          {/* The alt description should describe the illusration. In this case: */}
          {/* A post officer/man with a package in hand */}
          <img src={postman} alt="A parcel being scanned" />
        </div>
      )}
    </div>
  );
}
