import { Card, CardContent, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import type { PricingPlan } from "@/types/pricing";
import { Vollkorn } from "next/font/google";
interface PricingCardProps {
  plan: PricingPlan;
}


const vollkorn = Vollkorn({
  subsets: ["latin"],
  weight: ["400", "700"],
});



export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card
      className={`p-6 shadow-none lg:hover:shadow-md ${
        plan.isPopular ? "lg:hover:shadow-md scale-105" : plan.available ? "" : "bg-card"
      }`}
    >
      <CardContent className="flex flex-col justify-between items-center h-full border p-4 rounded-lg">
        <div className="mb-auto">
          <CardTitle
            className={`${vollkorn.className} mt-4 text-xl font-bold text-slate-500 ${
              plan.isPopular ? "text-2xl" : ""
            }`}
          >
            {plan.title}
          </CardTitle>
          {plan.available ? (
            <p
              className={`text-3xl font-semibold mt-4 ${
                plan.isPopular ? "text-slate-700" : "text-slate-600"
              }`}
            >
              {plan.price}
            </p>
          ) : (
            <p className={`${vollkorn.className} text-4xl lg:text-xl font-black text-slate-600 dark:text-slate-300`}>
              Próximamente
            </p>
          )}
          <p className="text-gray-500 my-4">{plan.description}</p>
          <ul className="text-left text-gray-600 my-4">
            {plan.features.map((feature, i) => (
              <li key={i} className="mb-2">
                - {feature}
              </li>
            ))}
          </ul>
        </div>
        {/* <Button
          className={`mt-auto w-full ${
            plan.isPopular ? "bg-slate-700 text-white" : "default"
          }`}
          variant={plan.available ? "default" : "outline"}
          aria-label={`Seleccionar ${plan.title}`}
          disabled={!plan.available && plan.title === "Tienda"}
        >
          {plan.available ? "Seleccionar" : "Próximamente"}
        </Button> */}
      </CardContent>
    </Card>
  );
}
