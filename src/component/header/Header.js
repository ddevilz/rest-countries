import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <header className="nav">
        <h1 className="h-text" onClick={() => navigate("/")}>
          Where in the world?
        </h1>
        <div className="btn" onClick={toggleTheme}>
          <FontAwesomeIcon icon="fa-solid fa-moon" />

          <FontAwesomeIcon icon={faMoon} />
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
