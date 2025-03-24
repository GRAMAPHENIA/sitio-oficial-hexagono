import { ThemeProvider } from "@/components/ui/theme-provider";
import { ToastProvider } from "@/components/ui/use-toast";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.hexagono.xyz"),
  title: "Hexágono",
  description: "Creado por Hexágono, diseño y desarrollo web.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Hexágono",
    description: "Creado por Hexágono, diseño y desarrollo web.",
    url: "https://www.hexagono.xyz",
    type: "website",
    images: [
      {
        url: "/brand/logo-og-hexagono-redes.webp",
        width: 1200, 
        height: 630,
        alt: "Logo de Hexágono",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
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
