import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar } from "./Avatar";
import { exo2 } from "@/styles/fonts";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="bg-transparent border-none shadow-none relative">
      <CardContent className="relative flex flex-col items-center h-full px-8 rounded-lg">
        {/* Avatar */}
        <div className="relative">
          <Avatar src={testimonial.avatarUrl} name={testimonial.name} />

          {/* Superposición de textos centrados */}
          <div className="absolute mt-10 inset-0 flex flex-col justify-center items-center text-center">
            <p className="text-md w-[230px] text-slate-600 z-10">{testimonial.quote}</p>
          </div>
        </div>

        {/* Información adicional debajo de la imagen */}
        <div className="z-50 mt-4 text-center">
          <CardTitle className={`${exo2.className} text-lg`}>{testimonial.name}</CardTitle>
          <p className="text-sm text-gray-500">{testimonial.position}</p>
        </div>
      </CardContent>
    </Card>
  );
}
