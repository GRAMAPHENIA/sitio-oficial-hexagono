import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { exo2 } from "@/styles/fonts";
import type { Feature } from "@/types/feature";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Card
      className="border-none bg-transparent shadow-none mt-10"
      role="article"
      aria-labelledby={`feature-${feature.title}`}
    >

      <CardContent className="flex flex-col justify-between items-center h-full">
        <div className="relative px-20 mt-20">
          {/* <div className="h-52 w-52 bg-white dark:bg-hexagon absolute right-10 bottom-0 rotate-[30deg] rounded-xl shadow-box space-x-7"></div> */}

          {/* Icono principal de la característica */}
          <Image
            src={feature.iconSrc}
            alt={feature.alt}
            width={300}
            height={300}
            className="h-40 w-auto animate-bounce-smooth mb-10"
            priority
          />

          {/* Imagen de fondo (modo claro) */}
          <Image
            src="/base-features/base.png"
            alt="cosas"
            width={300}
            height={300}
            className="h-44 w-auto absolute top-20 right-1 -z-10 dark:hidden"
          />

          {/* Imagen de fondo (modo oscuro) */}
          <Image
            src="/base-features/base-dark.png"
            alt="cosas"
            width={300}
            height={300}
            className="h-44 w-auto absolute top-20 right-1 -z-10 hidden dark:block"
          />
        </div>

        {/* Título de la característica */}
        <CardTitle
          className={`${exo2.className} text-2xl font-semibold text-slate-600 dark:text-slate-300 mt-20 text-center`}
        >
          {feature.title}
        </CardTitle>

        {/* Descripción de la característica */}
        <p className="text-slate-600 dark:text-slate-400">
          {feature.description}
        </p>
      </CardContent>
    </Card>
  );
}
