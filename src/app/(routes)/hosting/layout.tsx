// app/(routes)/hosting/layout.tsx

import { ReactNode } from "react";
import Topbar from "@/components/custom/TopBar";
import { Footer } from "@/components/custom/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hosting - Hexágono",
  description: "Creado por Hexágono, servicios de hosting confiables y seguros.",
  openGraph: {
    title: "Hosting - Hexágono",
    description: "Servicios de hosting seguros y escalables para tu negocio.",
    url: "https://www.hexagono.xyz/hosting",
    type: "website",
    images: ["/path-to-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hosting - Hexágono",
    description: "Asegura el rendimiento de tu sitio web con nuestros servicios de hosting.",
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
