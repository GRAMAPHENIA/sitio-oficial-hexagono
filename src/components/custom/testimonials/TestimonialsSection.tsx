"use client";

import { mockTestimonials } from "@/data/mockTestimonials"; // Asegúrate de que el archivo y los datos están correctamente importados
import { vollkorn } from "@/styles/fonts";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="flex flex-col justify-center items-center text-center lg:mb-20 py-10 px-6 md:px-16 lg:px-40 max-w-7xl">
      {/* Título de la sección */}
      <h2
        className={`${vollkorn.className} text-3xl md:text-5xl lg:text-7xl font-black text-slate-600 dark:text-slate-300`}
      >
        ¿Qué dicen nuestros clientes?
      </h2>

      {/* Espaciado entre el título y las tarjetas */}
      <div className="my-4"></div>

      {/* Contenedor de los testimonios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full">
        {mockTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
