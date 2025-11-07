import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLocale } from "@/hooks/use-locale";

const faqItems = [
  {
    id: "faq-1",
    question: { es: "¿Cómo reservo un tour?", en: "How do I book a tour?" },
    answer: {
      es: "Escríbenos por WhatsApp o correo y un asesor confirmará la disponibilidad y el proceso de pago.",
      en: "Contact us via WhatsApp or email and our team will confirm availability and payment steps.",
    },
  },
  {
    id: "faq-2",
    question: { es: "¿Aceptan pagos internacionales?", en: "Do you accept international payments?" },
    answer: {
      es: "Sí, trabajamos con pasarelas que admiten tarjetas internacionales.",
      en: "Yes, we work with gateways that accept international cards.",
    },
  },
  {
    id: "faq-3",
    question: { es: "¿Los tours incluyen transporte?", en: "Do tours include transportation?" },
    answer: {
      es: "Depende del tour. Cada ficha indicará si incluye transporte, snacks o entradas.",
      en: "It depends on the tour. Each card will indicate if transport, snacks or tickets are included.",
    },
  },
];

export const FaqSection = () => {
  const { locale } = useLocale();
  return (
    <section className="py-16" id="faq">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
            {locale === "es" ? "Preguntas frecuentes" : "Frequently asked"}
          </p>
          <h2 className="text-4xl font-bold text-foreground">
            {locale === "es" ? "Información útil" : "Useful information"}
          </h2>
        </div>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question[locale]}</AccordionTrigger>
              <AccordionContent>{item.answer[locale]}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
