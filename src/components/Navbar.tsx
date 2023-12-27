import React from "react";
import ThemeToggleButton from "../components/ThemeToggleButton/ThemeToggleButton";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarContainer = styled.nav`
  position: fixed; /* Fixed position */
  top: 0; /* Align to the top */
  right: 0; /* Align to the right */
  display: flex; /* Use flexbox for internal alignment */
  justify-content: flex-end; /* Align items to the right */
  align-items: center; /* Align items vertically */
  width: 100%; /* Full width of the viewport */
  padding: 0 10px; /* Optional: Add padding for breathing space */
  z-index: 1000; /* Ensure navbar is above other content */
  /* Add other styles like background, height, etc., as needed */
`;

const NavItem = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.texts.primary};
  margin-right: 1rem;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.5s ease;
`;

const Navbar = () => {
  return (
    <NavBarContainer>
      <NavItem href="#home">Home</NavItem>
      <NavItem href="#experience">Experience</NavItem>
      <NavItem href="#education">Education</NavItem>
      <NavItem href="#skills">Skills</NavItem>
      <ThemeToggleButton />
    </NavBarContainer>
  );
};

export default Navbar;
