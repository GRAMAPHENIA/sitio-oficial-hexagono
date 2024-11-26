// src/app/PricingPage.tsx
import { PricingTable } from "./pricing-table";
import { Vollkorn } from "next/font/google";
import { webPlans } from "@/data/webPlans";
import { socialPlans } from "@/data/socialPlans";

const vollkorn = Vollkorn({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function PricingPage() {
  return (
    <section>
      <div className="bg-background min-h-screen pt-28">
        <header className="text-secondary-foreground py-10 text-center">
          <div className="container mx-auto px-4 ">
            <h2
              className={`${vollkorn.className} text-6xl lg:text-8xl font-black text-slate-600 dark:text-slate-300`}
            >
              Nuestros Planes
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-300 mb-16 ">
              Elegí el plan perfecto para tus necesidades
            </p>
          </div>
        </header>
        <main className="px-4 lg:px-40 ">
          <PricingTable webPlans={webPlans} socialPlans={socialPlans} />
        </main>
      </div>
    </section>
  );
}
