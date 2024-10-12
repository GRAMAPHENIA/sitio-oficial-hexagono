"use client";

import { Button } from "@/components/ui/button";
import { vollkorn } from "@/styles/fonts";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useRouter } from "next/navigation";

const CustomDevelopment = () => {
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
            Desarrollo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Soluciones personalizadas para tu negocio. Creamos aplicaciones y
            funcionalidades a medida, ajustadas a los objetivos de
            <span className="font-bold "> tu empresa</span>.
          </p>
          <section className="mb-8">
            <Image
              src="/features/icono-plano-regla-lapiz.svg"
              alt="Ícono de Código"
              width={300}
              height={300}
              className="rounded-full border border-slate-300 dark:border-slate-500 mx-auto shadow-inner"
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
                Desarrollo Personalizado
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              <p>
                Adaptamos cada proyecto a las necesidades específicas de tu
                negocio. Desde funcionalidades únicas hasta integraciones
                complejas, creamos soluciones que se ajustan a tus requisitos
                exactos y aportan valor real.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Ventajas de Nuestro Enfoque */}
        <div className="text-center mb-12 py-12">
          <h2
            className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mb-12 max-w-5xl`}
          >
            Ventajas de nuestro enfoque para el desarrollo a medida
          </h2>
          <ul className="flex flex-col list-none space-y-4 max-w-2xl items-center justify-center mx-auto py-12 gap-y-10">
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center pt-20 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0 lg:px-10 bg-white dark:bg-card">
              <Image
                src={"/web/diseno.webp"}
                alt="Imagen de un icono de diseño."
                width={100}
                height={100}
              />
              <section className="pt-10 pb-20">
                <span
                  className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                >
                  Soluciones Adaptadas:
                </span>
                <p>
                  Cada funcionalidad es creada para satisfacer tus necesidades
                  específicas, asegurando que cada detalle esté alineado con tus
                  objetivos.
                </p>
              </section>
            </li>
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center pt-20 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0 lg:px-10 bg-white dark:bg-card">
              <Image
                src={"/web/diseno.webp"}
                alt="Imagen de un icono de diseño."
                width={100}
                height={100}
              />
              <section className="pt-10 pb-20">
                <span
                  className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                >
                  Escalabilidad y Flexibilidad:
                </span>
                <p>
                  Nuestros desarrollos permiten la expansión y adaptación
                  conforme a la evolución de tu negocio.
                </p>
              </section>
            </li>
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center pt-20 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0 lg:px-10 bg-white dark:bg-card">
              <Image
                src={"/web/diseno.webp"}
                alt="Imagen de un icono de diseño."
                width={100}
                height={100}
              />
              <section className="pt-10 pb-20">
                <span
                  className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                >
                  Integraciones Efectivas:
                </span>
                <p>
                Implementamos soluciones que se integran con tus herramientas y sistemas actuales para maximizar la eficiencia.
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

export default CustomDevelopment;
