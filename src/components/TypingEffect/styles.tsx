import styled from "styled-components";

// Step 2: Define Styled Components
export const StyledH1 = styled.h1`
  font-size: 1.5em;
  color: "black";
`;

export const CaretSpan = styled.span`
  border-right: 0.05em solid;
  animation: caret 1s steps(1) infinite;
`;

export const StyledBody = styled.div`
  height: 100%;
  font-family: "tradegothiclt-bold", sans-serif;
`;

// Keyframes for caret animation
export const CaretAnimation = styled.div`
  @keyframes caret {
    50% {
      border-color: transparent;
    }
  }
`;
