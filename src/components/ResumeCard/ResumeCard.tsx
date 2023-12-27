import React from "react";
import "./ResumeCard.css";
import styled from "styled-components";
import FadeInSection from "../../ui/FadeInSection";
import {
  ResumeCardContainer,
  ResumeCardRow,
  LeftColumn,
  RightColumn,
} from "../../styles/divs";
import Resume from "../../pages/Resume";
import { useTheme } from "styled-components";

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.texts.primary};
`;

type ResumeCardProps = {
  section_name: string;
  resume_content: JSX.Element;
};

function ResumeCard({ section_name, resume_content }: ResumeCardProps) {
  const { theme } = useTheme();
  return (
    <ResumeCardContainer>
      <ResumeCardRow>
        <LeftColumn>
          <FadeInSection>
            <Heading>{section_name}</Heading>
          </FadeInSection>
        </LeftColumn>
        <RightColumn>{resume_content}</RightColumn>
      </ResumeCardRow>
    </ResumeCardContainer>
  );
}

export default ResumeCard;
