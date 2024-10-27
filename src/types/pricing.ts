import { ReactNode } from "react";
import { Key } from "readline";

export interface PricingPlan {
  currency: ReactNode;
  id: Key | null | undefined;
  name: ReactNode;
  title: string;
  price?: string;
  description: string;
  features: string[];
  available: boolean;
  isPopular?: boolean;
}
