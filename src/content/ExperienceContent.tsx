import { useTheme } from "../contexts/ThemeContext";
import { Heading, SubHeading, PText, HighlightedLink } from "../styles/text";
import FadeInSection from "../ui/FadeInSection";
import styled from "styled-components";
import { SplitContainer, MainRow, SubRow, ResumeDetails } from "../styles/divs";

let ResumeContent = [
  {
    company_name: "Capacity Management Intl Inc.",
    location: "Dennis Port, MA",
    position: "Software Engineer",
    date: "September 2023 – Present",
    details: [
      "Independently engineered a MERN stack-based rental property web application, integrating Gmail APIs, PrimeReact calendar interface, and AWS S3, enhancing property visibility and streamlining customer engagement",
      "Initiated and led a strategic marketing campaign in collaboration with property owners, leveraging a mailing list to successfully promote the new web application to previous / perspective guests, boosting property exposure",
    ],
    link: "https://www.capeoceanvista.com/",
    color: "#5D8A96",
  },
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
    color: "orange",
    link: "https://www.amazon.com/",
  },
  {
    company_name: "Casa Systems",
    location: "Andover, MA",
    position: "Full Stack Software Developer Intern",
    date: "Summer 2022",
    details: [
      "Automated CMTS (Cable Modem Termination System) monitoring scripts using Python and SSHv2 API protocols",
      "Eliminated reliance on third-party services by developing a web application using Flask, JavaScript, and Python to centralize all CMTS monitoring data from 5 customer companies",
      "Analyzed CMTS monitoring data by automating R scripts to compare hardware performance after customer upgrades",
    ],
    color: "#F5821E",
    link: "https://www.casa-systems.com/",
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
    color: "#01B2DE",
    link: "https://yale-lily.github.io/",
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
    color: "#7142ED",
    link: "https://www.dreamkitapp.com/",
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
              {job.link ? (
                <HighlightedLink
                  color={job.color}
                  href={job.link}
                  aria-disabled
                >
                  <Heading>{job.company_name}</Heading>
                </HighlightedLink>
              ) : (
                <Heading>{job.company_name}</Heading>
              )}
              {/* <HighlightedLink color={job.color} href={job.link} aria-disabled>
                <Heading>{job.company_name}</Heading>
              </HighlightedLink> */}
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
