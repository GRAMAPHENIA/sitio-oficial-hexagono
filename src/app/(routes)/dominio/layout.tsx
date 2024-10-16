// app/seo/layout.tsx
import { ReactNode } from "react";
import Topbar from "@/components/custom/TopBar";
import { Footer } from "@/components/custom/footer";
import { Metadata } from "next";
import Head from "next/head"; 

export const metadata: Metadata = {
  title: "Dominio - Hexágono",
  description:
    "Creado por Hexágono, especialistas en registro y gestión de dominios.",
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
        <meta
          name="description"
          content="Registro y gestión profesional de dominios para tu presencia en línea."
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:title" content="Dominio - Hexágono" />
        <meta
          property="og:description"
          content="Expertos en registro y gestión de dominios para asegurar tu presencia digital."
        />
        <meta property="og:url" content="https://www.hexagono.xyz/dominio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path-to-image.jpg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dominio - Hexágono" />
        <meta
          name="twitter:description"
          content="Asegura tu dominio en línea con nuestros servicios profesionales."
        />
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
