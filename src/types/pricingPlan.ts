export interface PricingPlan {
    id: string; // Cambia Key a string
    name: string;
    title: string;
    description: string;
    features: string[];
    price: number; // Asegúrate de que esto sea un número
    currency: string;
    available: boolean;
  }
