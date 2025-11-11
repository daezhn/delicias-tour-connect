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
  },
  {
    id: "faq-4",
    question: { es: "¿Cuál es la mejor temporada para visitar?", en: "What is the best season to visit?" },
    answer: {
      es: "Primavera y otoño ofrecen clima templado y eventos gastronómicos; verano es ideal para rutas acuáticas.",
      en: "Spring and fall bring mild weather and food festivals; summer is perfect for water escapes."
    }
  },
  {
    id: "faq-5",
    question: { es: "¿Puedo viajar con mi mascota?", en: "Can I travel with my pet?" },
    answer: {
      es: "Sí, varios hoteles y tours aceptan mascotas. Escríbenos para compartir la lista actualizada.",
      en: "Yes, many hotels and tours are pet friendly. Message us for the latest list."
    }
  },
  {
    id: "faq-6",
    question: { es: "¿Recomiendan rentar auto?", en: "Do you recommend renting a car?" },
    answer: {
      es: "Si planeas visitar presas, viñedos o comunidades rurales, un auto te dará mayor libertad.",
      en: "If you plan to explore dams, vineyards or rural towns, a car offers the most flexibility."
    }
  },
  {
    id: "faq-7",
    question: { es: "¿Dónde consulto el clima?", en: "Where can I check the weather?" },
    answer: {
      es: "Visita nuestra sección Clima & Tips para ver pronósticos de 7 días y consejos de empaque.",
      en: "Check the Clima & Tips section for a 7-day forecast and packing guidance."
    }
  },
  {
    id: "faq-8",
    question: { es: "¿Ofrecen atención para medios y productores?", en: "Do you support media or production crews?" },
    answer: {
      es: "Sí, IDEA Delicias coordina locaciones, permisos y traslados especializados para producciones.",
      en: "Yes, IDEA Delicias helps with locations, permits and transfers for film or media crews."
    }
  }
];

export const FaqSection = () => {
  const { locale } = useLocale();
  return (
    <div className="rounded-[40px] bg-gradient-to-br from-[#0c2c68] via-[#163d8b] to-[#f6b043] p-[1px] shadow-[0_30px_70px_rgba(4,18,42,0.18)]">
      <div className="rounded-[38px] bg-white/95 p-6 space-y-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">
            {locale === "es" ? "Preguntas frecuentes" : "Frequently asked"}
          </p>
          <h2 className="text-2xl font-bold text-foreground">
            {locale === "es" ? "Información útil" : "Useful information"}
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-2">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="rounded-2xl border border-black/5 bg-white px-4">
              <AccordionTrigger>{item.question[locale]}</AccordionTrigger>
              <AccordionContent>{item.answer[locale]}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
