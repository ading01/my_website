import React, { useState } from "react";
import "./Resume.css";
import ResumeCard from "../components/ResumeCard/ResumeCard";
import EducationContent from "../content/EducationContent/EducationContent";
import SkillsContent from "../content/SkillsContent";
import ExperienceContent from "../content/ExperienceContent";
import Ticker from "../components/Ticker/Ticker";
import FadeInSection from "../ui/FadeInSection";
import HomeContent from "../content/HomeContent/HomeContent";

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
      <Ticker repeatText="Hello, my name is Allan.    " />
      <div id="home" className="section1">
        <HomeContent />
      </div>
      <FadeInSection>
        <div id="menu" className="section1">
          <div className="full-width">
            <nav>
              <ul>
                <li className="menu-item">
                  <a href="#experience">Experience</a>
                </li>
                <li className="menu-item">
                  <a href="#education">Education</a>
                </li>
                <li className="menu-item">
                  <a href="#skills">Skills</a>
                </li>
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
