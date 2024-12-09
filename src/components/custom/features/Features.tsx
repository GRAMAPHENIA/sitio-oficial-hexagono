"use client";

import { vollkorn } from "@/styles/fonts";
import { featuresData } from "@/data/featuresData";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <div className="flex flex-col justify-center items-center text-center my-20 max-w-7xl">

      {/* Título de la sección */}
      <h1
        className={`${vollkorn.className} text-3xl md:text-5xl lg:text-7xl font-black text-slate-600 dark:text-slate-300 px-4`}
      >
        Características
      </h1>

      {/* Contenedor de las caracteristicas */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </section>
    </div>
  );
}
