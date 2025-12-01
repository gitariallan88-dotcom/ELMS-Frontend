import { useTheme } from "../context/ThemeContext";


const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const darkTheme = theme === "dark";
  return (
    <button
      onClick={() => setTheme(darkTheme ? "light" : "dark")}
      className="px-3 py-1 rounded border border-gray-500 dark:border-gray-300 hover:opacity-30"

    >
      {darkTheme ? "Light Mode" : "Dark Mode"}
      

    </button>
  );
};

export default ThemeToggle;
