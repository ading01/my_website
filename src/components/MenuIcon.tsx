import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

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
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 40px; // Adjust as needed for your layout
  right: 10px;
  background-color: white;
  border: 1px solid #ddd;
  z-index: 100;

  @media (min-width: 768px) {
    display: none; // Hide by default, will be toggled by JavaScript
  }
`;

// The component
const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
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
