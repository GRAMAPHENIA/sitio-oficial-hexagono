"use client";

import { vollkorn } from "@/styles/fonts";
import { featuresData } from "@/data/featuresData";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <div className="flex flex-col justify-center items-center text-center lg:my-10 max-w-7xl">
      {/* Título de la sección */}
      <h1
        className={`${vollkorn.className} text-4xl lg:text-7xl font-black text-slate-600 dark:text-slate-300 px-4 mb-20 lg:mb-0`}
      >
        Características
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-6 lg:py-10">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </section>
    </div>
  );
}
