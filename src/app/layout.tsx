import { ThemeProvider } from "@/components/ui/theme-provider";

import { ToastProvider } from "@/components/ui/use-toast";

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
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
