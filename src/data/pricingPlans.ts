import { PricingPlan } from "@/types/pricing";

export const pricingPlans: PricingPlan[] = [
  {
    title: "Landing page",
    price: "$175.000",
    description: "Incluye diseño básico, 1 página.",
    features: [
      "Sitio web de una página",
      "Diseño responsive",
      "Soporte básico",
    ],
    available: true,
  },
  {
    title: "Sitio Web Corporativo",
    price: "$350.000",
    description: "Incluye diseño avanzado y hasta 5 páginas.",
    features: [
      "Hasta 5 páginas",
      "Diseño personalizado",
      "SEO básico",
      "Soporte prioritario",
    ],
    available: true,
    isPopular: true,
  },
  {
    title: "Tienda",
    description: "Diseño personalizado, SEO y hasta 10 páginas.",
    features: [
      "Sitio web completo",
      "Diseño avanzado",
      "SEO completo",
      "Integración con herramientas",
      "Soporte premium",
    ],
    available: false,
  },
];
