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
    <header className="flex flex-col lg:flex-row justify-center items-center mb-40 mt-36 lg:mt-28 gap-10 lg:gap-40 max-w-7xl m-auto">
      <section className="flex flex-col items-center lg:items-start text-center lg:text-left ">
        {/* Titulo principal */}
        <h1
          className={`${merriweather.className} text-2xl lg:text-[50px] font-black text-slate-600 dark:text-slate-200 mb-2 lg:mt-20 lg:mb-6 text-center lg:text-left`}
        >
          Crea tu sitio web  con
        </h1>
        <span
          className={`${merriweather.className} text-5xl lg:text-[103px] font-black text-hexagon  dark:text-slate-400 mb-8`}
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

        <Button onClick={handleBudget} className="mb-24" size="lg" variant="default">
          Solicita un presupuesto
        </Button>
      </section>

      <section className="relative">
        <Image
          className="h-[200px] lg:h-[500px] w-auto animate-bounce-smooth z-10 bottom-0"
          width={1200} height={1200}
          src={"/hero-image/hero-image-dos.png"}
          alt={"Imagen vectorial de un sistema con dispositivos electronicos"} />

        {/* Imagen para modo light (base-header.png) */}
        {/* <Image
          className="lg:h-[600px] w-auto absolute -top-20 right-0 -z-10 hidden lg:block dark:hidden"
          width={1000}
          height={1000}
          src={"/base-header/base-header.png"}
          alt={"Imagen vectorial de un sistema con dispositivos electrónicos"}
        /> */}

        {/* Imagen para modo dark (base-header-dark.png) */}
        {/* <Image
          className="lg:h-[600px] w-auto absolute -top-20 right-0 -z-10 hidden lg:dark:block"
          width={1000}
          height={1000}
          src={"/base-header/base-header-dark.png"}
          alt={"Imagen vectorial de un sistema con dispositivos electrónicos"}
        /> */}


      </section>

    </header>
  );
}
