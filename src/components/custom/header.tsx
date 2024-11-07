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
    <header className="flex flex-col items-center justify-center text-center py-28">
      <h1
        className={`${merriweather.className} text-2xl lg:text-7xl font-black text-gray-800 dark:text-gray-400 mb-2 lg:mb-6`}
      >
        Crea tu sitio web con
      </h1>
      <span
        className={`${merriweather.className} text-6xl lg:text-9xl font-black text-chart-5 dark:text-chart-5 mb-6`}
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
        className="bg-gray-800 text-white hover:bg-gray-700 mt-10 mb-1o"
        size="lg"
        variant="default"
      >
        Solicita un presupuesto
      </Button>
    </header>
  );
}
