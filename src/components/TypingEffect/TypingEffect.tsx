import React, { useState, useEffect } from "react";
import { StyledBody, StyledH1, CaretSpan, CaretAnimation } from "./styles";

const Typewriter = () => {
  const dataText = [
    "Full-stack development.",
    "Web Development.",
    "Game Development.",
  ];
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const typeWriter = (text: string, i: number, deleting: boolean) => {
    if (!deleting) {
      // Typing logic
      if (i < text.length) {
        setText(text.substring(0, i + 1));
        setTimeout(() => typeWriter(text, i + 1, deleting), 100);
      } else {
        // Start deleting after a pause
        setTimeout(() => setDeleting(true), 700);
      }
    } else {
      // Deleting logic
      if (i > 0) {
        setText(text.substring(0, i - 1));
        setTimeout(() => typeWriter(text, i - 1, deleting), 100);
      } else {
        // Start typing next text after deleting
        setDeleting(false);
        setCount((count + 1) % dataText.length);
      }
    }
  };

  useEffect(() => {
    typeWriter(dataText[count], deleting ? text.length : 0, deleting);
  }, [count, deleting]);

  return (
    <StyledBody>
      <CaretAnimation>
        <StyledH1>
          {text}
          <CaretSpan aria-hidden="true"></CaretSpan>
        </StyledH1>
      </CaretAnimation>
    </StyledBody>
  );
};

export default Typewriter;
