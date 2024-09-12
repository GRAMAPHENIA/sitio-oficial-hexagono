"use client";

import { vollkorn } from "@/styles/fonts";
import Image from "next/image";
import { User, Globe, Target } from "lucide-react"; // Importa los íconos necesarios
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <section className="flex flex-col items-center mx-auto text-center pb-12">
      <div className="mx-auto px-6">
        {/* Hero Section */}
        <div className="">
          <h1
            className={`${vollkorn.className} text-4xl lg:text-9xl font-extrabold text-slate-800 dark:text-slate-200 mb-6 my-20`}
          >
            Nuestro Equipo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Nuestro equipo está compuesto por profesionales apasionados y
            dedicados que trabajan con un objetivo en mente: proporcionar
            soluciones excepcionales que impulsen el éxito de tu negocio.
          </p>
          <div className="grid lg:grid-cols-1">
            <section className="mb-8">
              <Image
                src="/about/about-keyboard.png"
                alt="Ícono del Equipo"
                width={300}
                height={300}
                className="rounded-full border border-slate-300 dark:border-slate-500 mx-auto shadow-md"
              />
            </section>
            {/* <section className="mb-8">
              <Image
                src="/about/"
                alt="Ícono del Equipo"
                width={300}
                height={300}
                className="rounded-full border border-slate-300 dark:border-slate-500 mx-auto shadow-md"
              />
            </section> */}
          </div>
        </div>

        {/* Información del Equipo */}
        {/* <section className="max-w-3xl mx-auto mb-12 py-12">
          <Card className="p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg">
            <CardHeader>
              <CardTitle
                className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mb-6`}
              >
                Nuestro Equipo
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              <p>
                Contamos con un equipo diverso y altamente calificado que
                combina experiencia técnica con creatividad. Cada miembro aporta
                un conjunto único de habilidades y perspectivas para garantizar
                que cada proyecto sea un éxito.
              </p>
            </CardContent>
          </Card>
        </section> */}

        {/* Nuestra Misión */}
        <div className="text-center mb-12 py-12">
          <h2
            className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mb-12 max-w-5xl`}
          >
            Nuestra Misión
          </h2>
          <ul className="flex flex-col list-none space-y-4 max-w-2xl items-center justify-center mx-auto py-12 gap-y-10">
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0 bg-white dark:bg-card">
              <User className="text-stone-500 h-20 w-20" />
              <section className="pt-10 pb-20">
                <span
                  className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                >
                  Compromiso con el Usuario:
                </span>
                <p>
                  Nos dedicamos a entender y satisfacer las necesidades de
                  nuestros clientes para ofrecer soluciones que realmente hagan
                  la diferencia.
                </p>
              </section>
            </li>
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0 bg-white dark:bg-card">
              <Globe className="text-stone-500 h-20 w-20" />
              <section className="pt-10 pb-20">
                <span
                  className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                >
                  Impacto Global:
                </span>
                <p>
                  Nuestra misión es generar un impacto positivo y duradero a
                  nivel global, ofreciendo soluciones innovadoras que aborden
                  los desafíos del mundo moderno.
                </p>
              </section>
            </li>
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0 bg-white dark:bg-card">
              <Target className="text-stone-500 h-20 w-20" />
              <section className="pt-10 pb-20">
                <span
                  className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                >
                  Enfoque en Resultados:
                </span>
                <p>
                  Estamos comprometidos a entregar resultados que superen las
                  expectativas, utilizando estrategias basadas en datos y
                  enfoques orientados a objetivos.
                </p>
              </section>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
