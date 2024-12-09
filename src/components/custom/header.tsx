// Ruta: components/custom/header/Header.tsx

"use client";

import { Button } from "@/components/ui/button";
import { useScrollToForm } from "@/hooks/useScrollToForm";
import { Merriweather } from "next/font/google";
import Image from "next/image";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Header() {
  const handleBudget = useScrollToForm();

  return (
    <header
      className="flex flex-col lg:flex-row justify-center items-center mb-20 mt-36 lg:mt-28 gap-10 lg:gap-40 max-w-7xl m-auto px-6 sm:px-10"
      role="banner"
    >
      <section className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1
          className={`${merriweather.className} text-slate-600 dark:text-slate-200 font-black mb-2 lg:mt-20 lg:mb-6`}
          style={{ fontSize: "clamp(1.5rem, 5vw, 3.125rem)" }}
        >
          Crea tu sitio web con
        </h1>
        <span
          className={`${merriweather.className} text-hexagon dark:text-slate-400 font-black mb-8`}
          style={{ fontSize: "clamp(2.5rem, 8vw, 6.4375rem)" }}
        >
          Hexágono
        </span>
        <p className="lg:text-lg text-slate-500 dark:text-slate-400 max-w-72 md:max-w-md lg:max-w-lg mb-16 px-4">
          Ofrecemos{" "}
          <span className="font-semibold text-hexagon dark:text-slate-300 italic">
            soluciones de diseño y desarrollo web
          </span>{" "}
          para impulsar tu negocio.
        </p>
        <Button
          onClick={handleBudget}
          aria-label="Solicitar presupuesto"
          className="mb-24"
          size="lg"
          variant="default"
        >
          Solicita un presupuesto
        </Button>
      </section>

      <section className="relative">
        <Image
          className="h-[300px] sm:h-[300px] lg:h-[500px] w-auto animate-bounce-smooth z-10"
          width={1200}
          height={1200}
          src={"/hero-image/hero-image-dos.png"}
          alt="Ilustración de un sistema con dispositivos electrónicos en un diseño futurista"
          priority
        />
      </section>
    </header>
  );
}
