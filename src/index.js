import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from "./components/App/App";

ReactDOM.render(
  // <Switch>
  //   <Route path="/about">
  //     <About />
  //   </Route>
  //   <Route path="/topics">
  //     <Topics />
  //   </Route>
  //   <Route path="/">
  //     <Home />
  //   </Route>
  // </Switch>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
