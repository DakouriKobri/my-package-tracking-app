// NPM package
import { useState } from "react";

// Local files
import ButtonToggle from "../components/ButtonToggle";
import List from "../components/List";
import WelcomeView from "../components/WelcomeView";

export default function Home() {
  const [listDisplayed, setListDisplayed] = useState(false);

  return (
    <div className="home">
      <div className="container">
        <ButtonToggle
          status={listDisplayed}
          onClick={() => setListDisplayed(!listDisplayed)}
        />
        {listDisplayed && <List />}
        {!listDisplayed && <WelcomeView />}
      </div>
    </div>
  );
}
