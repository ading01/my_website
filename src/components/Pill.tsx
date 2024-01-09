import React from "react";
import styled from "styled-components";

interface PillProps {
  children: React.ReactNode;
  borderColor: string;
  textColor: string;
}

const PillContainer = styled.span<{ borderColor: string; textColor: string }>`
  display: inline-block;
  padding: 0.5em 1em; // Adjust padding to your liking
  font-size: 0.8rem; // Adjust font-size to your liking
  background-color: transparent; // Transparent background
  color: ${({ textColor }) => textColor}; // Text color passed via props
  border: 2px solid ${({ borderColor }) => borderColor}; // Border color passed via props
  border-radius: 50em; // High value to create pill shape
  margin-right: 0.2em; // Add margin around the pill
  margin-bottom: 0.5em; // Add margin around the pill
  user-select: none; // Prevent the user from selecting the text
  text-align: center;
`;

const PillText = styled.span`
  // Additional text styling if necessary
`;

function Pill({ children, borderColor, textColor }: PillProps) {
  return (
    <PillContainer borderColor={borderColor} textColor={textColor}>
      <PillText>{children}</PillText>
    </PillContainer>
  );
}

export default Pill;
