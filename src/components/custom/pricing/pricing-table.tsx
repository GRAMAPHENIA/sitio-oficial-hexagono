import { Key } from "react";
import { PricingCard } from "./pricing-card";
import { vollkorn } from "@/styles/fonts";
import { QuoteIcon } from "lucide-react";

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
    <div className="container mx-auto py-8 mb-20">
      <h2
        className={`${vollkorn.className} text-4xl lg:text-5xl font-black text-slate-600 dark:text-slate-300 mb-10 mx-auto text-center max-w-3xl`}
      >
        Sitios Web
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 ">
        {webPlans.length > 0 ? (
          webPlans.map((plan) => <PricingCard key={plan.id} plan={plan} />)
        ) : (
          <p>No hay planes de sitios web disponibles</p>
        )}
      </div>

      <section>
        <div className="text-left text-slate-600 dark:text-slate-400 bg-card dark:bg-card rounded-l-none rounded-lg p-10 max-w-2xl mx-auto my-20 border-l-4 border-l-blue-300/80 dark:border-l-blue-900/80 border">
          <QuoteIcon className="h-16 w-16 mb-2 text-slate-400/40" />
          <p className="font-normal ml-8">
            Los costos de <span className="font-bold">hosting y dominio</span>{" "}
            no están incluidos en estos planes. Estos servicios son gestionados
            exclusivamente a través de{" "}
            <span className="font-bold">Hostinger</span>, donde podrás obtener
            más información y tarifas.
          </p>
          <p className="mt-2 font-normal ml-8">
            Los planes no incluyen{" "}
            <span className="font-bold">
              mantenimiento continuo de los sitios web.
            </span>
            Este servicio está disponible como{" "}
            <span className="font-bold">un extra opcional</span> y puede ser
            adaptado a tus necesidades.
          </p>
        </div>
      </section>

      <h2
        className={`${vollkorn.className} text-4xl lg:text-5xl font-black text-slate-600 dark:text-slate-300 mb-10 mx-auto text-center max-w-3xl`}
      >
        Gestión de Redes Sociales
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialPlans.length > 0 ? (
          socialPlans.map((plan) => <PricingCard key={plan.id} plan={plan} />)
        ) : (
          <p>No hay planes de redes sociales disponibles</p>
        )}
      </div>
    </div>
  );
}
