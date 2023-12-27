import React from "react";
// import { ThemeProvider } from "styled-components";
// import theme from "./theme";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "./contexts/ThemeContext";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { SpeedInsights } from "@vercel/speed-insights/react";

// import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Resume from "./pages/Resume";

import Navbar from "./components/Navbar"; // Adjust the import path based on your file structure

const App: React.FC = () => {
  return (
    <div className="App">
      <SpeedInsights />
      <ThemeProvider>
        <GlobalStyle />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Resume></Resume>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
