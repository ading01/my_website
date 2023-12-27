import React from "react";
// import { ThemeProvider } from "styled-components";
// import theme from "./theme";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "./contexts/ThemeContext";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import styled from "styled-components";
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

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex-grow: 1;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppLayout>
        <Router>
          <Navbar />
          <Content>
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Content>
        </Router>
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;
