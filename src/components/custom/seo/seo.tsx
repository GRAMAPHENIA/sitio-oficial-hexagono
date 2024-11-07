// TODO: Refact this

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { vollkorn } from "@/styles/fonts";

const seoAdvantages = [
  {
    title: "Visibilidad",
    content:
      "Aumentamos la presencia de tu sitio web en los motores de búsqueda, lo que mejora significativamente su exposición y alcance.",
    imageSrc: "/icons/custom-dev/soluciones.png",
  },
  {
    title: "Tráfico",
    content:
      "Nuestras técnicas de SEO están diseñadas para atraer más visitantes, mejorando el tráfico sin necesidad de publicidad pagada.",
    imageSrc: "/icons/custom-dev/soluciones.png",
  },
  {
    title: "Optimización",
    content:
      "Nos encargamos continuamente tu estrategia de SEO para adaptarla a las nuevas tendencias y algoritmos.",
    imageSrc: "/icons/custom-dev/soluciones.png",
  },
];

const SEO = () => {
  const router = useRouter();

  const handleConsultation = () => {
    router.push("/#contact-form");
  };

  return (
    <section className="flex flex-col items-center mx-auto text-center pb-12">
      <div className="mx-auto px-6 mt-12">
        {/* Hero Section */}
        <div>
          <h1
            className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mt-5`}
          >
            SEO
          </h1>
          <p className="text-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-balance">
            Optimización para Motores de Búsqueda. Mejoramos la visibilidad de
            tu sitio web en los resultados de búsqueda, aumentando su tráfico y
            posicionamiento en Google y otros buscadores.
          </p>
        </div>

        {/* Ventajas de Nuestro Enfoque */}
        <div className="text-center">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto py-12">
            {seoAdvantages.map((advantage, index) => (
              <li
                key={index}
                className="text-stone-700 dark:text-stone-300 flex flex-col items-center text-sm pt-10 justify-between"
              >
                <Image
                  src={advantage.imageSrc}
                  alt={`Imagen de un icono de ${advantage.title.toLowerCase()}`}
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
                  <p className="px-16 lg:px-0 text-balance">{advantage.content}</p>
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

export default SEO;
