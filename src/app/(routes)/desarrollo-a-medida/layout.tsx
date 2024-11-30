// app/(routes)/desarrollo-a-medida/layout.tsx

import { ReactNode } from "react";
import Topbar from "@/components/custom/TopBar";
import { Footer } from "@/components/custom/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desarrollo a medida - Hexágono",
  description:
    "Creado por Hexágono, desarrollo a medida y soluciones personalizadas.",
  openGraph: {
    title: "Desarrollo a Medida - Hexágono",
    description:
      "Soluciones personalizadas de desarrollo web para transformar tu negocio.",
    url: "https://www.hexagono.xyz/desarrollo-a-medida",
    type: "website",
    images: ["/logo-hexagono.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo a Medida - Hexágono",
    description:
      "Transforma tu negocio con nuestras soluciones de desarrollo web a medida.",
    images: ["/logo-hexagono.webp"],
  },
};

export const viewport = "width=device-width, initial-scale=1";

interface SEOLayoutProps {
  children: ReactNode;
}

const CustomDevelopmentLayout = ({ children }: SEOLayoutProps) => {
  return (
    <div>
      {/* Estructura principal del layout */}
      <Topbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default CustomDevelopmentLayout;
