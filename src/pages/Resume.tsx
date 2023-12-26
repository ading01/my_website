import React, { useState } from "react";
import "./Resume.css";
import ResumeCard from "../components/ResumeCard/ResumeCard";
import EducationContent from "../content/EducationContent/EducationContent";
import SkillsContent from "../content/SkillsContent";
import ExperienceContent from "../content/ExperienceContent";
import Ticker from "../components/Ticker/Ticker";
import FadeInSection from "../ui/FadeInSection";
import HomeContent from "../content/HomeContent/HomeContent";
import ThemeToggleButton from "../components/ThemeToggleButton/ThemeToggleButton";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";
import { MenuItem } from "../styles/text";

interface Word {
  id: number;
  left: string;
  top: string;
}

// export const MenuItem = styled.li<{ mode: "light" | "dark" }>`
//   width: 100%;
//   display: inline-block;
//   text-align: left;
//   color: ${({ theme }) => theme.texts.primary};
//   background: ${({ theme }) => theme.background};
//   background-size: 200%;
//   transition: 0.2s ease-out;

//   margin: 0;
//   padding: 0;
//   transition: background-color 0.3s ease, color 0.3s ease,
//     border-color 0.3s ease;
// `;

// const MenuItem = styled.li`
//   color: ${({ theme }) => theme.texts.primary};

//   &:hover {
//     background-position: ${({ theme }) => theme.menuItemHoverBackground};
//   }

//   a {
//     color: ${({ theme }) => theme.menuItemTextColor};
//     text-decoration: none;
//   }
// `;

function Resume() {
  const [words, setWords] = useState<Word[]>([]);
  const { theme } = useTheme();

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
      const wordElement = document.getElementById(`word-${wordId}`);
      if (wordElement) {
        wordElement.classList.add("fade-out");
      }
      removeWordAfterFadeOut(wordId);
    }, 10000); // 10 seconds

    const removeWordAfterFadeOut = (wordId: number) => {
      setTimeout(() => {
        setWords(words.filter((word) => word.id !== wordId));
      }, 2000);
    };
  };

  return (
    <div id="resume" className="resume">
      <Ticker repeatText="Hello, my name is Allan." />
      <div id="home" className="section1">
        <FadeInSection>
          <HomeContent />
        </FadeInSection>
      </div>
      <FadeInSection>
        <div id="menu" className="section1">
          <div className="full-width">
            <nav>
              <ul>
                <MenuItem mode={theme}>
                  <a href="#experience">Experience</a>
                </MenuItem>

                <MenuItem mode={theme}>
                  <a href="#education">Education</a>
                </MenuItem>

                <MenuItem mode={theme}>
                  <a href="#skills">Skills</a>
                </MenuItem>
              </ul>
            </nav>
          </div>
        </div>
      </FadeInSection>
      <div id="experience" className="section1">
        <ResumeCard
          section_name="Experience"
          resume_content={<ExperienceContent />}
        />
      </div>
      <div id="education" className="section1">
        <ResumeCard
          section_name="Education"
          resume_content={<EducationContent />}
        />
      </div>
      <div id="skills" className="section1">
        <ResumeCard section_name="Skills" resume_content={<SkillsContent />} />
      </div>
    </div>
  );
}

export default Resume;
