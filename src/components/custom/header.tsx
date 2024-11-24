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
    <header className="flex flex-col lg:flex-row justify-center items-center mb-40 mt-10 gap-40 max-w-7xl m-auto">
      <section className="flex flex-col items-start text-left px-10">
        {/* Titulo principal */}
        <h1
          className={`${merriweather.className} text-2xl lg:text-[50px] font-black text-slate-600 dark:text-slate-200 mb-2 mt-20 lg:mb-6 text-left`}
        >
          Crea <span className="dark:text-blue-200">tu sitio web</span>  con
        </h1>
        <span
          className={`${merriweather.className} text-6xl lg:text-[103px] font-black text-hexagon dark:text-slate-400 mb-8`}
        >
          Hexágono
        </span>
        <p className="lg:text-lg text-slate-500 dark:text-slate-400 max-w-72 md:max-w-md lg:max-w-lg mb-16">
          Ofrecemos{" "}
          <span className="font-semibold text-hexagon dark:text-slate-300 italic">
            soluciones de diseño y desarrollo web
          </span>{" "}
          para impulsar tu negocio.
        </p>

        <Button onClick={handleBudget} className="" size="lg" variant="default">
          Solicita un presupuesto
        </Button>
      </section>

      <section className="relative">
        <Image
          className="h-[400px] w-auto animate-bounce-smooth z-10 bottom-0 px-16"
          width={1200} height={1100}
          src={"/hero-image/hero-image.png"}
          alt={"Imagen vectorial de un sistema con dispositivos electronicos"} />
        <Image
          className="h-[600px] w-auto absolute -top-20 right-0 -z-10 dark:hidden"
          width={1000} height={1000}
          src={"/base-header/base-header.png"}
          alt={"Imagen vectorial de un sistema con dispositivos electronicos"} />
        <Image
          className="h-[600px] w-auto absolute -top-20 right-0 -z-10 hidden dark:block"
          width={1000} height={1000}
          src={"/base-header/base-header-dark.png"}
          alt={"Imagen vectorial de un sistema con dispositivos electronicos"} />
      </section>

    </header>
  );
}
