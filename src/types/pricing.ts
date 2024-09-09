export interface PricingPlan {
    title: string;
    price?: string;
    description: string;
    features: string[];
    available: boolean;
    isPopular?: boolean;
  }
  