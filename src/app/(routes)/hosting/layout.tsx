// app/seo/layout.tsx
import { ReactNode } from "react";
import Topbar from "@/components/custom/TopBar";
import { Footer } from "@/components/custom/footer";
import { Metadata } from "next";
import Head from "next/head"; 

export const metadata: Metadata = {
  title: "Hosting - Hexágono",
  description:
    "Creado por Hexágono, servicios de hosting confiables y seguros.",
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
          content="Ofrecemos servicios de hosting de alta calidad para garantizar el rendimiento de tu sitio web."
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:title" content="Hosting - Hexágono" />
        <meta
          property="og:description"
          content="Servicios de hosting seguros y escalables para tu negocio."
        />
        <meta property="og:url" content="https://www.hexagono.xyz/hosting" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path-to-image.jpg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hosting - Hexágono" />
        <meta
          name="twitter:description"
          content="Asegura el rendimiento de tu sitio web con nuestros servicios de hosting."
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
