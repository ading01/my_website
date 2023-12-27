import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    scroll: smooth;
  }
`;

export default GlobalStyle;
