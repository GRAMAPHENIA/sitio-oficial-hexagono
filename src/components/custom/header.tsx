"use client";

import { Button } from "@/components/ui/button";
import { Merriweather } from "next/font/google";
import Image from "next/image";
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
    <header className="flex flex-col lg:flex-row justify-center items-center text-center mb-40 mt-10 gap-40 ">
      <section className="flex flex-col items-center text-center p-20">
        <h1
          className={`${merriweather.className} text-2xl lg:text-[50px] font-black text-slate-600 dark:text-slate-300 mb-2 lg:mb-6`}
        >
          Crea tu sitio web con
        </h1>
        <span
          className={`${merriweather.className} text-6xl lg:text-8xl font-black text-hexagon dark:text-hexagon mb-8`}
        >
          Hexágono
        </span>
        <p className="lg:text-lg text-gray-500 dark:text-gray-400 max-w-72 md:max-w-md lg:max-w-lg mb-16">
          Ofrecemos{" "}
          <span className="font-semibold text-hexagon dark:text-hexagon-foreground italic">
            soluciones de diseño y desarrollo web
          </span>{" "}
          para impulsar tu negocio.
        </p>

        <Button onClick={handleBudget} className="" size="lg" variant="default">
          Solicita un presupuesto
        </Button>
      </section>

      <section>
        <Image
          className="h-[600px] w-auto animate-bounce-smooth relative z-10 bottom-12"
          width={1100} height={1100}
          src={"/hero-image/hero-image.png"}
          alt={"Imagen vectorial de un sistema con dispositivos electronicos"} />
        <Image
          className="h-[680px] w-auto absolute top-0 right-0 mt-10 -z-10"
          width={1000} height={1000}
          src={"/platform/platform.png"}
          alt={"Imagen vectorial de un sistema con dispositivos electronicos"} />
      </section>

    </header>
  );
}
