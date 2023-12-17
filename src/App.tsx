import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar"; // Adjust the import path based on your file structure

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/" component={Home} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
