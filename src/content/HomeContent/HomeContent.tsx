import { FaGithub } from "react-icons/fa";
import HoverIcon from "../../components/HoverIcon";
import { FaRegFilePdf } from "react-icons/fa";
import CircularImage from "../../components/CircularImage";
import { Heading, SubHeading, PText, PTitle } from "../../styles/text";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: aqua; */
  max-width: 1000px;
  margin: 0 auto;
  align-items: flex-end; // Align items to the right
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

function HomeContent() {
  return (
    <HomeContainer>
      <LeftColumn>
        <TitleHeading>Hi! My name is Allan.</TitleHeading>
        <TitleHeading>Welcome to my website</TitleHeading>
        <IconContainer>
          <a href="https://github.com/ading01">
            <HoverIcon as="span" icon={<FaGithub />} hoverColor="#ff6347" />
          </a>
          <a href="https://www.linkedin.com/in/allan-ding-0b15431b9/">
            <HoverIcon as="span" icon={<FaLinkedin />} hoverColor="#0072b1" />
          </a>
          <a href="../../Allan Ding Resume 12:26:23.pdf">
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
