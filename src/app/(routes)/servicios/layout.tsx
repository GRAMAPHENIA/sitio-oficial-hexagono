// app/seo/layout.tsx
import { ReactNode } from "react";
import Topbar from "@/components/custom/TopBar";
import { Footer } from "@/components/custom/footer";
import { Metadata } from "next";
import Head from "next/head"; 

export const metadata: Metadata = {
  title: "Servicios - Hexágono",
  description: "Descubre los servicios ofrecidos por Hexágono.",
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
        <meta name="description" content="Hexágono ofrece una variedad de servicios para ayudarte a mejorar tu presencia en línea." />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:title" content="Servicios - Hexágono" />
        <meta property="og:description" content="Conoce todos los servicios que ofrecemos para potenciar tu negocio." />
        <meta property="og:url" content="https://www.hexagono.xyz/servicios" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path-to-image.jpg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Servicios - Hexágono" />
        <meta name="twitter:description" content="Explora nuestros servicios y mejora tu negocio con Hexágono." />
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
