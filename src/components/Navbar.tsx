import React from "react";
import ThemeToggleButton from "../components/ThemeToggleButton/ThemeToggleButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-item" href="#home">
        Home
      </a>

      <a className="navbar-item" href="#education">
        Education
      </a>

      <a className="navbar-item" href="#skills">
        Skills
      </a>
      <ThemeToggleButton />
    </nav>
  );
};

export default Navbar;
