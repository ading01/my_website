import React from "react";
// import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Resume from "./pages/Resume";

import "./App.css";
import Navbar from "./components/Navbar"; // Adjust the import path based on your file structure

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Resume></Resume>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
