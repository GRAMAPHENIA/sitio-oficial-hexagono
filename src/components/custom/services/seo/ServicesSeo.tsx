"use client";

import Image from "next/image";
import { vollkorn } from "@/styles/fonts";
import { Button } from "@/components/ui/button";
import { seo } from "@/data/seo";
import { useRouter } from "next/navigation";

const Seo = () => {
  const router = useRouter();

  const handleConsultation = () => {    
    router.push("/#contact-form");
  };

  return (
    <section className="flex flex-col items-center mx-auto text-center pb-12">
      <div className="mx-auto px-6 mt-12 lg:mt-24">
        <div>
          <h1
            className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mt-5`}
          >
            SEO
          </h1>
          <section>
            <p className="text-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-balance">
              Optimiza la visibilidad de tu sitio web con nuestras estrategias
              de SEO, diseñadas para incrementar el tráfico y mejorar el
              posicionamiento en los motores de búsqueda.
            </p>
          </section>
        </div>

        <div className="text-center">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto py-12">
            {seo.map((item, index) => (
              <li
                key={index}
                className="text-stone-700 dark:text-stone-300 flex flex-col items-center text-sm pt-10 justify-between"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={500}
                  height={500}
                  className="h-40 w-auto"
                />
                <section className="pt-10 pb-10 px-6 text-center">
                  <span
                    className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                  >
                    {item.title}
                  </span>
                  <p className="px-16 lg:px-0">{item.content}</p>
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

export default Seo;
