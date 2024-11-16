"use client";

import { Button } from "@/components/ui/button";
import { Merriweather } from "next/font/google";
import { useCallback } from "react";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Header() {
  const handleBudget = useCallback(() => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <header className="flex flex-col items-center justify-center text-center pt-28 pb-40 lg:py-40">
      <h1
        className={`${merriweather.className} text-2xl lg:text-[62px] font-black text-slate-600 dark:text-slate-300 mb-2 lg:mb-6`}
      >
        Crea tu sitio web con
      </h1>
      <span
        className={`${merriweather.className} text-6xl lg:text-9xl font-black text-hexagon dark:text-hexagon mb-12`}
      >
        Hexágono
      </span>
      <p className="lg:text-xl text-gray-500 dark:text-gray-400 max-w-72 md:max-w-md lg:max-w-lg mb-16">
        Ofrecemos{" "}
        <span className="font-semibold text-hexagon dark:text-hexagon-foreground italic">
          soluciones de diseño y desarrollo web
        </span>{" "}
        para impulsar tu negocio.
      </p>

      <Button
        onClick={handleBudget}
        className=""
        size="lg"
        variant="default"
      >
        Solicita un presupuesto
      </Button>
    </header>
  );
}
