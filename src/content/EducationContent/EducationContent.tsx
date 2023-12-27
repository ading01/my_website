import { useTheme } from "../../contexts/ThemeContext";

import { Heading, SubHeading, PText, PTitle } from "../../styles/text";
import FadeInSection from "../../ui/FadeInSection";

function EducationContent() {
  const { theme } = useTheme();

  return (
    <div className="education-content">
      <FadeInSection>
        <div className="container row1">
          {/* <div>Yale University</div> */}
          <Heading>Yale University</Heading>
          <Heading>New Haven, CT</Heading>
        </div>
        <div className="container row2">
          <SubHeading mode={theme}>
            B.S. in Computer Science | GPA: 3.67/4.0
          </SubHeading>
          <SubHeading mode={theme}>Winter 2023</SubHeading>
        </div>
        <div className="coursework-section">
          <PTitle mode={theme}>Relevent Coursework</PTitle>
          <div className="courses-container">
            <span className="course">
              <PText mode={theme}>Data Structures</PText>
            </span>
            <span className="course">
              <PText mode={theme}>Systems Programming</PText>
            </span>
          </div>
        </div>

        <div className="activities-section">
          <PTitle mode={theme}>Activities</PTitle>
          <div className="activities-container">
            <div className="activity">
              <PText mode={theme}>Yale Men's Varsity Fencing Team</PText>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default EducationContent;
