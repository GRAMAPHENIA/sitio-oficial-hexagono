"use client";

import Image from "next/image";
import { vollkorn } from "@/styles/fonts";
import { hostingData } from "@/data/hostingData";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Hosting = () => {
  const router = useRouter();

  const handleConsultation = () => {
    router.push("/#contact-form");
  };

  return (
    <section className="flex flex-col items-center mx-auto text-center pb-12">
      <div className="mx-auto px-6 mt-12">
        <div>
          <h1
            className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mt-5`}
          >
            Hosting
          </h1>
          <section>
            <p className="text-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-balance">
              Alojamos tu sitio con tecnología avanzada para{" "}
              <span className="font-bold italic">garantizar rendimiento</span> y{" "}
              <span className="font-bold italic">seguridad</span>, facilitando
              el crecimiento de tu presencia digital.
            </p>
          </section>
        </div>

        <div className="text-center">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto pt-12 pb-2">
            {hostingData.map((feature, index) => (
              <li
                key={index}
                className="text-stone-700 dark:text-stone-300 flex flex-col items-center text-sm pt-10 justify-between"
              >
                <Image
                  src={feature.imageSrc}
                  alt={`Imagen de un icono de ${feature.imageAlt.toLowerCase()}`}
                  width={500}
                  height={500}
                  className="h-40 w-auto"
                />
                <section className="pt-10 pb-10 px-6 text-center">
                  <span
                    className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                  >
                    {feature.title}
                  </span>
                  <p className="px-16 lg:px-0">{feature.content}</p>
                </section>
              </li>
            ))}
          </ul>
        </div>
        {/* CTA Final */}
        <Button onClick={handleConsultation}>
          Solicita una consulta gratuita
        </Button>
      </div>
    </section>
  );
};

export default Hosting;
