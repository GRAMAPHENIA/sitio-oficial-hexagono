import { Key } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingPlan {
  id: Key;
  name: string;
  title: string;
  description: string;
  features: string[];
  price: number;
  currency: string;
  available: boolean;
}

interface PricingCardProps {
  plan?: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const {
    name = "N/A",
    title = "",
    description = "",
    features = [],
    price = 0,
    currency = "$",
    available = false,
  } = plan || {};

  return (
    <div className="relative mx-auto p-[3px] w-full max-w-sm">
      {/* Borde Animado */}
      <div className="absolute inset-0.5 rounded-lg overflow-hidden pointer-events-none">
        <div
          className="absolute inset-[-98%] animate-[spin_8s_linear_infinite] bg-[length:53%_53%,53%_53%,0%_0%,0%_0%] bg-[position:0_0,100%_0,100%_100%,0_100%] bg-no-repeat bg-[linear-gradient(45deg,transparent_40%,#d1d5db_45%,#9ca3af_50%,#ffffff_55%,transparent_60%),linear-gradient(45deg,transparent_40%,#d1d5db_45%,#9ca3af_50%,#ffffff_55%,transparent_60%),linear-gradient(45deg,transparent_40%,#d1d5db_45%,#9ca3af_50%,#ffffff_55%,transparent_60%),linear-gradient(45deg,transparent_40%,#d1d5db_45%,#9ca3af_50%,#ffffff_55%,transparent_60%)] dark:bg-[linear-gradient(45deg,transparent_40%,#6EBBFF_45%,#6b7280_55%,transparent_60%),linear-gradient(45deg,transparent_40%,#6b7280_45%,#6b7280_55%,transparent_60%),linear-gradient(45deg,transparent_40%,#6b7280_45%,#6b7280_55%,transparent_60%),linear-gradient(45deg,transparent_40%,#6b7280_45%,#6b7280_55%,transparent_60%)]"
          style={{ borderWidth: "1px" }}
        ></div>
      </div>

      {/* Contenido */}
      <Card className="relative shadow-md overflow-hidden bg-white dark:bg-card border border-slate-200 dark:border-slate-700 rounded-lg h-[100%] flex flex-col justify-between">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{title}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <span className="text-3xl font-bold">
              {currency}
              {/* Para generar precios con punto de mil */}
              {price.toLocaleString("es-AR")}{" "}
            </span>
            {/* <span className="text-muted-foreground">/mes</span> */}
          </div>
          <p className="mb-4 text-muted-foreground">{description}</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-emerald-500 border border-primary/20 rounded-full p-[3px]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            variant={available ? "default" : "secondary"}
          >
            {available ? "Comenzar" : "inscribirse en la lista de espera"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
