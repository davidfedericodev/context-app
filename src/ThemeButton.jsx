import { useContext } from "react";
import { ThemeContext } from "./store/theme-context";

export default function ThemeButton() {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="bg-blue-500 text-white p-2 rounded-md">
      Change theme
    </button>
  );
}
