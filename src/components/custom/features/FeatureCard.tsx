import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { exo2 } from "@/styles/fonts";
import type { Feature } from "@/types/feature";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Card className="p-6 shadow-md">
      <CardContent className="flex flex-col justify-between items-center h-full border p-4 rounded-lg">
        <div className="mb-4">
          <Image
            src={feature.iconSrc}
            alt={feature.alt}
            width={300}
            height={300}
            className="h-40 w-auto"
          />
        </div>
        <CardTitle
          className={`${exo2.className} text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-2`}
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
