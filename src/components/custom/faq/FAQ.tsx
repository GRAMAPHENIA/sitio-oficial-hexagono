import { vollkorn } from "@/styles/fonts";
import FAQItem from "@/components/custom/faq/FAQItem";
import { faqItems } from "@/data/faqItems";
import { Accordion } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="flex flex-col justify-center items-center px-4">
      <h2
        className={`${vollkorn.className} text-4xl lg:text-7xl font-black text-slate-600 dark:text-slate-300`}
      >
        Preguntas Frecuentes
      </h2>
      <div className="lg:w-[600px] pt-20">
        <Accordion type="single" collapsible>
          {faqItems.map((item) => (
            <FAQItem key={item.value} item={item} /> 
          ))}
        </Accordion>
      </div>
    </section>
  );
}
