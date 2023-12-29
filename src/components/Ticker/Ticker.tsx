import React from "react";
import styled, { keyframes } from "styled-components";

const scrollAnimation = keyframes`
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const TickerContainer = styled.div`
  position: absolute;
  white-space: nowrap;
  width: 99%; // Adjust as needed
  background-color: ${({ theme }) => theme.backgroundColor};
  transition: background-color 0.5s ease;
  overflow: hidden;
  top: 70px;
  @media (max-width: 768px) {
    top: 300px;
  }
`;

// Create a styled text component with the animation
const TickerText = styled.div`
  display: inline-block;
  font-size: 100vh;
  font-family: "Lora";
  color: ${({ theme }) => theme.texts.secondary};
  transition: color 0.5s ease;
  animation: ${scrollAnimation} 30s linear infinite;
  z-index: 1;
  overflow: auto;
  @media (max-width: 768px) {
    font-size: 60vh;
    animation: ${scrollAnimation} 10s linear infinite;
  }
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
