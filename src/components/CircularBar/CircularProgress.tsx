import * as React from "react";
import styled, { keyframes } from "styled-components";

// Calculate the circumference of the circle
const radius = 45;
const circumference = 2 * Math.PI * radius;

// Keyframes for the animation
const animateProgress = (props: CircularProgressProps) => keyframes`
  from {
    stroke-dasharray: 0, ${circumference};
  }
  to {
    stroke-dasharray: ${
      (props.progress / 100) * circumference
    }, ${circumference};
  }
`;

// Props for the CircularProgress component
interface CircularProgressProps {
  progress: number;
}

// Styled circular progress bar
const CircularProgress = styled.circle.attrs<CircularProgressProps>(
  (props) => ({
    r: radius,
    cx: 50,
    cy: 50,
  })
)<CircularProgressProps>`
  fill: none;
  stroke: #4f88ef;
  stroke-width: 4;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-dasharray: 0 ${circumference};
  stroke-dashoffset: 0;
  animation: ${(props) => animateProgress(props)} 2s ease-out forwards;
`;

// Styled SVG container
const LoadingContainer = styled.svg`
  width: 100px;
  height: 100px;
`;

// TypeScript React component that takes in the progress as a prop
const CircularLoadingBar: React.FC<CircularProgressProps> = ({ progress }) => {
  return (
    <LoadingContainer viewBox="0 0 100 100">
      <CircularProgress progress={progress} />
    </LoadingContainer>
  );
};

export default CircularLoadingBar;
