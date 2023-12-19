import React from "react";
import "./ResumeCard.css";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25, // Trigger when at least 50% of the component is visible
  });

  return (
    <div className={`resume-card ${inView ? "fade-in" : ""}`} ref={ref}>
      <div className="row">
        <div className="column left">
          <Heading>{section_name}</Heading>
        </div>
        <div className="column right">{resume_content}</div>
      </div>
    </div>
  );
}

export default ResumeCard;
