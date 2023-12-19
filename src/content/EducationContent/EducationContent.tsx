import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
`;

const SubHeading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.texts.secondary};
  margin: 0;
  padding: 0;
`;

const PText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ theme }) => theme.texts.paragraph};
  margin: 0;
  padding: 0;
`;

const PTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
  color: ${({ theme }) => theme.texts.paragraph};
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0;
`;

function EducationContent() {
  return (
    <div className="education-content">
      <div className="container row1">
        {/* <div>Yale University</div> */}
        <Heading>Yale University</Heading>
        <Heading>New Haven, CT</Heading>
      </div>
      <div className="container row2">
        <SubHeading>B.S. in Computer Science | GPA: 3.67/4.0</SubHeading>
        <SubHeading>Winter 2023</SubHeading>
      </div>
      <div className="coursework-section">
        <PTitle>Relavent Coursework</PTitle>
        <div className="courses-container">
          <span className="course">
            <PText>Data Structures</PText>
          </span>
          <span className="course">
            <PText>Systems Programming</PText>
          </span>
        </div>
      </div>

      <div className="activities-section">
        <PTitle>Activities</PTitle>
        <div className="activities-container">
          <div className="activity">
            <PText>Yale Men's Varsity Fencing Team</PText>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationContent;
