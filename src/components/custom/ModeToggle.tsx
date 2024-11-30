"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Aseguramos que el componente solo se renderice completamente en el cliente
  useEffect(() => {
    setMounted(true);
    setIsDarkMode(theme === "dark");
  }, [theme]);

  // Función para alternar entre "light" y "dark"
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode); // Actualiza el estado local
  };

  if (!mounted) return null;

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="relative rounded-full transition-all duration-500 ease-in-out"
    >
      <SunIcon
        className={`h-[1.2rem] w-[1.2rem] transition-opacity duration-500 ${
          isDarkMode ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
      />
      <MoonIcon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-opacity duration-500 text-hexagon-foreground ${
          isDarkMode ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}