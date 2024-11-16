// app/(routes)/seo/layout.tsx
import { ReactNode } from "react";
import Topbar from "@/components/custom/TopBar";
import { Footer } from "@/components/custom/footer";
import { Metadata } from "next";

// Metadata centralizada para SEO
export const metadata: Metadata = {
  title: "SEO - Hexágono",
  description: "Servicios de optimización SEO ofrecidos por Hexágono.",
  openGraph: {
    title: "SEO - Hexágono",
    description: "Mejora tu presencia en línea con nuestros servicios de SEO.",
    url: "https://www.hexagono.xyz/seo",
    type: "website",
    images: ["/path-to-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO - Hexágono",
    description: "Optimizamos tu sitio web para motores de búsqueda y mejoramos tu tráfico.",
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
