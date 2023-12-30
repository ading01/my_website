import styled from "styled-components";
import { breakpoints } from "../ui/theme/base/breakpoint";

export const ResumeCardContainer = styled.div`
  padding-top: 50px;
  width: 50vw;
  background-color: ${({ theme }) => theme.backgroundColor};
  margin: 20px;
  transition: background-color 0.5s ease;

  @media (max-width: ${breakpoints.tablet}px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ResumeCardRow = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  padding: 10px;
  flex: 25%;
`;

export const RightColumn = styled.div`
  align-items: center;
  flex: 75%;
  padding: 10px;
`;

export const SplitContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResumeDetails = styled.div`
  padding-bottom: 5px;
  @media (max-width: 768px) {
    padding-bottom: 10px;
  }
`;

export const MainRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SubRow = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 2px;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
