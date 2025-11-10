import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLocale } from "@/hooks/use-locale";

const faqItems = [
  {
    id: "faq-1",
    question: { es: "¿Cómo reservo un tour?", en: "How do I book a tour?" },
    answer: {
      es: "Escríbenos por WhatsApp o correo y confirmamos disponibilidad y pago.",
      en: "Write us via WhatsApp or email; we confirm availability and payment."
    }
  },
  {
    id: "faq-2",
    question: { es: "¿Aceptan pagos internacionales?", en: "Do you accept international payments?" },
    answer: {
      es: "Sí, usamos pasarelas que reciben tarjetas internacionales.",
      en: "Yes, we work with gateways that accept international cards."
    }
  },
  {
    id: "faq-3",
    question: { es: "¿Los tours incluyen transporte?", en: "Do tours include transportation?" },
    answer: {
      es: "Cada ficha indica si incluye transporte, snacks o accesos.",
      en: "Each tour card states if transport, snacks or tickets are included."
    }
  }
];

export const FaqSection = () => {
  const { locale } = useLocale();
  return (
    <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_20px_45px_rgba(4,18,42,0.08)] space-y-4">
      <div>
        <p className="text-[11px] uppercase tracking-[0.5em] text-foreground/60">
          {locale === "es" ? "Preguntas frecuentes" : "Frequently asked"}
        </p>
        <h2 className="text-2xl font-bold text-foreground">
          {locale === "es" ? "Información útil" : "Useful information"}
        </h2>
      </div>
      <Accordion type="single" collapsible className="space-y-2">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="rounded-2xl border border-black/5 px-4">
            <AccordionTrigger>{item.question[locale]}</AccordionTrigger>
            <AccordionContent>{item.answer[locale]}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
