import React, { useState } from "react";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";

const ToggleButton = styled.div<{ t: "light" | "dark" }>`
  background-color: ${({ t }) => (t === "light" ? "#8ccfff" : "#ff8c69")};
  width: 60px; // Adjust as needed
  height: 30px; // Adjust as needed
  border-radius: 30px;
  display: flex;
  justify-content: space-between; // This will place children at the ends
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: background-color 0.6s;
`;

const Circle = styled.div<{ t: "light" | "dark" }>`
  background-color: #fff;
  width: 30px; // Same as the height to make a perfect circle
  height: 30px;
  border-radius: 50%;
  position: absolute;
  transition: transform 0.6s;
  transform: ${({ t }) =>
    t === "light" ? "translateX(30px)" : "translateX(0px)"};
  // Adjusted translateX to cover the icons correctly
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const Icon = styled.div<{ t: "light" | "dark" }>`
  color: ${({ t }) => (t === "light" ? "#f9d71c" : "#f9d71c")};
  position: absolute;
  top: 60%;
  // Adjust left property to position icons
  left: ${({ t }) => (t === "light" ? "75%" : "25%")};
  transform: translate(-50%, -50%);
  font-size: 20px;
  transition: color 0.6s;
  // Icons need to be behind the circle
  z-index: ${({ t }) => (t === "light" ? 0 : 1)};
`;

const ThemeToggleButton = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} t={theme}>
      <Icon t={theme} style={{ left: theme === "dark" ? "70%" : "30%" }}>
        {theme === "light" ? <FaSun /> : <FaMoon />}
      </Icon>
      <Circle t={theme} />
    </ToggleButton>
  );
};

export default ThemeToggleButton;

// import React from "react";
// import styled from "styled-components";
// import { FaSun, FaMoon } from "react-icons/fa";
// import { useTheme } from "../../contexts/ThemeContext"; // Adjust the import path as needed

// // Styled button component
// const StyledThemeToggleBtn = styled.button<{ t: "light" | "dark" }>`
//   padding: 10px 20px;
//   border: 2px solid ${({ t }) => (t === "dark" ? "#AAA" : "#4D4D4D")};
//   background-color: ${({ t }) => (t === "dark" ? "#333" : "#F8F8F8")};
//   color: ${({ t }) => (t === "dark" ? "#F8F8F8" : "#333")};
//   border-radius: 30px;
//   cursor: pointer;
//   outline: none;
//   font-size: 16px;
//   transition: background-color 0.3s ease, color 0.3s ease;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px; // Space between text and icon

//   &:hover {
//     background-color: ${({ t }) => (t === "dark" ? "#555" : "#E0E0E0")};
//   }

//   &:active {
//     box-shadow: 0 2px ${({ t }) => (t === "dark" ? "#999" : "#BDBDBD")};
//   }

//   .icon {
//     font-size: 20px;
//   }
// `;

// const ThemeToggleButton: React.FC = () => {
//   const { toggleTheme, theme } = useTheme();

//   return (
//     <StyledThemeToggleBtn onClick={toggleTheme} t={theme}>
//       {theme === "dark" ? (
//         <FaSun className="icon" />
//       ) : (
//         <FaMoon className="icon" />
//       )}
//     </StyledThemeToggleBtn>
//   );
// };

// export default ThemeToggleButton;
