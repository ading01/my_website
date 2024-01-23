import { FaGithub } from "react-icons/fa";
import HoverIcon from "../../components/HoverIcon";
import { FaRegFilePdf } from "react-icons/fa";
import CircularImage from "../../components/CircularImage";
import { Heading, SubHeading, PText, PTitle } from "../../styles/text";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import Typewriter from "../../components/TypingEffect/TypingEffect";
import OneTimeTypewriter from "../../components/TypingEffect/OneTimeText";
import CombinedTypewriter from "../../components/TypingEffect/Typewritter";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: aqua; */
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }
`;

const TitleHeading = styled(Heading)`
  font-size: 3rem;
  font-family: "${({ theme }) => theme.fonts.heading}";
  color: ${({ theme }) => theme.texts.primary};
  margin: 0;
  transition: color 0.5s ease;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding-bottom: 1rem;
  }
`;

const LeftColumn = styled.div`
  flex: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end; // Align items to the right
  justify-content: center;
  padding-right: 10px; // Add padding to ensure there is space between text and the column's edge

  @media (max-width: 768px) {
    align-items: center; // Center items on smaller screens
    text-align: center;
    padding-right: 0; // Remove the right padding on smaller screens
  }
`;

const IconContainer = styled.div`
  padding-top: 0.5rem;
  flex-direction: row;
`;

const RightColumn = styled.div`
  flex: 20%;
  align-items: center;
  justify-content: center;
  text-align: flex-start;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

// const NameHeading = styled.h1`
//   font-size: 6rem;
//   font-family: Rampart One;
//   padding: 0;
//   margin: 1rem;
//   color: ${({ theme }) => theme.texts.primary};
// `;

const NameHeading = styled.h1`
  font-size: 8rem;
  font-family: Marope;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.texts.primary};
  @media (max-width: 1024px) {
    font-size: 6rem;
  }
`;

const CharSpan = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;
  color: ${({ theme }) => theme.texts.primary};

  &:hover {
    transform: translateY(-10px);
  }
`;

type HoverEffectHeadingProps = {
  text: string;
};

const HoverEffectHeading: React.FC<HoverEffectHeadingProps> = ({ text }) => {
  const chars = text
    .split("")
    .map((char, index) => <CharSpan key={index}>{char}</CharSpan>);

  return <NameHeading>{chars}</NameHeading>;
};

const NameContainer = styled.div`
  flex-direction: row;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const TypingContainer = styled.div`
  width: 70%;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: left;
  display: flex-start;
  align-items: flex-start;
`;

function HomeContent() {
  return (
    <HomeContainer>
      <LeftColumn>
        <NameContainer>
          <HoverEffectHeading text="Allan" />
          <HoverEffectHeading text="Ding" />
        </NameContainer>
        {/* <OneTimeTypewriter textToType="Hey! Welcome to my website. I do" />
        <Typewriter></Typewriter> */}
        {/* <TypingContainer>
          {" "}
          <CombinedTypewriter
            initialText="I do "
            alternatingWords={[
              "Web Development",
              "Full-Stack Development",
              "Softare Engineering",
              "Game Development",
            ]}
          />
        </TypingContainer> */}

        <IconContainer>
          <a href="https://github.com/ading01">
            <HoverIcon as="span" icon={<FaGithub />} hoverColor="#ff6347" />
          </a>
          <a href="https://www.linkedin.com/in/allan-ding-0b15431b9/">
            <HoverIcon as="span" icon={<FaLinkedin />} hoverColor="#0072b1" />
          </a>
          <a href="../../Allan Ding Resume.pdf">
            <HoverIcon as="span" icon={<FaRegFilePdf />} hoverColor="#00b144" />
          </a>
        </IconContainer>
      </LeftColumn>
      <RightColumn>
        <CircularImage
          src="../profile_picture.jpeg"
          alt="Sample Image"
          borderColor="green"
          borderWidth={0}
        ></CircularImage>
      </RightColumn>
    </HomeContainer>
  );
}

export default HomeContent;
