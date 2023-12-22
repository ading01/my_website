import { Heading, SubHeading, PText, PTitle } from "../../styles/text";
import FadeInSection from "../../ui/FadeInSection";

function EducationContent() {
  return (
    <div className="education-content">
      <FadeInSection>
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
      </FadeInSection>
    </div>
  );
}

export default EducationContent;
