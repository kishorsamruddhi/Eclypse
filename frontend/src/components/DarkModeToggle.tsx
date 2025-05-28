import { useEffect, useState } from "react";

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;

    // Check localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      root.classList.add("dark");
      setIsDark(true);
    } else if (savedTheme === "light") {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      // No saved preference, check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        root.classList.add("dark");
        setIsDark(true);
      } else {
        root.classList.remove("dark");
        setIsDark(false);
      }
    }

    // No cleanup removing dark class here, to preserve mode on unmount
  }, []);

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");

    if (newDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition"
    >
      {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default DarkModeToggle;
