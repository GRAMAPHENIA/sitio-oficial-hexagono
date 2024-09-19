"use client";

import { Special_Elite } from "next/font/google";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

export default function NotFound() {
  const router = useRouter();

  const handleConsultation = () => {
    router.push("/");
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center mt-60 px-4">
        <h2
          className={`${specialElite.className} text-9xl font-extrabold text-slate-800 dark:text-slate-200`}
        >
          404
        </h2>
        <p
          className={`${specialElite.className} lg:text-xl text-slate-800 dark:text-slate-200 text-center `}
        >
          Lo sentimos, pero no pudimos encontrar la página solicitada.
        </p>
        <Button onClick={handleConsultation} className="mt-10">
          Volver a Hexágono
        </Button>
      </section>
    </>
  );
}
