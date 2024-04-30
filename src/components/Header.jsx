import React from "react";
import DarkModeToggle from "./DarkModeToggle"; // Implement a component for dark/light mode toggle
import "./Header.css"; // Create a CSS file for Header component

const Header = ({ onToggleMode, isDarkMode }) => (
  <header className="header">
    <h1 className="title">DevDetective</h1>
    <DarkModeToggle onToggleMode={onToggleMode} isDarkMode={isDarkMode} />
  </header>
);

export default Header;
