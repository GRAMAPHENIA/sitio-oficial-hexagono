import { ReactNode } from "react";
import Topbar from "@/components/custom/TopBar";
import { Footer } from "@/components/custom/footer";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Diseño Web - Hexágono",
  description: "Creado por Hexágono, diseño web moderno y efectivo.",
};

interface SEOLayoutProps {
  children: ReactNode;
}

const DisenoWebLayout = ({ children }: SEOLayoutProps) => {
  return (
    <div>
      {/* Metadatos y optimizaciones SEO */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Servicios de diseño web moderno y efectivo para tu negocio."
        />
        <link rel="icon" href="/logo-hexagono.webp" />

        {/* Open Graph para compartir en redes sociales */}
        <meta property="og:title" content="Diseño Web - Hexágono" />
        <meta
          property="og:description"
          content="Expertos en diseño web que transforman la imagen de tu negocio en línea."
        />
        <meta property="og:url" content="https://www.hexagono.xyz/diseno-web" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path-to-image.jpg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diseño Web - Hexágono" />
        <meta
          name="twitter:description"
          content="Potencia tu presencia digital con nuestros servicios de diseño web."
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

export default DisenoWebLayout;
