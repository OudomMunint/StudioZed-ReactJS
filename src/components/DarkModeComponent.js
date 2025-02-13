import Styles from '../App.css';
import { ChangedEventHandler } from 'react';

const SetDarkMode = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.classList.add("dark-mode");

  // Add HomeHeroDark class instead of replacing HomeHeroSection
  // document.querySelectorAll(".HomeHeroSection").forEach((el) => {
  //     el.classList.add("HomeHeroDark");
  // });
};

const SetLightMode = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.classList.remove("dark-mode");

  // Remove HomeHeroDark class to revert back to HomeHeroSection styling
  // document.querySelectorAll(".HomeHeroSection").forEach((el) => {
  //     el.classList.remove("HomeHeroDark");
  // });
};

const StoredTheme = localStorage.getItem('theme');

const PrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

const DefaultDark = StoredTheme === "dark" || (StoredTheme === null && PrefersDark);

if (DefaultDark) {
    SetDarkMode();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) {
      SetDarkMode();
    } else {
      SetLightMode();
    }
  };

const DarkModeComponent = () => {
    return (
      <div className="toggle-theme-wrapper">
        <span>☀️</span>
        <label className="toggle-theme" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            onChange={toggleTheme}
            defaultChecked={DefaultDark}
          />
          <div className="slider round"></div>
        </label>
        <span>🌒</span>
      </div>
    );
  };

  export default DarkModeComponent;