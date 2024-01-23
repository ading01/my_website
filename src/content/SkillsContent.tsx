import React, { ReactElement } from "react";
import styled from "styled-components";
import CircularLoadingBar from "../components/CircularBar/CircularLoadingBar";
import FadeInSection from "../ui/FadeInSection";
import { breakpoints } from "../ui/theme/base/breakpoint";
import { useRef } from "react";

type SkillsContainerProps = {
  title: string;
  children: React.ReactNode;
};

const TitleHeading = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  transition: color 0.5s ease;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.texts.primary};
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SkillsContainer: React.FC<SkillsContainerProps> = ({
  title,
  children,
}) => {
  type AccumulatorType = ReactElement[][];

  const groupedChildren = React.Children.toArray(
    children
  ).reduce<AccumulatorType>((acc, child, index) => {
    const groupIndex = Math.floor(index / 4);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(child as ReactElement);
    return acc;
  }, []);

  return (
    <FadeInSection>
      <TitleHeading>{title}</TitleHeading>
      {groupedChildren.map((group, index) => (
        <FadeInSection key={index}>
          <GridContainer>{group}</GridContainer>
        </FadeInSection>
      ))}
    </FadeInSection>
  );
};

function SkillsContent() {
  return (
    <ContentDiv>
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
      <SkillsContainer title="Frameworks / Libraries">
        <CircularLoadingBar progress={90} skill={"ReactJS"} color={"#FFA500"} />
        <CircularLoadingBar progress={90} skill={"Node.js"} color={"#FFA500"} />
        <CircularLoadingBar
          progress={90}
          skill={"Express.js"}
          color={"#FFA500"}
        />
        <CircularLoadingBar progress={90} skill={"Flask"} color={"#FFA500"} />
        <CircularLoadingBar progress={70} skill={"Spring"} color={"#FFA500"} />
        <CircularLoadingBar progress={65} skill={"Pytorch"} color={"#FFA500"} />
        {/* Add more CircularLoadingBar components as needed */}
      </SkillsContainer>
      <SkillsContainer title="Technologies">
        <CircularLoadingBar progress={90} skill={"MongoDB"} color={"#00FF00"} />
        <CircularLoadingBar progress={95} skill={"Git"} color={"#00FF00"} />
        <CircularLoadingBar
          progress={95}
          skill={"REST API"}
          color={"#00FF00"}
        />
        <CircularLoadingBar progress={75} skill={"Lambda"} color={"#00FF00"} />
        <CircularLoadingBar progress={75} skill={"AWS S3"} color={"#00FF00"} />
        <CircularLoadingBar progress={50} skill={"Docker"} color={"#00FF00"} />
        {/* Add more CircularLoadingBar components as needed */}
      </SkillsContainer>
    </ContentDiv>
  );
}

export default SkillsContent;
