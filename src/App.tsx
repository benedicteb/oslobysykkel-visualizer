import React from "react";
import IndexPage from "./pages/IndexPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllStationsPage from "./pages/AllStationsPage";
import StationPage from "./pages/StationPage";
import MapPage from "./pages/MapPage";

const App = () => (
  <Router>
    <Switch>
      <Route path={"/station/:stationId"}>
        <StationPage />
      </Route>
      <Route path={"/all-stations"}>
        <AllStationsPage />
      </Route>
      <Route path={"/station-map"}>
        <MapPage />
      </Route>
      <Route path={"/"}>
        <IndexPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
