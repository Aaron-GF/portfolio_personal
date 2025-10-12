import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { useTheme } from "@/providers/ThemeProvider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleTheme = () => {
    if (!document.startViewTransition) switchTheme();
    document.startViewTransition(switchTheme);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="cursor-pointer"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      )}
    </Button>
  );
}
