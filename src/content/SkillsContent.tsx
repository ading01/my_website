import CircularLoadingBar from "../components/CircularBar/CircularLoadingBar";
import styled from "styled-components";
import React from "react";

type SkillsContainerProps = {
  title: String;
  children: React.ReactNode;
};

const TitleHeading = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.texts.primary};
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Creates 4 columns
  gap-x: 20px; // Adjust this value for spacing between items
  gap-y: 10px;
`;

const SkillsContainer: React.FC<SkillsContainerProps> = ({
  title,
  children,
}) => {
  return (
    <div>
      <TitleHeading>{title}</TitleHeading>
      <GridContainer>{children}</GridContainer>
    </div>
  );
};

function SkillsContent() {
  return (
    <SkillsContainer title="Skills">
      <CircularLoadingBar progress={75} skill={"Typescript"} />
      <CircularLoadingBar progress={75} skill={"React"} />
      <CircularLoadingBar progress={75} skill={"React"} />
      <CircularLoadingBar progress={75} skill={"React"} />
      <CircularLoadingBar progress={75} skill={"React"} />
      <CircularLoadingBar progress={75} skill={"React"} />
      <CircularLoadingBar progress={75} skill={"React"} />
      <CircularLoadingBar progress={75} skill={"React"} />
    </SkillsContainer>
  );
}

export default SkillsContent;
