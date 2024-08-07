import styled from "styled-components";
import { breakpoints } from "../ui/theme/base/breakpoint";

export const ResumeCardContainer = styled.div`
  padding-top: 50px;
  width: 850px;
  background-color: ${({ theme }) => theme.backgroundColor};
  transition: background-color 0.5s ease;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
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
    align-items: flex-start; /* Aligns items to the left */

    > div {
      width: auto; /* Allows each div to shrink to its content size */
      margin: 0; /* Optional: Adjusts margin for a tighter layout */
    }
  }
`;

interface HeadingProps {
  flexDirection?: string;
}

export const SubRow = styled.div<HeadingProps>`
  display: flex;
  justify-content: ${({ flexDirection }) => flexDirection || "space-between"};
  gap: 1px;

  margin: 2px;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
