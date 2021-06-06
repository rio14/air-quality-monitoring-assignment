import React from "react";
import { ThemeContext } from "../utilities/ThemeContext";
function Header() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const changeTheme = (event) => {
    setTheme(event.target.value === "light" ? "dark" : "light");
  };
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <div>
        <span
          data-testid="title"
          className={`sm:text-3xl text-xl text-${theme}-500 font-medium tracking-wide capitalize`}
        >
          air quality monitoring
        </span>
      </div>
      <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          value={theme}
          onChange={changeTheme}
          className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-${theme}-400 ${
            theme === "dark" ? `right-0` : null
          } border-4 border-${theme}-100 appearance-none cursor-pointer`}
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
    </div>
  );
}

export default Header;
