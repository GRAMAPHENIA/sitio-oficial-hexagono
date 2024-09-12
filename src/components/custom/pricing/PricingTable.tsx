import { pricingPlans } from "@/data/pricingPlans";
import PricingCard from "./PricingCard";
import { Vollkorn } from "next/font/google";

// Configuración de la fuente Vollkorn
const vollkorn = Vollkorn({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function PricingTable() {
  return (
    <section className="flex flex-col justify-center items-center text-center mt-24">
      <h2
        className={`${vollkorn.className} text-4xl lg:text-7xl font-black text-slate-600 dark:text-slate-300`}
      >
        Planes
      </h2>
      <p className="text-xl text-gray-500 dark:text-gray-300 max-w-sm md:max-w-md lg:max-w-lg mb-16">
        Elegí el plan perfecto para vos: opciones flexibles adaptadas a tus
        necesidades y presupuesto.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </section>
  );
}
