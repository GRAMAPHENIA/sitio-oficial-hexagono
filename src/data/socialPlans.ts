// src/data/socialPlans.ts
import { PricingPlan } from "@/types/pricingPlan";

export const socialPlans: PricingPlan[] = [
  {
    id: "social-starter",
    name: "Plan inicial",
    title: "Para marcas personales",
    description: "Gestión básica de redes sociales.",
    features: [
      "2 publicaciones al mes.",
      "10 historias al mes.",
      "Historias destacadas.",
      "Redacción de Copys.",
    ],
    price: 85000,
    currency: "$",
    available: true,
  },
  {
    id: "plan-activo",
    name: "Plan activo",
    title: "Para empresas",
    description: "Gestión integral de redes sociales.",
    features: [
      "4 publicaciones al mes.",
      "20 historias al mes.",
      "Historias destacadas.",
      "1 reel mensual.",
      "Redacción de Copys.",
    ],
    price: 180000,
    currency: "$",
    available: true,
  },
  {
    id: "plan-premium",
    name: "Plan premium",
    title: "Para empresas con enfoque en crecimiento",
    description: "Gestión avanzada de redes sociales.",
    features: [
      "8 publicaciones al mes.",
      "30 historias al mes.",
      "Historias destacadas.",
      "2 reels mensuales.",
      "Redacción de Copys.",
    ],
    price: 310000,
    currency: "$",
    available: true,
  },
];
