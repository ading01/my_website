import React, { useState } from "react";
import ResumeCard from "../components/ResumeCard/ResumeCard";
import EducationContent from "../content/EducationContent/EducationContent";
import SkillsContent from "../content/SkillsContent";
import ExperienceContent from "../content/ExperienceContent";
import Ticker from "../components/Ticker/Ticker";
import FadeInSection from "../ui/FadeInSection";
import HomeContent from "../content/HomeContent/HomeContent";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";
import { MenuItem } from "../styles/text";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
interface Word {
  id: number;
  left: string;
  top: string;
}

const SectionContainer = styled.div`
  margin-top: 5rem;
  position: relative;
  min-height: 95vh;
  overflow: hidden;
  display: flex; // Enables flexbox
  justify-content: center; // Centers children horizontally
  align-items: center; // Centers children vertically
  transition: background-color 0.5s ease;
`;

const HeaderContainer = styled.div`
  margin-top: 5rem;
  position: relative;
  min-height: 95vh;
  overflow: hidden;
  display: flex; // Enables flexbox
  justify-content: center; // Centers children horizontally
  align-items: center; // Centers children vertically
  transition: background-color 0.5s ease;

  @media (max-width: 768px) {
    align-items: flex-start; // Aligns children to the start of the container
    top: 10vh;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const HomeContentWrapper = styled.div`
  position: relative; // Needed for z-index to take effect
  z-index: 2; // Higher than the Ticker's z-index, to ensure content is above ticker
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
      <HeaderContainer id="home">
        <HomeContentWrapper>
          <FadeInSection>
            <HomeContent />
          </FadeInSection>
        </HomeContentWrapper>
      </HeaderContainer>
      {/* <FadeInSection>
        <div id="menu" className="section1">
          <div className="full-width">
            <nav>
              <ul>
                <a href="#experience">
                  <MenuItem mode={theme}>Experience</MenuItem>
                </a>
                <StyledLink href="#education">
                  <MenuItem mode={theme}>Education</MenuItem>
                </StyledLink>
                <StyledLink to="#skills">
                  <MenuItem mode={theme}>Skills</MenuItem>
                </StyledLink>
              </ul>
            </nav>
          </div>
        </div>
      </FadeInSection> */}
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
