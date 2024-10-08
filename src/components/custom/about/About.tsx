"use client";

import { vollkorn } from "@/styles/fonts";
import Image from "next/image";
import { User, Globe, Target } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="flex flex-col items-center mx-auto text-center">
      <div className="mx-auto px-6">
        {/* Hero Section */}
        <div className="">
          <h1
            className={`${vollkorn.className} text-4xl lg:text-9xl font-extrabold text-slate-800 dark:text-slate-200 mb-6 my-20`}
          >
            Nuestro Equipo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Nuestro equipo está compuesto por personas que trabajan con un objetivo en mente: proporcionar soluciones que impulsen <span className="font-bold"> el éxito de tu negocio.</span>
          </p>
          <div className="grid lg:grid-cols-1">
            <section className="mb-8">
              <Image
                src="about/teclado-about.svg"
                alt="Ícono del Equipo"
                width={300}
                height={300}
                className="rounded-full border border-slate-300 dark:border-slate-500 mx-auto shadow-md"
              />
            </section>
          </div>
        </div>

        {/* Nuestra Misión */}
        <div className="text-center mb-12 py-12">
          <h2
            className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mb-12 max-w-5xl`}
          >
            Nuestra Misión
          </h2>
          <ul className="flex flex-col list-none space-y-4 max-w-2xl items-center justify-center mx-auto pt-12 gap-y-10">
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
                  <span className="font-bold"> la diferencia.</span>
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
                  nivel global, abordando los desafíos del <span className="font-bold">mundo moderno.</span> 
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
                  enfoques orientados a <span className="font-bold">objetivos.</span>
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
