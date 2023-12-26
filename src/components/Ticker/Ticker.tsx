import React from "react";
import styled, { keyframes } from "styled-components";

const scrollAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const TickerContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%; // Adjust as needed
  background-color: ${({ theme }) => theme.backgroundColor};
  transition: background-color 0.5s ease;
`;

// Create a styled text component with the animation
const TickerText = styled.div`
  display: inline-block;
  font-size: 25vh;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.texts.primary};
  transition: color 0.5s ease;
  animation: ${scrollAnimation} 30s linear infinite;
`;

type TickerProps = {
  repeatText: string;
};

const Ticker: React.FC<TickerProps> = ({ repeatText }) => {
  // Create a long string by repeating the text
  // const repeatedText = Array(50).fill(repeatText).join("");

  return (
    <TickerContainer>
      <TickerText>{repeatText}</TickerText>
    </TickerContainer>
  );
};

export default Ticker;
