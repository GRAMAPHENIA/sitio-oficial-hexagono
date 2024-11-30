// TODO: Refact this

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { vollkorn } from "@/styles/fonts";

const advantages = [
  {
    title: "Soluciones",
    content:
      "Cada funcionalidad es creada para satisfacer tus necesidades específicas, asegurando que cada detalle esté alineado con tus objetivos.",
    imageSrc: "/icons/features/custom-dev/soluciones.webp",
  },
  {
    title: "Escalabilidad",
    content:
      "Nuestros desarrollos permiten la expansión y adaptación conforme a la evolución de tu negocio.",
    imageSrc: "/icons/features/custom-dev/escalabilidad.webp",
  },
  {
    title: "Integraciones",
    content:
      "Implementamos soluciones que se integran con tus herramientas y sistemas actuales para maximizar la eficiencia.",
    imageSrc: "/icons/features/custom-dev/integraciones.webp",
  },
];

const CustomDevelopment = () => {
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
            Desarrollo
          </h1>
          <p className="text-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-balance">
            <span className="font-bold italic">Soluciones personalizadas</span>{" "}
            para tu negocio. Nos dedicamos a crear aplicaciones y{" "}
            <span className="font-bold italic">funcionalidades a medida</span>,
            diseñadas para cubrir las necesidades específicas
            <span className="font-bold italic"> de tu empresa</span> y ayudarte
            a alcanzar tus metas.
          </p>
        </div>

        <div className="text-center">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto py-4">
            {advantages.map((advantage, index) => (
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
                <section className="py-10 px-6 text-center">
                  <span
                    className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                  >
                    {advantage.title}
                  </span>
                  <p className="px-16 lg:px-0 text-balance">
                    {advantage.content}
                  </p>
                </section>
              </li>
            ))}
          </ul>
        </div>

        <Button onClick={handleConsultation}>
          Solicita una consulta gratuita
        </Button>
      </div>
    </section>
  );
};

export default CustomDevelopment;
