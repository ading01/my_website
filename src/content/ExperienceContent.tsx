import { Heading, SubHeading, PText, PTitle } from "../styles/text";
import FadeInSection from "../ui/FadeInSection";

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
];

function ExperienceContent() {
  return (
    <div className="experience-content">
      {ResumeContent.map((job, index) => (
        <FadeInSection key={index}>
          {/* <div key={index}> */}
          <div className="container row1">
            <Heading>{job.company_name}</Heading>
            <Heading>{job.location}</Heading>
          </div>
          <div className="container row2">
            <SubHeading>{job.position}</SubHeading>
            <SubHeading>{job.date}</SubHeading>
          </div>
          {job.details.map((detail, index) => (
            <div className="resume-block" key={index}>
              <PText>{detail}</PText>
            </div>
          ))}
          {/* </div> */}
        </FadeInSection>
      ))}
    </div>
  );
}

export default ExperienceContent;
