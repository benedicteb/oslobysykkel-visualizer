import React from "react";
import IndexPage from "./pages/IndexPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllStationsPage from "./pages/AllStationsPage";
import StationPage from "./pages/StationPage";

const App = () => (
  <Router>
    <Switch>
      <Route path={"/station/:stationId"}>
        <StationPage />
      </Route>
      <Route path={"/all-stations"}>
        <AllStationsPage />
      </Route>
      <Route path={"/"}>
        <IndexPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
