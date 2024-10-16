import { ThemeProvider } from "@/components/ui/theme-provider";
import { ToastProvider } from "@/components/ui/use-toast";
import Head from "next/head"; // Importa Head para agregar metadatos en el layout global
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hexágono",
  description: "Creado por Hexágono",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Servicios de diseño web, SEO, y desarrollo a medida."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Hexágono" />
        <meta
          property="og:description"
          content="Creado por Hexágono, diseño y desarrollo web."
        />
        <meta property="og:url" content="https://www.hexagono.xyz" />
        <meta property="og:type" content="website" />
      </Head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <main>{children}</main>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
