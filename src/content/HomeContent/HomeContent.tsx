import "./HomeContent.css";
import { useTheme } from "../../contexts/ThemeContext";
import { FaGithub } from "react-icons/fa";
import HoverIcon from "../../components/HoverIcon";

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

const IconContainer = styled.div`
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: none;

  &:hover {
    transform: translateY(-5px); // Moves the container up
  }
`;

const TitleHeading = styled(Heading)`
  font-size: 3rem;
`;

function HomeContent() {
  const { theme } = useTheme();
  return (
    <div className="home-container">
      <div className="left-column">
        <TitleHeading mode={theme}>Hi! My name is Allan.</TitleHeading>
        <TitleHeading mode={theme}>Welcome to my website</TitleHeading>
        {/* <FaGithub style={{ color: "red" }} /> */}
        {/* <HoverIcon icon={<FaGithub />} hoverColor="#ff6347" /> */}
        <HoverIcon
          icon={
            <IconContainer>
              <FaGithub />
            </IconContainer>
          }
          hoverColor="#ff6347"
        />
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
