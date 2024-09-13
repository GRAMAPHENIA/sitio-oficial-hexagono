"use client";

import { Button } from "@/components/ui/button";
import { Merriweather } from "next/font/google";
import { useRouter } from "next/navigation";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Header() {
  const router = useRouter();

  const handleBudget = () => {
    router.push("/#contact-form");
  };

  return (
    <header className="flex flex-col items-center justify-center bg-white  dark:bg-card text-center  py-28 border-b border-black/20 shadow-xl ">
      <h1
        className={`${merriweather.className} text-3xl lg:text-7xl font-black text-gray-800 dark:text-gray-400 lg:mb-6`}
      >
        Crea tu sitio web con
      </h1>
      <span
        className={`${merriweather.className} text-6xl lg:text-9xl font-black text-gray-600 dark:text-gray-300 mb-6`}
      >
        Hexágono
      </span>
      <p className="text-xl text-gray-500 dark:text-gray-300 max-w-sm md:max-w-md lg:max-w-lg mb-16">
        Ofrecemos soluciones de diseño y desarrollo web para impulsar tu
        negocio.
      </p>
      <Button
        onClick={handleBudget}
        className="bg-gray-800 text-white hover:bg-gray-700 mt-10 mb-1o"
        size="lg"
        variant="default"
      >
        Solicita un presupuesto
      </Button>
    </header>
  );
}
