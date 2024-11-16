// app/(routes)/sobre-nosotros/layout.tsx
import { ReactNode } from "react";
import Topbar from "@/components/custom/TopBar";
import { Footer } from "@/components/custom/footer";
import { Metadata } from "next";

// Metadata centralizada para SEO
export const metadata: Metadata = {
  title: "Nuestro Equipo - Hexágono",
  description: "Conoce al equipo de Hexágono.",
  openGraph: {
    title: "Nuestro Equipo - Hexágono",
    description: "Conoce a las personas detrás de Hexágono y su experiencia.",
    url: "https://www.hexagono.xyz/nuestro-equipo",
    type: "website",
    images: ["/path-to-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuestro Equipo - Hexágono",
    description: "Explora el equipo de expertos que hacen posible Hexágono.",
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
