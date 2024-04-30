import React from "react";
import "./DarkModeToggle.css"; // Create a CSS file for DarkModeToggle

const DarkModeToggle = ({ onToggleMode, isDarkMode }) => (
  <div id="btn-mode" onClick={onToggleMode}>
    <p id="mode-text">{isDarkMode ? "DARK" : "LIGHT"}</p>
    <div className="icon-container">
      <img
        id="mode-icon"
        src={
          isDarkMode
            ? "/src/assets/images/sun-icon.svg"
            : "/src/assets/images/moon-icon.svg"
        }
        alt={isDarkMode ? "Sun Icon" : "Moon Icon"}
      />
    </div>
  </div>
);

export default DarkModeToggle;
