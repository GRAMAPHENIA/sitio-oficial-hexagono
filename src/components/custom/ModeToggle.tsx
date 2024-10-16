"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // Asegura que el componente solo se renderice completamente en el cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Función para alternar entre "light" y "dark"
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Si el componente no está montado, no renderizamos los iconos
  if (!isMounted) {
    return null; // Evita renderización incorrecta en el SSR
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="rounded-full"
    >
      <SunIcon
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <MoonIcon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
