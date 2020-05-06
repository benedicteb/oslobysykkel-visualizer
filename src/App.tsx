import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchAvailability, fetchStations } from "./services/oslobysykkel";

function App() {
  useEffect(() => {
    const method = async () => {
      const stationList = await fetchAvailability();

      console.log(stationList);
    };

    method();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
