
import { ReactNode } from "react";
import Topbar from "@/components/custom/TopBar";
import { Footer } from "@/components/custom/footer";
import { Metadata } from "next";
import Head from "next/head"; 

export const metadata: Metadata = {
  title: "Nuestro Equipo - Hexágono",
  description: "Conoce al equipo de Hexágono.",
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
        <meta name="description" content="Descubre a nuestro talentoso equipo que trabaja para brindarte los mejores servicios." />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:title" content="Nuestro Equipo - Hexágono" />
        <meta property="og:description" content="Conoce a las personas detrás de Hexágono y su experiencia." />
        <meta property="og:url" content="https://www.hexagono.xyz/nuestro-equipo" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path-to-image.jpg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nuestro Equipo - Hexágono" />
        <meta name="twitter:description" content="Explora el equipo de expertos que hacen posible Hexágono." />
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
