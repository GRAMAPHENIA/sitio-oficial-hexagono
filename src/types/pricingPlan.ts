import { Key } from "react";

export interface PricingPlan {
  id: Key;
  name: string;
  title: string;
  description: string;
  features: string[];
  price: number;
  currency: string;
  available: boolean;
}
