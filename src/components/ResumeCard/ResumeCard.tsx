import "./ResumeCard.css";
import styled from "styled-components";
import FadeInSection from "../../ui/FadeInSection";
import {
  ResumeCardContainer,
  ResumeCardRow,
  LeftColumn,
  RightColumn,
} from "../../styles/divs";

import { Heading } from "../../styles/text";

const ResumeCardTitle = styled(Heading)`
  color: ${({ theme }) => theme.hover_color};
  font-size: 1.5rem;
  position: sticky;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
  }
`;

const StickyContainer = styled.div`
  top: 0;
  position: sticky;
`;

type ResumeCardProps = {
  section_name: string;
  resume_content: JSX.Element;
};

function ResumeCard({ section_name, resume_content }: ResumeCardProps) {
  return (
    <ResumeCardContainer>
      <ResumeCardRow>
        <LeftColumn>
          <StickyContainer>
            <FadeInSection>
              <ResumeCardTitle>{section_name}</ResumeCardTitle>
            </FadeInSection>
          </StickyContainer>
        </LeftColumn>
        <RightColumn>{resume_content}</RightColumn>
      </ResumeCardRow>
    </ResumeCardContainer>
  );
}

export default ResumeCard;
