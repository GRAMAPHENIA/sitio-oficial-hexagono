"use client";

import { mockTestimonials } from "@/data/mockTestimonials";
import { vollkorn } from "@/styles/fonts";
import TestimonialCard from "./TestimonialCard";

// Componente principal que muestra la sección de testimonios
export default function TestimonialsSection() {
  return (
    <section className="flex flex-col justify-center items-center text-center mt-24">
      {/* Título de la sección */}
      <h2
        className={`${vollkorn.className} text-4xl lg:text-7xl font-black text-slate-600 dark:text-slate-300`}
      >
        ¿Qué dicen nuestros clientes?
      </h2>
      {/* Descripción de la sección */}
      <p className="text-xl text-gray-500 dark:text-gray-300 max-w-sm md:max-w-md lg:max-w-lg mb-16">
        Descubrí lo que nuestros clientes tienen para decir sobre su experiencia
        con nuestros servicios.
      </p>
      {/* Contenedor de los testimonios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {mockTestimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
