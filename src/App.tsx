import React from "react";

import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "./contexts/ThemeContext";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

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
    <ThemeProvider>
      <SpeedInsights />
      <Analytics />
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
