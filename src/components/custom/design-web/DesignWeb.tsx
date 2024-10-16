"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { vollkorn } from "@/styles/fonts";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const DesignWeb = () => {
  const router = useRouter();

  const handleConsultation = () => {
    router.push("/#contact-form");
  };

  return (
    <section className="flex flex-col items-center mx-auto text-center pb-12">
      <div className="mx-auto px-6">
        {/* Hero Section */}
        <div className="mb-12">
          <h1
            className={`${vollkorn.className} text-4xl lg:text-9xl font-extrabold text-slate-800 dark:text-slate-200 mb-6 my-20`}
          >
            Diseño Web
          </h1>
          <section className="mb-20 ">
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Desarrollamos sitios web atractivos y funcionales para tu negocio.
            Nos especializamos en diseñar experiencias digitales únicas que
            reflejan la esencia de tu marca y contribuyen al crecimiento de tu
            negocio.
          </p>
            <Image
              src="/features/icono-computadora-mouse.webp"
              alt="Ícono de Computadora y Mouse"
              width={400}
              height={400}
              className="mx-auto"
            />
          </section>
        </div>

        {/* Característica Destacada */}
        <section className="max-w-3xl mx-auto mb-12 py-12">
          <Card className="p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg">
            <CardHeader>
              <CardTitle
                className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mb-6`}
              >
                Diseño Personalizado
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              <p>
                Cada proyecto es único, y por eso, tu sitio web debe serlo
                también. Creamos diseños personalizados que capturan la
                identidad de tu marca y se adaptan a tus objetivos comerciales.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Ventajas de Nuestro Enfoque */}
        <div className="text-center mb-12 py-12">
          <h2
            className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mb-12 max-w-5xl`}
          >
            Ventajas de nuestro enfoque para diseñar sitios web
          </h2>
          <ul className="flex flex-col list-none space-y-4 max-w-2xl items-center justify-center mx-auto py-12 gap-y-10">
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center pt-20 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0 lg:px-10 bg-white dark:bg-card">
              <Image
                src={"/web/dis-web.webp"}
                alt="Imagen de un icono de diseño."
                width={100}
                height={100}
              />

              <section className="pt-10 pb-20">
                <span
                  className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                >
                  Diseño Atractivo y Funcional:
                </span>
                <p>
                  Nos aseguramos de que cada elemento del sitio no solo sea
                  visualmente atractivo, sino también funcional y alineado con
                  las metas de tu negocio.
                </p>
              </section>
            </li>
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center pt-20 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0 lg:px-10 bg-white dark:bg-card">
              <Image
                src={"/web/embudo.webp"}
                alt="Imagen de un icono de conversion."
                width={100}
                height={100}
              />

              <section className="pt-10 pb-20">
                <span
                  className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                >
                  Optimización para Conversión:
                </span>
                <p>
                Optimizamos el diseño de tu sitio web para convertir visitantes en clientes, ajustándolo estratégicamente a los objetivos de tu negocio.
                </p>
              </section>
            </li>
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center pt-20 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0 lg:px-10 bg-white dark:bg-card">
              <Image
                src={"/web/experiencia-de-usuario.webp"}
                alt="Imagen de un icono de experiencia de usuario."
                width={100}
                height={100}
              />
              <section className="pt-10 pb-20">
                <span
                  className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                >
                  Experiencia de Usuario:
                </span>
                <p>
                  Enfocamos nuestros esfuerzos en crear una experiencia de
                  usuario fluida y agradable, facilitando la navegación y el
                  acceso a la información.
                </p>
              </section>
            </li>
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
