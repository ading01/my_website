import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

// Define an interface for your DropdownMenu props
interface DropdownMenuProps {
  isOpen: boolean;
}

const MenuIcon = styled.div`
  display: none; // Hide by default
  top: 10px;
  right: 10px;
  z-index: 100; // Above other content

  @media (max-width: 768px) {
    display: block; // Only show on small screens
  }
`;

// Use the interface for the styled component
const DropdownMenu = styled.div<DropdownMenuProps>`
  position: fixed;
  left: 0;
  right: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.backgroundColor};
  box-sizing: border-box;
  z-index: 0;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 100%; // Position the dropdown right below the Navbar

  overflow: hidden; // Hide the overflow when the menu is closed
  max-height: ${({ isOpen }) =>
    isOpen ? "300px" : "0"}; // Adjust the max height as needed
  transition: max-height 0.3s ease-in-out; // Smooth transition for the max-height

  @media (min-width: 768px) {
    display: none;
  }

  a {
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.texts.primary};
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    flex: none;

    &:hover {
      background-color: #1974b4;
    }
  }
`;

// The component
const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        <GiHamburger size={42} />
      </MenuIcon>
      <DropdownMenu isOpen={isOpen}>
        {/* List your menu items here */}
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </DropdownMenu>
    </>
  );
};

export default MobileMenu;