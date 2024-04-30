import React, { useState } from "react";
import "./SearchBar.css"; // Create a CSS file for SearchBar

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (input.trim() !== "") {
      onSearch(input);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={`searchbar-container ${error ? "error" : ""}`}>
      <input
        type="search"
        id="input"
        placeholder="Enter a GitHub username..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="btn-search" onClick={handleSubmit}>
        Search
      </button>
      {error && <p id="no-results">Please enter a username</p>}
    </div>
  );
};

export default SearchBar;
