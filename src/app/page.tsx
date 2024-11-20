import Header from "@/components/custom/header";
import Features from "@/components/custom/features/Features";
import Topbar from "@/components/custom/TopBar";
import Testimonial from "@/components/custom/testimonials/TestimonialsSection";
import Portfolio from "@/components/custom/portfolio/Portfolio";
import FAQ from "@/components/custom/faq/FAQ";
// import CTA from "@/components/custom/cta/cta";
import { Footer } from "@/components/custom/footer";
import ContactForm from "@/components/custom/contact/ContactForm";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="flex flex-col items-center m-auto">
        <Header />
        <Features />
        <Testimonial />
        <Portfolio />
        <FAQ />
        <ContactForm />
        {/* <CTA /> */}
      </div>
      <Footer />
    </>
  );
}
