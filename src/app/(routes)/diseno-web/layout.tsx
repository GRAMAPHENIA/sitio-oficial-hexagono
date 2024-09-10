// app/seo/layout.tsx
import { ReactNode } from "react";
import Topbar from "@/components/custom/TopBar";
import { Footer } from "@/components/custom/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diseño Web",
  description: "Creado por Hexágono",
};

interface SEOLayoutProps {
  children: ReactNode;
}

const DisenoWebLayout = ({ children }: SEOLayoutProps) => {
  return (
    <div>
      <Topbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DisenoWebLayout;
