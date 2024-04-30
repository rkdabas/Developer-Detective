import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
import "./App.css"; // Create a main CSS file for the App

const App = () => {
  const [profileData, setProfileData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark-mode")) || false
  );

  useEffect(() => {
    const defaultUsername = "rkdabas";
    getUserData(defaultUsername);
  }, []);

  const getUserData = (username) => {
    const url = `https://api.github.com/users/${username}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((data) => {
        setProfileData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSearch = (username) => {
    getUserData(username);
  };

  const handleToggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("dark-mode", JSON.stringify(newMode));
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty("--bg-color", "#141D2F");
      document.documentElement.style.setProperty("--content-bg", "#1E2A47");
      document.documentElement.style.setProperty("--text-color", "white");
    } else {
      document.documentElement.style.setProperty("--bg-color", "#F6F8FF");
      document.documentElement.style.setProperty("--content-bg", "#FEFEFE");
      document.documentElement.style.setProperty("--text-color", "#4B6A9B");
    }
  }, [isDarkMode]);

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <Header onToggleMode={handleToggleMode} isDarkMode={isDarkMode} />
      <main>
        <SearchBar onSearch={handleSearch} />
        <Profile profileData={profileData} />
      </main>
    </div>
  );
};

export default App;
