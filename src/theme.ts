import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  backgroundColor: "beige",
  fonts: {
    body: "Cambria, serif",
    heading: "Cambria, serif",
    monospace: "'Courier New', monospace",
  },
  texts: {
    primary: "#000000",
    secondary: "#6b6b6b",
    paragraph: "#000000",
  },
  // You can add other theme properties like colors, fontSizes, etc.
};

const darkTheme: DefaultTheme = {
  backgroundColor: "black",
  fonts: {
    body: "Cambria, serif",
    heading: "Cambria, serif",
    monospace: "'Courier New', monospace",
  },
  texts: {
    primary: "white",
    secondary: "white",
    paragraph: "#ffffff",
  },
  // You can add other theme properties like colors, fontSizes, etc.
};

export { lightTheme, darkTheme };
