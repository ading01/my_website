import { useTheme } from "../contexts/ThemeContext";
import { Heading, SubHeading, PText, PTitle } from "../styles/text";
import FadeInSection from "../ui/FadeInSection";
import styled from "styled-components";
import { SplitContainer, MainRow, SubRow, ResumeDetails } from "../styles/divs";

let ResumeContent = [
  {
    company_name: "Amazon.com",
    location: "Seattle, WA",
    position: "Software Dev Engineering Intern",
    date: "Summer 2023",
    details: [
      "Migrated Amazon Business’s “Pay By Invoice” service onto Native AWS using ECS clusters to enable CloudWatch Container Insights for enhanced application monitoring and autoscaling capabilities",
      "Simplified 8 shared front-end components (3000+ lines of code) by incorporating React hooks and redux slices, resulting in greater reusability and streamlined debugging workflows",
      "Reduced the risk of user and region-specific errors by implementing form input validation, updating the string translation protocol, and coding robust UI/UX bug fixes to decrease customer-reported IT tickets",
    ],
  },
  {
    company_name: "Casa Systems Inc.",
    location: "Andover, MA",
    position: "Full Stack Software Developer Intern",
    date: "Summer 2022",
    details: [
      "Automated CMTS (Cable Modem Termination System) monitoring scripts using Python and SSHv2 API protocols",
      "Eliminated reliance on third-party services by developing a web application using Flask, JavaScript, and Python to centralize all CMTS monitoring data from 5 customer companies",
      "Analyzed CMTS monitoring data by automating R scripts to compare hardware performance after customer upgrades",
    ],
  },
  {
    company_name: "Lily Lab at Yale",
    location: "New Haven, CT",
    position: "Research Intern",
    date: "Janurary-May 2022",
    details: [
      "Increased the accuracy of an NLP search engine by updating text crawler functionality to improve user experience",
      "Tested the NLP search engine by implementing a bot to search a random set of keywords to show a reduction of 'no results found' outcomes",
    ],
  },
  {
    company_name: "DreamKit",
    location: "New Haven, CT",
    position: "Web Design/Marketing Intern",
    date: "Janurary-May 2022",
    details: [
      "Implemented interactive blogging features on DreamKit’s homepage to promote community engagement by using Squarespace’s platform",
      "Pushed to create several partnerships by calling existing non-profit organizations in New Haven to expand the reach of DreamKit’s platform",
    ],
  },
];

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function ExperienceContent() {
  const { theme } = useTheme();

  return (
    <ContentDiv>
      {ResumeContent.map((job, index) => (
        <FadeInSection key={index}>
          {/* <div key={index}> */}
          <SplitContainer>
            <MainRow>
              <Heading>{job.company_name}</Heading>
              <Heading>{job.location}</Heading>
            </MainRow>
            <SubRow>
              <SubHeading mode={theme}>{job.position}</SubHeading>
              <SubHeading mode={theme}>{job.date}</SubHeading>
            </SubRow>
          </SplitContainer>
          {job.details.map((detail, index) => (
            <ResumeDetails>
              <PText mode={theme}>{detail}</PText>
            </ResumeDetails>
          ))}
          {/* </div> */}
        </FadeInSection>
      ))}
    </ContentDiv>
  );
}

export default ExperienceContent;
