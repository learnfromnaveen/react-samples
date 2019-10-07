import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./Users";
import Posts from "./Posts";
import User from "./user";

function Routing() {
  return (
    <Switch>
      <Route path="/" component={Users} exact />
      <Route path="/users"  component={Users} />
      <Route path="/posts" component={Posts}/>
      <Route path="/user" component={User}/>
    </Switch>
  );
}

export default Routing;
