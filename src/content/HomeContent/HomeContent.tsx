import "./HomeContent.css";
import { useTheme } from "../../contexts/ThemeContext";

import CircularImage from "../../components/CircularImage";
import { Heading, SubHeading, PText, PTitle } from "../../styles/text";
import styled from "styled-components";

// const Heading = styled.h1`
//   font-family: ${({ theme }) => theme.fonts.heading};
//   color: ${({ theme }) => theme.texts.dark.primary};
//   font-size: 1.5rem;
//   margin: 0;
//   padding: 0;
// `;

function HomeContent() {
  const { theme } = useTheme();
  return (
    <div className="home-container">
      <div className="left-column">
        <Heading mode={theme}>Hi, my name is Allan</Heading>
        Hey! My name is Allan. Welcome to my website.
      </div>
      <div className="right-column">
        <CircularImage
          src="../profile_picture.jpeg"
          alt="Sample Image"
          borderColor="green"
          borderWidth={10}
        ></CircularImage>
      </div>
    </div>
  );
}

export default HomeContent;
