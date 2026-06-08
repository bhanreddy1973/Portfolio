"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeTransition } from "@/components/providers/theme-provider";

export function ModeToggle() {
  const { toggleTheme } = useThemeTransition();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX: x, clientY: y } = event;
    toggleTheme({ x, y });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="relative inline-flex items-center justify-center size-9 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-sm transition-all duration-300 ease-[var(--ease-out)] supports-[hover:hover]:hover:bg-primary/20 supports-[hover:hover]:hover:scale-110 supports-[hover:hover]:hover:shadow-md active:scale-90"
    >
      <Sun className="size-4 rotate-0 scale-100 opacity-100 transition-all duration-400 ease-[var(--ease-out)] dark:-rotate-90 dark:scale-0 dark:opacity-0" />
      <Moon className="absolute size-4 rotate-90 scale-0 opacity-0 transition-all duration-400 ease-[var(--ease-out)] dark:rotate-0 dark:scale-100 dark:opacity-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
