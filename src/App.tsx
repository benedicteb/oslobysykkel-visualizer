import React from "react";
import IndexPage from "./pages/IndexPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllStationsPage from "./pages/AllStationsPage";

const App = () => (
  <Router>
    <Switch>
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
