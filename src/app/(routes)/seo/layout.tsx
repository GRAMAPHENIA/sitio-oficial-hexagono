// app/seo/layout.tsx
import { ReactNode } from "react";
import Topbar from "@/components/custom/TopBar";
import { Footer } from "@/components/custom/footer";

interface SEOLayoutProps {
  children: ReactNode;
}

const SEOLayout = ({ children }: SEOLayoutProps) => {
  return (
    <div>
      <Topbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default SEOLayout;
