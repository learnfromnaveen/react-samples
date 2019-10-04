import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Users from "./Users";

function Routing() {
  return (
    <switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
    </switch>
  );
}

export default Routing;
