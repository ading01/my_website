import React from "react";
import ThemeToggleButton from "../components/ThemeToggleButton/ThemeToggleButton";
import styled from "styled-components";
import MobileMenu from "./MenuIcon";

const NavBarContainer = styled.nav`
  position: fixed; /* Fixed position */
  top: 0; /* Align to the top */
  left: 0; /* Align to the left to ensure full width coverage */
  display: flex; /* Use flexbox for internal alignment */
  justify-content: right; /* Center items */
  align-items: center; /* Align items vertically */
  width: 100%; /* Full width of the viewport */
  padding: 5px; /* Add padding for breathing space */
  box-sizing: border-box; /* Include padding in width calculation */
  z-index: 10; /* Ensure navbar is above other content */
  /* Add other styles like background, height, etc., as needed */
  gap: 1rem;
  transition: background-color 0.5s ease;
  // background-color: ${({ theme }) => theme.backgroundColor};
  background-color: transparent; /* Set background color to transparent */

  @media (max-width: 1650px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-end;
  }

  @media (max-width: 768px) {
    justify-content: space-between; /* Align items to the sides */
    align-items: center;
    flex-direction: row;
    z-index: 1000;
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;

const NavItem = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.texts.primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.5s ease;
  position: relative; /* Position relative for pseudo-element positioning */

  @media (max-width: 768px) {
    display: none;
  }

  /* Add a pseudo-element for the underline */
  &::after {
    content: "";
    position: absolute;
    bottom: -5px; /* Adjust as needed */
    left: 50%;
    width: 0; /* Start with no width */
    height: 2px; /* Height of the underline */
    background-color: ${({ theme }) => theme.hover_color}; /* Underline color */
    transition: width 0.3s ease, left 0.3s ease; /* Smooth transition for the underline */
  }

  /* Hover effect */
  &:hover::after {
    width: 100%; /* Full width on hover */
    left: 0; /* Start from the far left */
  }
`;

const Navbar = () => {
  return (
    <NavBarContainer>
      <NavItem href="#experience">Experience</NavItem>
      <NavItem href="#education">Education</NavItem>
      <NavItem href="#projects">Projects</NavItem>
      <NavItem href="#skills">Skills</NavItem>

      <ThemeToggleButton />

      {/* <GiHamburgerMenu /> */}
      <MobileMenu />
    </NavBarContainer>
  );
};

export default Navbar;
