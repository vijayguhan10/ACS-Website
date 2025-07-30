import React, { useEffect, useState } from "react";
import InitialRouter from "./Router/InitialRouter";

const themes = {
  light:
    "bg-gradient-to-br from-[#f4eaff] via-white to-[#f4eaff] text-gray-900",
  dark: "bg-gradient-to-br from-[#18181b] via-[#23232b] to-[#18181b] text-white",
};

const App = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className={`w-full min-h-screen relative transition-colors duration-300 ${themes[theme]}`}
    >
      {/* Theme Switcher */}
      <button
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full shadow bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-700 text-sm font-semibold transition hover:scale-105"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
      {/* Decorative SVGs */}
      <div className="hidden lg:block absolute top-0 left-0 z-0">
        <svg
          viewBox="0 0 80 80"
          className="w-32 h-32 absolute -top-10 -left-10"
          fill="none"
        >
          <rect
            width="80"
            height="80"
            rx="18"
            fill={theme === "light" ? "#f4eaff" : "#23232b"}
          />
          <ellipse
            cx="40"
            cy="60"
            rx="32"
            ry="14"
            fill={theme === "light" ? "#a7f3d0" : "#18181b"}
          />
          <ellipse
            cx="40"
            cy="50"
            rx="28"
            ry="10"
            fill={theme === "light" ? "#a78bfa" : "#27273a"}
          />
          <ellipse
            cx="40"
            cy="40"
            rx="24"
            ry="8"
            fill={theme === "light" ? "#fbcfe8" : "#23232b"}
          />
        </svg>
      </div>
      <div className="font-primary bg-transparent">
        <InitialRouter />
      </div>
    </div>
  );
};

export default App;


setTimeout(() => {
  
}, timeout);