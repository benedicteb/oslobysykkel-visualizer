import React from "react";
import IndexPage from "./pages/IndexPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route path={"/"}>
        <IndexPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
