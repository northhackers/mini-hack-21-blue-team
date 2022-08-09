import { useState } from "react";
import "./App.css";
import { data } from "./data/data.json";
import OfferCard from "./components/OfferCard";

function App() {
  const [offer, setOffer] = useState(0);

  return (
    <div className="App">
      <header className="App-header">Racetrack Pay Negotiation</header>
      <div className="App-body">
        <p>
          You, as Jockeys, will receive an offer. You must consider the benefits
          on offer as well as the pay when you decide whether to ask for more
          money, less money but better benefits, or to settle.
        </p>

        <OfferCard />
      </div>
    </div>
  );
}

export default App;
