import { ThemeProvider } from "@/components/ui/theme-provider";
import { ToastProvider } from "@/components/ui/use-toast";
import "./globals.css";

export const metadata = {
  title: "Hexágono",
  description: "Creado por Hexágono",
  viewport: "width=device-width, initial-scale=1", // Vista responsiva
  icons: {
    icon: "/icon.png", // Icono de la página
  },
  openGraph: {
    title: "Hexágono",
    description: "Creado por Hexágono, diseño y desarrollo web.",
    url: "https://www.hexagono.xyz",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
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
