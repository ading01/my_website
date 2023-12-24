import React from "react";
import styled from "styled-components";

interface HoverIconProps {
  icon: React.ReactElement;
  hoverColor: string;
}

const StyledIconWrapper = styled.div<{ hoverColor: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  & svg {
    fill: currentColor; // Initial color
    transition: fill 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease; // Transitions
    box-shadow: none; // No shadow initially
  }

  &:hover svg {
    fill: ${({ hoverColor }) => hoverColor}; // Change fill color on hover
    transform: translateY(-5px); // Move icon upwards on hover
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); // Shadow below icon on hover
  }
`;

// &:hover {
//     //     svg {
//     //       fill: ${({ hoverColor }) => hoverColor};
//     //     }
//     //   }

// const StyledIconWrapper = styled.div<{ hoverColor: string }>`
//   // Styles for the wrapper

// `;

function HoverIcon({ icon, hoverColor }: HoverIconProps) {
  return <StyledIconWrapper hoverColor={hoverColor}>{icon}</StyledIconWrapper>;
}

export default HoverIcon;
