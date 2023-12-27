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

import { Heading } from "../../styles/text";

type ResumeCardProps = {
  section_name: string;
  resume_content: JSX.Element;
};

function ResumeCard({ section_name, resume_content }: ResumeCardProps) {
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
