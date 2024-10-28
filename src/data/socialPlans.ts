// src/data/socialPlans.ts
import { PricingPlan } from "@/types/pricingPlan";

export const socialPlans: PricingPlan[] = [
  {
    id: "social-starter",
    name: "Starter",
    title: "Para marcas personales",
    description: "Gestión básica de redes sociales para individuos.",
    features: [
      "2 plataformas sociales",
      "Calendario de contenido semanal",
      "Análisis básico",
    ],
    price: 14.99,
    currency: "$",
    available: true,
  },
  {
    id: "social-growth",
    name: "Growth",
    title: "Para pequeñas empresas",
    description: "Gestión integral de redes sociales para negocios en crecimiento.",
    features: [
      "4 plataformas sociales",
      "Calendario de contenido diario",
      "Análisis avanzado",
      "Gestión de comunidad",
    ],
    price: 39.99,
    currency: "$",
    available: true,
  },
];
