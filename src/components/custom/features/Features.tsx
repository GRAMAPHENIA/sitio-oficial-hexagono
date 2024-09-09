"use client";

import { vollkorn } from "@/styles/fonts";
import { featuresData } from "@/data/featuresData";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-24">
      <h1
        className={`${vollkorn.className} text-4xl lg:text-7xl font-black text-slate-600 dark:text-slate-300`}
      >
        Características
      </h1>
      <p className="text-xl text-gray-500 dark:text-gray-300 max-w-sm md:max-w-md lg:max-w-lg mb-16">
        Explora lo que hace que nuestro desarrollo y diseño web sean la mejor
        opción para impulsar tu negocio.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </section>
    </div>
  );
}
