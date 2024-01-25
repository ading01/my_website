import { useTheme } from "../contexts/ThemeContext";
import { Heading, SubHeading, PText, HighlightedLink } from "../styles/text";
import FadeInSection from "../ui/FadeInSection";
import styled from "styled-components";
import { SplitContainer, MainRow, SubRow, ResumeDetails } from "../styles/divs";
import HoverIcon from "../components/HoverIcon";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LiaLinkSolid } from "react-icons/lia";
import Pill from "../components/Pill";

let ProjectContent = [
  {
    projectName: "CampusClicks",
    techUsed: ["MongoDB", "Express.js", "React.js", "Node.js", "S3"],
    details: [
      "Implemented and deployed a web application that serves as a centralized platform to connect Yale Students to student freelance services like photographers by incorporating instant-booking mythology to increase price transparency and exposure to student freelance market",
    ],
    link: "https://campus-clicks-client.onrender.com/",
    github: "https://github.com/yale-swe/f23-campusclicks",
    color: "#3895DE",
  },
  {
    projectName: "Qwixx",
    techUsed: ["Python", "PyTorch", "Pygame"],
    details: [
      "Trained three RL agents to play Qwixx and two Qwixx variants by altering two end-game conditions and optimizing for maximum point accumulation to quantify differences in game quality and study the feasibility of automated game testing",
    ],
    github: "https://github.com/ading01/490-senior-project",
    color: "#3895DE",
  },
  {
    projectName: "Yost",
    techUsed: [
      "Flask",
      "Django",
      "SQLAlchemy",
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    details: [
      "Developed a Flask, Django, and SQLAlchemy web application that allows students at Yale to list and locate lost items on campus",
    ],
    youtube: "https://youtu.be/QHkuQsM8nIE",
    github: "https://github.com/ading01/Yost",
    color: "#3895DE",
  },
  {
    projectName: "Twitter bot",
    techUsed: ["Python", "GPT-2"],
    details: [
      "Trained a natural language neural network model to determine positive or negative sentiment by scraping thousands of political Tweets with the Twitter Developer API, then generating response Tweets, based on predetermined political leanings, to a designated Twitter account",
    ],
    // link: "https://github.com/ading01/490-senior-project",
    github: "https://github.com/ading01/twitterbot",
    color: "#3895DE",
  },
];

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function ProjectsContent() {
  const { theme } = useTheme();

  return (
    <ContentDiv>
      {ProjectContent.map((projects, index) => (
        <FadeInSection key={index}>
          {/* <div key={index}> */}
          <SplitContainer>
            <MainRow>
              <Heading>{projects.projectName}</Heading>
              {/* <HighlightedLink color={job.color} href={job.link} aria-disabled>
                <Heading>{job.company_name}</Heading>
              </HighlightedLink> */}
              <div>
                {projects.github && (
                  <a href={projects.github}>
                    <HoverIcon
                      as="span"
                      icon={<FaGithub />}
                      hoverColor="#26CD4D"
                    />
                  </a>
                )}
                {projects.youtube && (
                  <a href={projects.youtube}>
                    <HoverIcon
                      as="span"
                      icon={<FaYoutube />}
                      hoverColor="#FF0000"
                    />
                  </a>
                )}
                {projects.link && (
                  <a href={projects.link}>
                    <HoverIcon
                      as="span"
                      icon={<LiaLinkSolid />}
                      hoverColor="#1DA1F2"
                    />
                  </a>
                )}
              </div>
            </MainRow>
            <SubRow flexDirection="flex-start">
              <div>
                {projects.techUsed.map((tech, index) => (
                  <Pill
                    key={index}
                    borderColor={projects.color}
                    textColor={projects.color}
                  >
                    {tech}
                  </Pill>
                ))}
              </div>
              {/* <SubHeading mode={theme}>{projects.techUsed}</SubHeading> */}
            </SubRow>
          </SplitContainer>
          {projects.details.map((detail, index) => (
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

export default ProjectsContent;
