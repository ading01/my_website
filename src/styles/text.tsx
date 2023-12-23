import styled from "styled-components";

export const Heading = styled.h1<{ mode: "light" | "dark" }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.texts.primary};
  margin: 0;
  padding: 0;
`;

export const SubHeading = styled.h2<{ mode: "light" | "dark" }>`
  font-size: 1.25rem;
  margin: 0;
  padding: 0;
`;

export const PText = styled.p<{ mode: "light" | "dark" }>`
  font-size: 1rem;
  margin: 0;
  padding: 0;
`;

export const PTitle = styled.p<{ mode: "light" | "dark" }>`
  font-size: 1rem;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0;
`;
