import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { FAQItemType } from "@/types/faq";

interface FAQItemProps {
  item: FAQItemType;
}

export default function FAQItem({ item }: FAQItemProps) {
  return (
    <AccordionItem value={item.value} className="px-4 border m-2 rounded-lg bg-white dark:bg-[#B6C9DC] shadow-box text-slate-700 ">
      <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
      <AccordionContent>{item.answer}</AccordionContent>
    </AccordionItem>
  );
}
