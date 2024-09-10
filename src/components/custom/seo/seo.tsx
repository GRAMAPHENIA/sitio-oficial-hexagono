'use client'

import { Button } from "@/components/ui/button";
import { vollkorn } from "@/styles/fonts";
import Image from "next/image";
import { CheckCircle } from "lucide-react"; // Importa el ícono CheckCircle
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useRouter } from "next/navigation";

const SEO = () => {
  const router = useRouter();

  const handleConsultation = () => {
    router.push("/#contact-form"); // Añade el ID del formulario a la URL
  };

  return (
    <section className="flex flex-col items-center mx-auto text-center pb-12">
      <div className="mx-auto px-6">
        {/* Hero Section */}
        <div className="mb-12">
          <h1
            className={`${vollkorn.className} text-4xl lg:text-9xl font-extrabold text-slate-800 dark:text-slate-200 mb-6 my-20`}
          >
            SEO
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Optimización para Motores de Búsqueda. Mejoramos la visibilidad de
            tu sitio web en los resultados de búsqueda, aumentando su tráfico y
            posicionamiento en Google y otros buscadores.
          </p>
          <section className="mb-8">
            <Image
              src="/features/icono-seo.svg"
              alt="Ícono de SEO"
              width={300}
              height={300}
              className="rounded-full border border-slate-300 dark:border-slate-500 mx-auto shadow-md"
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
                Posicionamiento en Buscadores
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              <p>
                Implementamos estrategias avanzadas de SEO para mejorar la
                visibilidad de tu sitio web en los motores de búsqueda, lo que
                resulta en un aumento de tráfico orgánico y mejores posiciones
                en Google.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Ventajas de Nuestro Enfoque */}
        <div className="text-center mb-12 py-12">
          <h2
            className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mb-12 max-w-4xl`}
          >
            Ventajas de nuestro enfoque para SEO
          </h2>
          <ul className="flex flex-col list-none space-y-4 max-w-2xl items-center justify-center mx-auto py-12 gap-y-10">
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0">
              <CheckCircle className="text-stone-500 h-20 w-20" />
              <section className="pt-10 pb-20 ">
                <span
                  className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                >
                  Mayor Visibilidad:
                </span>
                <p>
                  Aumentamos la presencia de tu sitio web en los motores de
                  búsqueda, lo que mejora significativamente su exposición y
                  alcance.
                </p>
              </section>
            </li>
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0">
              <CheckCircle className="text-stone-500 h-20 w-20" />
              <section className="pt-10 pb-20">
                <span
                  className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                >
                  Incremento de Tráfico Orgánico:
                </span>
                <p>
                  Nuestras técnicas de SEO están diseñadas para atraer más
                  visitantes relevantes, mejorando el tráfico sin necesidad de
                  publicidad pagada.
                </p>
              </section>
            </li>
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0">
              <CheckCircle className="text-stone-500 h-20 w-20" />
              <section className="pt-10 pb-20">
                <span
                  className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                >
                  Optimización Continua:
                </span>
                <p>
                  Nos encargamos de actualizar y ajustar continuamente tu
                  estrategia de SEO para adaptarla a las nuevas tendencias y
                  algoritmos.
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

export default SEO;
