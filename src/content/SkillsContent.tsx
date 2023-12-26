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
    <div>
      <SkillsContainer title="Languages">
        <CircularLoadingBar progress={90} skill={"Python"} color={"#4f88ef"} />
        <CircularLoadingBar
          progress={85}
          skill={"JavaScript"}
          color={"#4f88ef"}
        />
        <CircularLoadingBar progress={75} skill={"C/C++"} color={"#4f88ef"} />
        <CircularLoadingBar
          progress={70}
          skill={"TypeScript"}
          color={"#4f88ef"}
        />
        <CircularLoadingBar
          progress={85}
          skill={"HTML/CSS"}
          color={"#4f88ef"}
        />
        <CircularLoadingBar progress={75} skill={"Java"} color={"#4f88ef"} />
        <CircularLoadingBar progress={75} skill={"R"} color={"#4f88ef"} />
        <CircularLoadingBar progress={75} skill={"SQL"} color={"#4f88ef"} />
      </SkillsContainer>
      <SkillsContainer title="Frameworks">
        <CircularLoadingBar progress={90} skill={"ReactJS"} color={"#FFA500"} />
        <CircularLoadingBar progress={90} skill={"Node.js"} color={"#FFA500"} />
        <CircularLoadingBar
          progress={90}
          skill={"Express.js"}
          color={"#FFA500"}
        />
      </SkillsContainer>
      <SkillsContainer title="Technologies">
        <CircularLoadingBar progress={90} skill={"MongoDB"} color={"#00FF00"} />
        <CircularLoadingBar progress={95} skill={"Git"} color={"#00FF00"} />
        <CircularLoadingBar
          progress={95}
          skill={"REST API"}
          color={"#00FF00"}
        />
        <CircularLoadingBar progress={50} skill={"Docker"} color={"#00FF00"} />
      </SkillsContainer>
    </div>
  );
}

export default SkillsContent;
