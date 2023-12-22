import React from "react";
import "./ResumeCard.css";
import styled from "styled-components";
import FadeInSection from "../../ui/FadeInSection";

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
`;

type ResumeCardProps = {
  section_name: string;
  resume_content: JSX.Element;
};

function ResumeCard({ section_name, resume_content }: ResumeCardProps) {
  return (
    <div className="resume-card">
      <div className="row">
        <div className="column left">
          <FadeInSection>
            <Heading>{section_name}</Heading>
          </FadeInSection>
        </div>
        <div className="column right">{resume_content}</div>
      </div>
    </div>
  );
}

export default ResumeCard;
