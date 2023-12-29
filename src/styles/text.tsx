import styled from "styled-components";

export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.texts.primary};
  margin: 0;
  transition: color 0.5s ease;
  padding: 0;

  @media (max-width: 768px) {
    display: block; // Or you can remove this line as h1 is block by default
  }
`;

export const SubHeading = styled.h2<{ mode: "light" | "dark" }>`
  font-size: 1rem;
  color: ${({ theme }) => theme.texts.secondary};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin: 0;
  padding: 0;
  transition: color 0.5s ease;

  @media (max-width: 768px) {
    display: block; // Or you can remove this line as h2 is block by default
  }
`;

export const PText = styled.p<{ mode: "light" | "dark" }>`
  font-size: 1rem;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.texts.primary};
  transition: color 0.5s ease;
`;

export const PTitle = styled.p<{ mode: "light" | "dark" }>`
  font-size: 1rem;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0;
  color: ${({ theme }) => theme.texts.primary};
  transition: color 0.5s ease;
`;

// export const MenuItem = styled.li<{ mode: "light" | "dark" }>`
//   font-family: ${({ theme }) => theme.fonts.heading};
//   color: ${({ theme }) => theme.texts.primary};
//   transition: background-color 0.3s ease, color 0.3s ease;

//   &:hover {
//     // Define hover state styles
//     background-color: ${({ theme }) => theme.hover_color};
//   }
// `;

export const MenuItem = styled.li<{ mode: "light" | "dark" }>`
  font-size: 6rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  position: relative; // Essential for absolute positioning of pseudo-elements
  list-style: none; // Removing default list style
  cursor: pointer;
  overflow: hidden; // Keeps pseudo-element within the bounds of the li

  a {
    color: ${({ theme }) => theme.texts.primary};
    text-decoration: none;
  }

  // Before pseudo-element for the fill effect
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0; // Start with no width
    height: 100%;
    background-color: ${({ theme }) =>
      theme.hover_color}; // Choose your fill color

    transition: width 0.3s ease; // Animate the width
    z-index: -1;
  }

  &:hover::before {
    width: 100%; // Full width on hover
  }

  // Adjust text color or other properties as needed
  color: ${({ theme }) => theme.texts.primary};
`;
