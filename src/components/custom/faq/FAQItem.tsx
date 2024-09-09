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
    <AccordionItem value={item.value}>
      <AccordionTrigger>{item.question}</AccordionTrigger>
      <AccordionContent>{item.answer}</AccordionContent>
    </AccordionItem>
  );
}
