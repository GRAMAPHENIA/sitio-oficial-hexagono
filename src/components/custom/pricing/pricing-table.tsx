import { Key } from "react";
import { PricingCard } from "./pricing-card";
import { vollkorn } from "@/styles/fonts";

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

interface PricingTableProps {
  webPlans?: PricingPlan[];
  socialPlans?: PricingPlan[];
}

export function PricingTable({
  webPlans = [],
  socialPlans = [],
}: PricingTableProps) {
  return (
    <div className="container mx-auto px-4 py-8 mb-20">
      <h2
        className={`${vollkorn.className} text-4xl lg:text-5xl font-black text-slate-600 dark:text-slate-300 mb-20 border rounded-full px-4 py-4  mx-auto text-center shadow-md bg-card max-w-3xl`}
      >
        Sitios Web
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {webPlans.length > 0 ? (
          webPlans.map((plan) => <PricingCard key={plan.id} plan={plan} />)
        ) : (
          <p>No web plans available</p>
        )}
      </div>

      <h2
        className={`${vollkorn.className} text-4xl lg:text-5xl font-black text-slate-600 dark:text-slate-300 mb-20 border rounded-full px-4 py-4  mx-auto text-center shadow-md bg-card max-w-3xl`}
      >
        Gestión de Redes Sociales
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {socialPlans.length > 0 ? (
          socialPlans.map((plan) => <PricingCard key={plan.id} plan={plan} />)
        ) : (
          <p>No hay planes de redes sociales disponibles</p>
        )}
      </div>
    </div>
  );
}
