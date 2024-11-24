import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { exo2 } from "@/styles/fonts";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card key={testimonial.id} className="border-none bg-transparent shadow-none relative my-10">
      <div className="relative w-full h-[550px] overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src={testimonial.imageLight}
          alt="Fondo Testimonial"
          width={600}
          height={600}
          className="absolute top-0 left-0 w-full h-full object-contain block dark:hidden"
        />
        <Image
          src={testimonial.imageDark}
          alt="Fondo Testimonial Oscuro"
          width={600}
          height={600}
          className="absolute top-0 left-0 w-full h-full object-contain hidden dark:block"
        />

        {/* Contenido superpuesto */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-left">
          {/* Cita */}
          <p className="text-sm w-[180px] text-slate-800/90 z-10 mb-4 mt-4 px-2 text-balance ">
            {testimonial.quote}
          </p>

          {/* Nombre */}
          <CardTitle
            className={`${exo2.className} text-left text-lg font-semibold text-slate-800/90 z-10 mb-2`}
          >
            {testimonial.name}
          </CardTitle>

          {/* Información adicional */}
          <p className="text-sm text-slate-300 dark:text-slate-600 z-10">{testimonial.position}</p>
          <p className="text-xs text-slate-400 dark:text-slate-800 z-10">{testimonial.specialty}</p>
        </div>
      </div>
    </Card>
  );
}
