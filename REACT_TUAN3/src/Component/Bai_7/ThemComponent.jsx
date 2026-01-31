import React from "react";
import { useTheme } from "./ThemeContext";

export const ThemButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="toggle-btn" onClick={toggleTheme}>
      Chuyển sang {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};
export const Card = () => {
  return (
    <div className="card">
      <h3>Card Title</h3>
      <p>This is a card component.</p>
      <ThemButton />
    </div>
  );
};
export const Layout = () => {
  const { theme } = useTheme();
  return (
    <div className={`layout theme-${theme}`}>
      <h2>Demo useContext & Theme Switcher</h2>
      <p>
        Theme hiện tại: <strong>{theme.toUpperCase()}</strong>
      </p>
      <Card />
    </div>
  );
};
