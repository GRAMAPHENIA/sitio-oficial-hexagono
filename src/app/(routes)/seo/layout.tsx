// app/seo/layout.tsx
import { ReactNode } from "react";
import Topbar from "@/components/custom/TopBar";
import { Footer } from "@/components/custom/footer";
import { Metadata } from "next";
import Head from "next/head"; 

export const metadata: Metadata = {
  title: "SEO - Hexágono",
  description: "Servicios de optimización SEO ofrecidos por Hexágono.",
};

interface SEOLayoutProps {
  children: ReactNode;
}

const SEOLayout = ({ children }: SEOLayoutProps) => {
  return (
    <div>
      {/* Metadatos y optimizaciones SEO */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Maximiza la visibilidad de tu sitio web con nuestros servicios de optimización SEO." />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:title" content="SEO - Hexágono" />
        <meta property="og:description" content="Mejora tu presencia en línea con nuestros servicios de SEO." />
        <meta property="og:url" content="https://www.hexagono.xyz/seo" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path-to-image.jpg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO - Hexágono" />
        <meta name="twitter:description" content="Optimizamos tu sitio web para motores de búsqueda y mejoramos tu tráfico." />
        <meta name="twitter:image" content="/path-to-image.jpg" />
      </Head>

      {/* Estructura principal del layout */}
      <Topbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default SEOLayout;
