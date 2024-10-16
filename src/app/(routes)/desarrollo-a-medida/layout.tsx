// app/seo/layout.tsx
import { ReactNode } from "react";
import Topbar from "@/components/custom/TopBar";
import { Footer } from "@/components/custom/footer";
import { Metadata } from "next";
import Head from "next/head"; 

export const metadata: Metadata = {
  title: "Desarrollo a medida - Hexágono",
  description: "Creado por Hexágono, especialistas en desarrollo a medida y soluciones personalizadas.",
};

interface SEOLayoutProps {
  children: ReactNode;
}

const CustomDevelopmentLayout = ({ children }: SEOLayoutProps) => {
  return (
    <div>
      {/* Metadatos y optimizaciones SEO */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Servicios personalizados de desarrollo a medida para negocios." />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:title" content="Desarrollo a Medida - Hexágono" />
        <meta property="og:description" content="Soluciones personalizadas de desarrollo web para transformar tu negocio." />
        <meta property="og:url" content="https://www.hexagono.xyz/desarrollo-a-medida" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path-to-image.jpg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Desarrollo a Medida - Hexágono" />
        <meta name="twitter:description" content="Transforma tu negocio con nuestras soluciones de desarrollo web a medida." />
        <meta name="twitter:image" content="/path-to-image.jpg" />
      </Head>

      {/* Estructura principal del layout */}
      <Topbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default CustomDevelopmentLayout;
