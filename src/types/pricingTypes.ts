// types/pricing.ts
export interface PricingPlan {
  id: string; // Cambiar a string si es necesario
  name: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  currency: string;
  available: boolean;
}
