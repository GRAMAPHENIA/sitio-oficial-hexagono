// TODO: Refact this

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { vollkorn } from "@/styles/fonts";
import { Button } from "@/components/ui/button";

const advantages = [
  {
    title: "Diseño",
    content:
      "Nos aseguramos de que cada elemento del sitio no solo sea visualmente atractivo, sino también funcional y alineado con las metas de tu negocio.",
    imageSrc: "/icons/web-design/diseno.png",
    imageAlt: "Imagen de un icono de diseño.",
  },
  {
    title: "Conversión",
    content:
      "Optimizamos el diseño de tu sitio web para convertir visitantes en clientes, ajustándolo estratégicamente a los objetivos de tu negocio.",
    imageSrc: "/icons/web-design/conversion.png",
    imageAlt: "Imagen de un icono de conversión.",
  },
  {
    title: "UX",
    content:
      "Enfocamos nuestros esfuerzos en crear una experiencia de usuario fluida y agradable, facilitando la navegación y el acceso a la información.",
    imageSrc: "/icons/web-design/ux.png",
    imageAlt: "Imagen de un icono de experiencia de usuario.",
  },
];

const DesignWeb = () => {
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
            Diseño Web
          </h1>
          <section>
            <p className="text-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-balance">
              Desarrollamos sitios web atractivos y funcionales{" "}
              <span className="font-bold italic">para tu negocio</span>. Nos
              especializamos en diseñar{" "}
              <span className="font-bold italic">
                experiencias digitales únicas que reflejan la esencia de tu
                marca
              </span>{" "}
              y contribuyen al crecimiento de tu negocio.
            </p>
          </section>
        </div>

        {/* Ventajas de Nuestro Enfoque */}
        <div className="text-center">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto py-12">
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
                <section className="pt-10 pb-10 px-6 text-center">
                  <span
                    className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                  >
                    {advantage.title}
                  </span>
                  <p className="mt-5">{advantage.content}</p>
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

export default DesignWeb;
