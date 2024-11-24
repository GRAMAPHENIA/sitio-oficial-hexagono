import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { exo2 } from "@/styles/fonts";
import type { Feature } from "@/types/feature";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Card className="px-6 border-none bg-transparent shadow-none relative my-20">
      <CardContent className="flex flex-col justify-between items-center h-full">
        <div className="">
          <Image
            src={feature.iconSrc}
            alt={feature.alt}
            width={300}
            height={300}
            className="h-40 w-auto animate-bounce-smooth mb-10"
          />
          <Image
            src="/base-features/base.png"
            alt="cosas"
            width={300}
            height={300}
            className="h-44 w-auto absolute top-20 right-8 -z-10"
          />
          <Image
            src="/base-features/base-dark.png"
            alt="cosas"
            width={300}
            height={300}
            className="h-44 w-auto absolute top-20 right-8 -z-10 hidden dark:block"
          />
        </div>
        <CardTitle
          className={`${exo2.className} text-2xl font-semibold text-slate-600 dark:text-slate-300 mt-20`}
        >
          {feature.title}
        </CardTitle>
        <p className="text-slate-600 dark:text-slate-400">
          {feature.description}
        </p>
      </CardContent>
    </Card>
  );
}
