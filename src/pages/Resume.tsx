import React, { useState } from "react";
import "./Resume.css";

interface Word {
  id: number;
  left: string;
  top: string;
}

function Resume() {
  const [words, setWords] = useState<Word[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newWord: Word = {
      id: Date.now(),
      left: `${e.clientX - rect.left}px`,
      top: "0px",
    };
    setWords([...words, newWord]);
    animateWord(newWord.id);
  };

  const animateWord = (wordId: number) => {
    setTimeout(() => {
      const wordElement = document.getElementById(
        `word-${wordId}`
      ) as HTMLElement | null;
      if (!wordElement) return;

      let posY = 0;
      let velocity = 0;
      const gravity = 0.75;
      let bounce = -0.6;
      const section = document.getElementById("home") as HTMLElement | null;
      if (!section) return;

      const bottom = section.offsetHeight - wordElement.offsetHeight;

      const frame = () => {
        velocity += gravity;
        posY += velocity;

        if (posY > bottom) {
          posY = bottom;
          velocity *= bounce;
        }

        wordElement.style.top = posY + "px";

        if (posY !== bottom || Math.abs(velocity) > 0.5) {
          requestAnimationFrame(frame);
        }
      };

      requestAnimationFrame(frame);
    }, 0);

    setTimeout(() => {
      const wordElement = document.getElementById(
        `word-${wordId}`
      ) as HTMLElement | null;
      if (wordElement) {
        wordElement.classList.add("fade-out");
      }
    }, 5000); // 10000 milliseconds = 10 seconds

    const removeWordAfterFadeOut = (wordId: number) => {
      setTimeout(() => {
        setWords(words.filter((word) => word.id !== wordId));
      }, 2000);
    };
  };

  return (
    <div id="resume" className="resume">
      <div id="home" className="section1" onClick={handleClick}>
        Home
        {words.map((word) => (
          <div
            key={word.id}
            id={`word-${word.id}`}
            className="word"
            style={{ left: word.left, top: word.top }}
          >
            Hello
          </div>
        ))}
      </div>
      <div id="education" className="section1">
        Education
      </div>
      <div id="skills" className="section1">
        Skills
      </div>
    </div>
  );
}

export default Resume;
