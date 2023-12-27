import React, { useState } from "react";
import ResumeCard from "../components/ResumeCard/ResumeCard";
import EducationContent from "../content/EducationContent/EducationContent";
import SkillsContent from "../content/SkillsContent";
import ExperienceContent from "../content/ExperienceContent";
import Ticker from "../components/Ticker/Ticker";
import FadeInSection from "../ui/FadeInSection";
import HomeContent from "../content/HomeContent/HomeContent";
import ThemeToggleButton from "../components/ThemeToggleButton/ThemeToggleButton";
import styled, { keyframes } from "styled-components";
import { useTheme } from "../contexts/ThemeContext";
import { MenuItem } from "../styles/text";

interface Word {
  id: number;
  left: string;
  top: string;
}

const SectionContainer = styled.div`
  position: relative;
  min-height: 95vh;
  overflow: hidden;
  display: flex; // Enables flexbox
  justify-content: center; // Centers children horizontally
  align-items: center; // Centers children vertically
`;

const HomeContentWrapper = styled.div`
  position: relative; // Needed for z-index to take effect
  z-index: 2; // Higher than the Ticker's z-index, to ensure content is above ticker
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledTicker = styled(Ticker)`
  position: absolute;
  bottom: 0; // This positions the ticker at the bottom of SectionContainer
  left: 0; // Aligns the ticker to the left of SectionContainer
  width: 100%; // Ticker spans the full width of SectionContainer
  z-index: 1; // Ensures the ticker is behind the HomeContentWrapper
`;

const scroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const WelcomeText = styled.h1`
  color: ${({ theme }) => theme.texts.secondary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 50vw; // You can adjust this value
  position: absolute;
  white-space: nowrap;
  top: -50%; // Adjust this value as needed to place the text vertically
  left: 0;
  // overflow-x: hidden; // Prevents horizontal scroll inside this container

  width: 100vw;

  // Apply the animation
  animation: ${scroll} 30s linear infinite; // Adjust time as needed
`;
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
      <Ticker repeatText="Welcome" />
      {/* <WelcomeText>Welcome</WelcomeText> */}
      <SectionContainer id="home">
        <HomeContentWrapper>
          <FadeInSection>
            <HomeContent />
          </FadeInSection>
        </HomeContentWrapper>
      </SectionContainer>
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
      <SectionContainer id="experience">
        <ResumeCard
          section_name="Experience"
          resume_content={<ExperienceContent />}
        />
      </SectionContainer>
      <SectionContainer id="education">
        <ResumeCard
          section_name="Education"
          resume_content={<EducationContent />}
        />
      </SectionContainer>

      <SectionContainer id="skills">
        <ResumeCard section_name="Skills" resume_content={<SkillsContent />} />
      </SectionContainer>
    </div>
  );
}

export default Resume;
