import Header from "@/components/custom/header";
import Features from "@/components/custom/features/Features";
import Topbar from "@/components/custom/TopBar";
import Testimonial from "@/components/custom/testimonials/TestimonialsSection";
import PricingTable from "@/components/custom/pricing/PricingTable";
import Portfolio from "@/components/custom/portfolio/Portfolio";
import FAQ from "@/components/custom/faq/FAQ";
// import ContactForm from "@/components/custom/contact-form";
// import CTA from "@/components/custom/cta";
import { Footer } from "@/components/custom/footer";
import ContactForm from "@/components/custom/contact/ContactForm";

export default function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <div className="min-h-screen max-w-7xl flex flex-col items-center m-auto">
        <Features />
        <Testimonial />
        <PricingTable />
        <Portfolio />
        <FAQ />
        <ContactForm />
        {/* <CTA /> */}
      </div>
      <Footer />
    </>
  );
}
