const SetDarkMode = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.classList.add("dark-mode");
};

const SetLightMode = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.classList.remove("dark-mode");
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