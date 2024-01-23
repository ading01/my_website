import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

// Define the styled components for the typewriter effect
const StyledH1 = styled.h1`
  font-size: 1.5em;
  color: black;
`;

const CaretSpan = styled.span`
  border-right: 0.05em solid;
  animation: caret 1s steps(1) infinite;
`;

const StyledBody = styled.div`
  height: 100%;
  font-family: "tradegothiclt-bold", sans-serif;
`;

// Keyframes for caret animation
const CaretAnimation = styled.div`
  @keyframes caret {
    50% {
      border-color: transparent;
    }
  }
`;

// Define an interface for the component's props
interface TypewriterProps {
  initialText: string;
  alternatingWords: string[];
}

// Combined Typewriter component
const CombinedTypewriter: React.FC<TypewriterProps> = ({
  initialText,
  alternatingWords,
}) => {
  const [baseText, setBaseText] = useState(initialText); // Base text to persist
  const [dynamicText, setDynamicText] = useState(""); // Dynamic text for alternating words
  const [altWordIndex, setAltWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const processTyping = (word: string, idx: number, deleting: boolean) => {
    if (!deleting) {
      // Typing logic
      if (idx < word.length) {
        setDynamicText(word.substring(0, idx + 1));
        setTimeout(() => processTyping(word, idx + 1, deleting), 100);
      } else {
        // Start deleting after a pause
        setTimeout(() => setDeleting(true), 700);
      }
    } else {
      // Deleting logic
      if (idx > 0) {
        setDynamicText(word.substring(0, idx - 1));
        setTimeout(() => processTyping(word, idx - 1, deleting), 100);
      } else {
        // Switch to next word or back to typing
        setDeleting(false);
        setAltWordIndex((altWordIndex + 1) % alternatingWords.length);
      }
    }
  };

  useEffect(() => {
    processTyping(
      alternatingWords[altWordIndex],
      deleting ? dynamicText.length : 0,
      deleting
    );
  }, [altWordIndex, deleting]);

  return (
    <StyledBody>
      <CaretAnimation>
        <StyledH1>
          {baseText}
          {dynamicText}
          <CaretSpan aria-hidden="true"></CaretSpan>
        </StyledH1>
      </CaretAnimation>
    </StyledBody>
  );
};

export default CombinedTypewriter;
