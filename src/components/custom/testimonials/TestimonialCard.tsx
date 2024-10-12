import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar } from "./Avatar";
import { exo2 } from "@/styles/fonts";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="p-6 shadow-md">
      <CardContent className="flex flex-col justify-between items-center h-full border p-4 rounded-lg">
        {/* Renderizamos el Avatar usando la imagen desde testimonial.avatarUrl */}
        <Avatar src={testimonial.avatarUrl} name={testimonial.name} />
        <p className="text-lg text-gray-400 m-5">{testimonial.quote}</p>
        <div className="mt-4">
          <CardTitle className={exo2.className}>{testimonial.name}</CardTitle>
          <p className="text-sm text-gray-500">{testimonial.position}</p>
        </div>
      </CardContent>
    </Card>
  );
}
