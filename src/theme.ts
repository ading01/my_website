import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  backgroundColor: "white",
  fonts: {
    body: "Lora",
    heading: "Lora",
    monospace: "'Courier New', monospace",
  },
  texts: {
    primary: "#000000",
    secondary: "#6b6b6b",
    paragraph: "#000000",
  },
  hover_color: "#007bff",
  iconSize: "2rem",
  toggleButton: {
    background: "#F8F8F8",
    text: "#333",
    border: "#4D4D4D",
    hoverBackground: "#E0E0E0",
    activeShadow: "#BDBDBD",
  },

  // You can add other theme properties like colors, fontSizes, etc.
};

const darkTheme: DefaultTheme = {
  backgroundColor: "black",
  fonts: {
    body: "Lora",
    heading: "Lora",
    monospace: "'Courier New', monospace",
  },
  texts: {
    primary: "white",
    secondary: "grey",
    paragraph: "#ffffff",
  },
  hover_color: "magenta",
  iconSize: "2rem",
  toggleButton: {
    background: "#333",
    text: "#F8F8F8",
    border: "#AAA",
    hoverBackground: "#555",
    activeShadow: "#999",
  },
  // You can add other theme properties like colors, fontSizes, etc.
};

export { lightTheme, darkTheme };
