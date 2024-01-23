import { useTheme } from "../../contexts/ThemeContext";
import Pill from "../../components/Pill";
import { Heading, SubHeading, PText, PTitle } from "../../styles/text";
import { SplitContainer, MainRow, SubRow } from "../../styles/divs";
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

const activities: string[] = [
  "Yale Men's Varsity Fencing Team",
  "Chinese American Students Association",
];

function EducationContent() {
  const { theme } = useTheme();
  const borderColor = theme === "light" ? "#3895DE" : "#3895DE";

  return (
    <div className="education-content">
      <FadeInSection>
        <SplitContainer>
          <MainRow>
            <Heading>Yale University</Heading>
            <Heading>New Haven, CT</Heading>
          </MainRow>
          <SubRow>
            <SubHeading mode={theme}>
              B.S. in Computer Science | GPA: 3.68/4.0
            </SubHeading>
            <SubHeading mode={theme}>Winter 2023</SubHeading>
          </SubRow>
        </SplitContainer>
        <div className="coursework-section">
          <PTitle mode={theme}>Relavent Coursework</PTitle>
          <div className="courses-container">
            {relevant_courses.map((course, index) => {
              return (
                <Pill
                  key={index}
                  borderColor={borderColor}
                  textColor={borderColor}
                >
                  {course}
                </Pill>
              );
            })}
          </div>
        </div>

        <div className="activities-section">
          <PTitle mode={theme}>Activities</PTitle>
          <div className="activities-container">
            {activities.map((activity, index) => {
              return (
                <Pill
                  key={index}
                  borderColor={borderColor}
                  textColor={borderColor}
                >
                  {activity}
                </Pill>
              );
            })}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default EducationContent;
