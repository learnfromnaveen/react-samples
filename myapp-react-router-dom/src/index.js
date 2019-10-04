import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Routing from "./Routing";
// To use routing in react install  below package/module
// npm install --save-dev react-router-dom
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div>
        <Routing />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
