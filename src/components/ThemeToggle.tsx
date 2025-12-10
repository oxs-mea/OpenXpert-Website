import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-14 h-7 rounded-full glass-card transition-all duration-300 hover:glow-effect group"
      aria-label="Toggle theme"
    >
      {/* Toggle Pill */}
      <div
        className={`absolute top-1 ${
          theme === "dark" ? "right-1" : "left-1"
        } w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent transition-all duration-300 flex items-center justify-center shadow-lg`}
      >
        {theme === "dark" ? (
          <Moon className="w-3 h-3 text-primary-foreground" />
        ) : (
          <Sun className="w-3 h-3 text-primary-foreground" />
        )}
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 glow-effect transition-opacity duration-300 -z-10" />
    </button>
  );
};
