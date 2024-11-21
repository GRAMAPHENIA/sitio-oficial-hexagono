import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar } from "./Avatar";
import { exo2 } from "@/styles/fonts";
import type { Testimonial } from "@/types/testimonial";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="bg-transparent border-none shadow-none relative">
      <CardContent className="flex flex-col justify-between items-center h-full border px-24 rounded-lg border-none">
        <Avatar src={testimonial.avatarUrl} name={testimonial.name} />
        <p className="text-lg w-[230px] text-slate-600 text-center -translate-y-12 -translate-x-5 z-10 text-pretty">{testimonial.quote}</p>
        <div className="z-50 mb-20 -translate-x-5">
          <CardTitle className={exo2.className}>{testimonial.name}</CardTitle>
          <p className="text-sm text-gray-500">{testimonial.position}</p>
        </div>
        <Image
          src={"/bg-avatar-testimonial/bg-avatar-testimonial.png"}
          alt={"una imagen que contiene otra sobre con la forma que representa a un humano varon de la especie humana con el fin de ilustrar que se refiere a un avatar"}
          width={500}
          height={500}
          className="absolute" />
      </CardContent>
    </Card>
  );
}
