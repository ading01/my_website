import React from "react";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";

interface HoverIconProps {
  icon: React.ReactElement;
  hoverColor: string;
  as?: keyof JSX.IntrinsicElements; // This allows specifying which HTML tag to use.
}

const StyledIconWrapper = styled.span<{
  hoverColor: string;
}>`
  // Changed to span for default inline behavior.
  & svg {
    fill: ${({ theme }) => theme.texts.primary || "white"}; // Initial color
    transition: fill 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease; // Transitions
    box-shadow: none; // No shadow initially
  }

  &:hover svg {
    fill: ${({ hoverColor }) => hoverColor}; // Change fill color on hover
    transform: translateY(-5px); // Move icon upwards on hover
  }
`;

function HoverIcon({ icon, hoverColor, as = "span" }: HoverIconProps) {
  //   console.log("theme", theme);
  // Apply the `as` prop to StyledIconWrapper to change the HTML tag dynamically.
  return (
    <StyledIconWrapper as={as} hoverColor={hoverColor}>
      {icon}
    </StyledIconWrapper>
  );
}

export default HoverIcon;
