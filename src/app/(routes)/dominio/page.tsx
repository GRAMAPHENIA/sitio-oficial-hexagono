// components/Dominio.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { vollkorn } from "@/styles/fonts";
import { Button } from "@/components/ui/button";
import { advantages } from "@/data/dominio";

const Dominio: React.FC = () => {
  const router = useRouter();

  const handleConsultation = () => {
    router.push("/#contact-form");
  };

  return (
    <section className="flex flex-col items-center mx-auto text-center pb-12">
      <div className="mx-auto px-6 mt-12 lg:mt-24">
        {/* Hero Section */}
        <div>
          <h1
            className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mt-5`}
          >
            Dominio
          </h1>
          <section>
            <p className="text-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-balance">
              El dominio es{" "}
              <span className="font-bold italic">la dirección</span> que las
              personas ingresan{" "}
              <span className="font-bold italic">
                para encontrar tu sitio web
              </span>{" "}
              en Internet.{" "}
              <span className="font-bold italic">Ofrecemos la gestión</span> y
              configuración de dominios, asegurando que esté vinculado
              correctamente a tu hosting y funcionando de forma óptima.
            </p>
          </section>
        </div>

        {/* Ventajas de Nuestro Enfoque */}
        <div className="text-center">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto py-4">
            {advantages.map((advantage, index) => (
              <li
                key={index}
                className="text-stone-700 dark:text-stone-300 flex flex-col items-center text-sm pt-10 justify-between"
              >
                <Image
                  src={advantage.imageSrc}
                  alt={`Imagen de un icono de ${advantage.imageAlt.toLowerCase()}`}
                  width={500}
                  height={500}
                  className="h-40 w-auto"
                />
                <section className="pt-10 pb-10 px-6 text-center">
                  <span
                    className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                  >
                    {advantage.title}
                  </span>
                  <p className="px-16 lg:px-0">{advantage.content}</p>
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

export default Dominio;
