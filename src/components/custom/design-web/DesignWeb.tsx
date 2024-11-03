"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { vollkorn } from "@/styles/fonts";
import { Button } from "@/components/ui/button";
import BorderBeamCard from "../BorderBeamCard";

const advantages = [
  {
    title: "Diseño",
    content: "Nos aseguramos de que cada elemento del sitio no solo sea visualmente atractivo, sino también funcional y alineado con las metas de tu negocio.",
    imageSrc: "/web/dis-web.webp",
    imageAlt: "Imagen de un icono de diseño."
  },
  {
    title: "Conversión",
    content: "Optimizamos el diseño de tu sitio web para convertir visitantes en clientes, ajustándolo estratégicamente a los objetivos de tu negocio.",
    imageSrc: "/web/embudo.webp",
    imageAlt: "Imagen de un icono de conversión."
  },
  {
    title: "UX",
    content: "Enfocamos nuestros esfuerzos en crear una experiencia de usuario fluida y agradable, facilitando la navegación y el acceso a la información.",
    imageSrc: "/web/ux.webp",
    imageAlt: "Imagen de un icono de experiencia de usuario."
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
          <h1 className={`${vollkorn.className} text-4xl lg:text-9xl font-extrabold text-slate-800 dark:text-slate-200 mb-6 mt-10`}>
            Diseño Web
          </h1>
          <section className="mb-20">
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-balance">
              Desarrollamos sitios web atractivos y funcionales{" "}
              <span className="font-bold">para tu negocio</span>. Nos especializamos en diseñar{" "}
              <span className="font-bold">experiencias digitales únicas que reflejan la esencia de tu marca</span>{" "}
              y contribuyen al crecimiento de tu negocio.
            </p>
          </section>
        </div>

        {/* Característica Destacada Ventajas de Nuestro Enfoque */}
        <section className="relative max-w-3xl mx-auto mb-12 py-12">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-slate-500 to-teal-600 opacity-20 dark:opacity-10 h-[500px] blur-[50px]"></div>
          <BorderBeamCard
            title="Diseño Personalizado"
            content="Cada proyecto es único, y por eso, tu sitio web debe serlo también. Creamos diseños personalizados que capturan la identidad de tu marca y se adaptan a tus objetivos comerciales."
          />
        </section>

        {/* Ventajas de Nuestro Enfoque */}
        <div className="text-center mb-12 py-12">
          <h2 className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mb-12 max-w-5xl`}>
            Ventajas de nuestro enfoque para diseñar sitios web
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto py-12">
            {advantages.map((advantage, index) => (
              <li key={index} className="text-stone-700 dark:text-stone-300 flex flex-col items-center pt-10 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-card justify-between">
                <Image
                  src={advantage.imageSrc}
                  alt={advantage.imageAlt}
                  width={60}
                  height={60}
                />
                <section className="pt-10 pb-10 px-6 text-center">
                  <span className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}>
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
