// Ruta: components/custom/testimonials/TestimonialCard.tsx

import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { exo2 } from "@/styles/fonts";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card
      key={testimonial.id}
      className="border-none bg-transparent shadow-none relative my-10"
      role="listitem"
    >
      {/* Contenedor de la imagen y el contenido */}
      <div className="relative w-full h-[550px] overflow-hidden" aria-labelledby={`testimonial-${testimonial.id}`}>

        {/* Imagen de fondo para modo claro */}
        <Image
          src={testimonial.imageLight}
          alt={`Fondo testimonial de ${testimonial.name}`}
          width={600}
          height={600}
          className="absolute top-0 left-0 w-full h-full object-contain block dark:hidden"
          priority
        />

        {/* Imagen de fondo para modo oscuro */}
        <Image
          src={testimonial.imageDark}
          alt={`Fondo testimonial oscuro de ${testimonial.name}`}
          width={600}
          height={600}
          className="absolute top-0 left-0 w-full h-full object-contain hidden dark:block"
          priority
        />

        {/* Contenido superpuesto */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-center text-left px-4"
          role="group"
          aria-labelledby={`testimonial-${testimonial.id}`}
        >
          {/* Cita */}
          <p
            id={`testimonial-quote-${testimonial.id}`}
            className="text-sm text-center w-[180px] text-slate-800/90 z-10 mb-4 mt-4 px-2 text-balance"
          >
            {testimonial.quote}
          </p>

          {/* Nombre */}
          <CardTitle
            id={`testimonial-${testimonial.id}`}
            className={`${exo2.className} text-center text-lg font-semibold text-slate-800/90 z-10 mb-2`}
          >
            {testimonial.name}
          </CardTitle>

          {/* Información adicional */}
          <p
            aria-describedby={`testimonial-quote-${testimonial.id}`}
            className="text-sm text-slate-300 dark:text-slate-600 z-10"
          >
            {testimonial.position}
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-800 z-10">
            {testimonial.specialty}
          </p>
        </div>
      </div>
    </Card>
  );
}
