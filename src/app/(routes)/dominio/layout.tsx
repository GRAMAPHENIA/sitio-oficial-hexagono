// app/(routes)/dominio/layout.tsx

import { ReactNode } from "react";
import Topbar from "@/components/custom/TopBar";
import { Footer } from "@/components/custom/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dominio - Hexágono",
  description: "Creado por Hexágono, especialistas en registro y gestión de dominios.",
  openGraph: {
    title: "Dominio - Hexágono",
    description:
      "Expertos en registro y gestión de dominios para asegurar tu presencia digital.",
    url: "https://www.hexagono.xyz/dominio",
    type: "website",
    images: ["/path-to-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dominio - Hexágono",
    description: "Asegura tu dominio en línea con nuestros servicios profesionales.",
    images: ["/path-to-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = "width=device-width, initial-scale=1";

interface SEOLayoutProps {
  children: ReactNode;
}

const SEOLayout = ({ children }: SEOLayoutProps) => {
  return (
    <div>
      {/* Estructura principal del layout */}
      <Topbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default SEOLayout;
