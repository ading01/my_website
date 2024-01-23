import React, { useState, useEffect } from "react";
import { StyledBody, StyledH1, CaretAnimation } from "./styles";
import styled, { css } from "styled-components";

// Define a type for the props
interface CaretSpanProps {
  blink: boolean;
}

const CaretSpan = styled.span<CaretSpanProps>`
  border-right: 0.05em solid;
  ${({ blink }) =>
    blink
      ? css`
          animation: caret 1s steps(1) infinite;
        `
      : "border-right: none;"}
`;
interface OneTimeTypewriterProps {
  textToType: string;
}
// Component to type text without deleting and remove cursor at the end
const OneTimeTypewriter: React.FC<OneTimeTypewriterProps> = ({
  textToType,
}) => {
  const [text, setText] = useState("");
  const [finished, setFinished] = useState(false);

  const typeOnce = (text: string, i: number) => {
    if (i < text.length) {
      setText(text.substring(0, i + 1));
      setTimeout(() => typeOnce(text, i + 1), 100);
    } else {
      // Stop the caret animation when text is fully typed
      setFinished(true);
    }
  };

  useEffect(() => {
    typeOnce(textToType, 0);
  }, [textToType]);

  return (
    <StyledBody>
      <CaretAnimation>
        <StyledH1>
          {text}
          <CaretSpan aria-hidden="true" blink={!finished}></CaretSpan>
        </StyledH1>
      </CaretAnimation>
    </StyledBody>
  );
};

export default OneTimeTypewriter;
