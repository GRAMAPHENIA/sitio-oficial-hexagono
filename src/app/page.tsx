import Header from "@/components/custom/header";
import Features from "@/components/custom/features";
import Topbar from "@/components/custom/TopBar";
// import Testimonial from "@/components/custom/testimonial";
// import PricingTable from "@/components/custom/pricing-table";
// import Portfolio from "@/components/custom/portfolio";
// import FAQ from "@/components/custom/faq";
// import ContactForm from "@/components/custom/contact-form";
// import CTA from "@/components/custom/cta";
import { Footer } from "@/components/custom/footer";

export default function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <div className="min-h-screen max-w-7xl flex flex-col items-center m-auto">
        <Features />
        {/* <Testimonial /> */}
        {/* <PricingTable /> */}
        {/* <Portfolio /> */}
        {/* <FAQ /> */}
        {/* <ContactForm /> */}
        {/* <CTA /> */}
      </div>
      <Footer />
    </>
  );
}
