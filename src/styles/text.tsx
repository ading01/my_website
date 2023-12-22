import styled from "styled-components";

export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
`;

export const SubHeading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.texts.secondary};
  margin: 0;
  padding: 0;
`;

export const PText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ theme }) => theme.texts.paragraph};
  margin: 0;
  padding: 0;
`;

export const PTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
  color: ${({ theme }) => theme.texts.paragraph};
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0;
`;
