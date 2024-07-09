import { useTheme } from "../contexts/ThemeContext";
import { Heading, SubHeading, PText, HighlightedLink } from "../styles/text";
import FadeInSection from "../ui/FadeInSection";
import styled from "styled-components";
import { SplitContainer, MainRow, SubRow, ResumeDetails } from "../styles/divs";
import Pill from "../components/Pill";
import { BsThreeDotsVertical } from "react-icons/bs";

let ResumeContent = [
  {
    company_name: "Amazon.com",
    location: "Seattle, WA",
    position: "Software Development Engineer",
    date: "April 2024 - Present",
    skills: ["Java", "AWS", "Spring", "React", "Redux", "CI/CD", "Dagger"],
    details: [
      "Driving the adoption of Amazon Business's Pay By Invoice service by developing an event-based notification system using AWS Lambda, SQS, and SNS with AWS CDK",
      "Secured vulnerable endpoints by implementing a reusable Spring annotation to validate incoming requests, reducing the risk of unauthorized access",
    ],
    color: "orange",
    link: "https://www.amazon.com/",
    roles: [
      {
        title: "Software Development Engineering Intern",
        date: "June 2023 - August 2023",
        details: [
          "Migrated Amazon Business’s “Pay By Invoice” service onto Native AWS using ECS clusters to enable CloudWatch Container Insights for enhanced application monitoring and autoscaling capabilities",
          "Simplified 8 shared front-end components (3000+ lines of code) by incorporating React hooks and redux slices, resulting in greater reusability and streamlined debugging workflows",
          "Reduced the risk of user and region-specific errors by implementing form input validation, updating the string translation protocol, and coding robust UI/UX bug fixes to decrease customer-reported IT tickets",
        ],
      },
    ],
  },
  {
    company_name: "Capacity Management Intl Inc.",
    location: "Dennis Port, MA",
    position: "Software Engineer",
    date: "December 2023 – April 2024",
    skills: ["React", "Node.js", "Express.js", "MongoDB", "AWS S3"],
    details: [
      "Independently engineered a MERN stack-based rental property web application, integrating Gmail APIs, PrimeReact calendar interface, and AWS S3, enhancing property visibility and streamlining customer engagement",
      "Initiated and led a strategic marketing campaign in collaboration with property owners, leveraging a mailing list to successfully promote the new web application to previous / perspective guests, boosting property exposure",
    ],
    link: "https://www.capeoceanvista.com/",
    color: "#5D8A96",
  },
  {
    company_name: "Casa Systems",
    location: "Andover, MA",
    position: "Full Stack Software Developer Intern",
    date: "June 2022 - August 2022",
    skills: ["Python", "Flask", "JavaScript", "R"],
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
    date: "Janurary - May 2022",
    skills: ["Python", "NLP", "Web Scraping", "BeautifulSoup"],
    details: [
      "Improved an NLP search engine’s accuracy by 28% by implementing a text crawler with Python/BeautifulSoup to prefill a database with key page metadata used in querying",
      "Tested the NLP search engine by implementing a bot to search a random set of keywords to show a reduction of 'no results found' outcomes",
    ],
    color: "#01B2DE",
    link: "https://yale-lily.github.io/",
  },
  {
    company_name: "DreamKit",
    location: "New Haven, CT",
    position: "Web Design/Marketing Intern",
    date: "Janurary - May 2022",
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

  function getCompanyNameComponent(
    company_name: string,
    link: string,
    color: string
  ) {
    if (company_name === "") {
      return <BsThreeDotsVertical color={color} size="1.5rem" />;
    }

    if (link !== "") {
      return (
        <HighlightedLink color={color} href={link} aria-disabled>
          <Heading>{company_name}</Heading>
        </HighlightedLink>
      );
    }
    return <Heading>{company_name}</Heading>;
  }

  return (
    <ContentDiv>
      {ResumeContent.map((job, index) => (
        <FadeInSection key={index}>
          {/* <div key={index}> */}
          <SplitContainer>
            <MainRow>
              {/* {job.link ? (
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
              {getCompanyNameComponent(job.company_name, job.link, job.color)}
              <Heading>{job.location}</Heading>
            </MainRow>
            <SubRow>
              <SubHeading mode={theme}>{job.position}</SubHeading>
              <SubHeading mode={theme}>{job.date}</SubHeading>
            </SubRow>
          </SplitContainer>
          <ResumeDetails>
            {job.skills?.map((skill, index) => (
              <Pill key={index} borderColor={job.color} textColor={job.color}>
                {skill}
              </Pill>
            ))}
          </ResumeDetails>
          {job.details.map((detail, index) => (
            <ResumeDetails>
              <PText mode={theme}>{detail}</PText>
            </ResumeDetails>
          ))}
          {job.roles?.map((role, index) => (
            <div>
              <BsThreeDotsVertical color={job.color} size="1.5rem" />
              <SubRow>
                <SubHeading mode={theme}>{role.title}</SubHeading>
                <SubHeading mode={theme}>{role.date}</SubHeading>
              </SubRow>
              {role.details.map((detail, index) => (
                <ResumeDetails>
                  <PText mode={theme}>{detail}</PText>
                </ResumeDetails>
              ))}
            </div>
          ))}
          <div style={{ marginBottom: "2rem" }}></div>
        </FadeInSection>
      ))}
    </ContentDiv>
  );
}

export default ExperienceContent;
