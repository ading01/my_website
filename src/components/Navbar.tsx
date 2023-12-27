import React from "react";
import ThemeToggleButton from "../components/ThemeToggleButton/ThemeToggleButton";
import styled from "styled-components";
import MobileMenu from "./MenuIcon";
import { GiHamburgerMenu } from "react-icons/gi";

// const NavBarContainer = styled.nav`
//   @media (max-width: 768px) {
//     justify-content: center;
//   }
//   position: fixed; /* Fixed position */
//   top: 0; /* Align to the top */
//   right: 0; /* Align to the right */
//   display: flex; /* Use flexbox for internal alignment */
//   justify-content: flex-end; /* Align items to the right */
//   align-items: center; /* Align items vertically */
//   width: 100%; /* Full width of the viewport */
//   padding: 10px; /* Optional: Add padding for breathing space */
//   margin: 10px; /* Optional: You can remove it */
//   ma
//   z-index: 1000; /* Ensure navbar is above other content */
//   /* Add other styles like background, height, etc., as needed */
// `;

const NavBarContainer = styled.nav`
  @media (max-width: 768px) {
    justify-content: space-between;
  }
  position: fixed; /* Fixed position */
  top: 0; /* Align to the top */
  left: 0; /* Align to the left to ensure full width coverage */
  display: flex; /* Use flexbox for internal alignment */
  justify-content: flex-end; /* Align items to the right */
  align-items: center; /* Align items vertically */
  width: calc(100% - 20px); /* Adjust width to account for padding */
  padding: 10px; /* Add padding for breathing space */
  box-sizing: border-box; /* Include padding in width calculation */
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
  @media (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <NavBarContainer>
      <NavItem href="#home">Home</NavItem>
      <NavItem href="#experience">Experience</NavItem>
      <NavItem href="#education">Education</NavItem>
      <NavItem href="#skills">Skills</NavItem>
      <ThemeToggleButton />
      {/* <GiHamburgerMenu /> */}
      <MobileMenu />
    </NavBarContainer>
  );
};

export default Navbar;
