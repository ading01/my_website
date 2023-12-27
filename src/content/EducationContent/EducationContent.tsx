import { useTheme } from "../../contexts/ThemeContext";
import Pill from "../../components/Pill";
import { Heading, SubHeading, PText, PTitle } from "../../styles/text";
import FadeInSection from "../../ui/FadeInSection";

const relevant_courses: string[] = [
  "Data Structures",
  "Systems Programming",
  "Algorithms",
  "Object-Oriented Programming",
  "Software Engineering",
  "Human-Computer Interaction",
  "Full Stack Web Programming",
  "Computer Organization",
];

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
            {relevant_courses.map((course, index) => (
              <Pill key={index} borderColor="blue" textColor="blue">
                {course}
              </Pill>
            ))}
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
