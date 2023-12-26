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

// Extend the Props for the CircularProgress component to include 'skill'
interface CircularProgressProps {
  progress: number;
  skill: string; // Added skill property
}

// Styled circular progress bar (no changes here)
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

// Styled SVG container (no changes here)
const LoadingContainer = styled.svg`
  width: 100px;
  height: 100px;
`;

// Styled text component (no changes here)
const CenterText = styled.text<{ labelColor?: string }>`
  fill: ${(props) => props.labelColor || "#333"};
  font-size: 14px;
  text-anchor: middle;
  dominant-baseline: central;
  font-family: Arial, sans-serif;
`;

// TypeScript React component that takes in the progress and skill as props
const CircularLoadingBar: React.FC<CircularProgressProps> = ({
  progress,
  skill,
}) => {
  return (
    <LoadingContainer viewBox="0 0 100 100">
      <CircularProgress progress={progress} skill={skill} />
      {/* Use skill prop to dynamically display the skill text */}
      <CenterText x="50" y="50" labelColor="#000">
        {skill}
      </CenterText>
    </LoadingContainer>
  );
};

export default CircularLoadingBar;
