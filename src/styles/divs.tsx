import styled from "styled-components";

export const ResumeCardContainer = styled.div`
  width: 50vw;
  background-color: ${({ theme }) => theme.backgroundColor};
  margin: 20px;
  transition: background-color 0.5s ease;
`;

export const ResumeCardRow = styled.div`
  display: flex;
`;

export const LeftColumn = styled.div`
  padding: 10px;
  flex: 25%;
`;

export const RightColumn = styled.div`
  flex: 75%;
`;
