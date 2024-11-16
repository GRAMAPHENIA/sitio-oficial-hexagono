// app/(routes)/diseno-web/layout.tsx

import { ReactNode } from "react";
import Topbar from "@/components/custom/TopBar";
import { Footer } from "@/components/custom/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diseño Web - Hexágono",
  description: "Creado por Hexágono, diseño web moderno y efectivo.",
  openGraph: {
    title: "Diseño Web - Hexágono",
    description: "Expertos en diseño web que transforman la imagen de tu negocio en línea.",
    url: "https://www.hexagono.xyz/diseno-web",
    type: "website",
    images: ["/path-to-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseño Web - Hexágono",
    description: "Potencia tu presencia digital con nuestros servicios de diseño web.",
    images: ["/path-to-image.jpg"],
  },
  icons: {
    icon: "/logo-hexagono.webp",
  },
};

export const viewport = "width=device-width, initial-scale=1";

interface SEOLayoutProps {
  children: ReactNode;
}

const DisenoWebLayout = ({ children }: SEOLayoutProps) => {
  return (
    <div>
      {/* Estructura principal del layout */}
      <Topbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DisenoWebLayout;
