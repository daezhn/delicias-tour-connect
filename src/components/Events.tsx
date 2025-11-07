import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { FadeImage } from "@/components/FadeImage";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";

const novemberEvents = [
  {
    id: 1,
    label: "Miércoles 5 de noviembre",
    image: "/images/noviembre/miercoles5.jpg",
    alt: "Cartel de eventos para el miércoles 5 de noviembre"
  },
  {
    id: 2,
    label: "Jueves 6 de noviembre",
    image: "/images/noviembre/jueves6.jpg",
    alt: "Cartel de eventos para el jueves 6 de noviembre"
  },
  {
    id: 3,
    label: "Viernes 7 de noviembre",
    image: "/images/noviembre/viernes7.jpg",
    alt: "Cartel de eventos para el viernes 7 de noviembre"
  }
];

export const Events = () => {
  const { locale } = useLocale();
  const copy = getTranslations(locale).sections.events;
  const posterNote =
    locale === "es"
      ? "Consulta el cartel para más información."
      : "Check the poster for full details.";

  return (
    <section id="eventos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <Reveal variant="fade-up" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {copy.title} <span className="text-primary">{copy.highlight}</span>
          </h2>
          {copy.intro && (
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {copy.intro}
            </p>
          )}
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {novemberEvents.map((event, index) => (
            <Reveal key={event.id} variant="fade-up" delay={index * 140}>
              <Card className="group overflow-hidden border-0 shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <FadeImage
                    src={event.image}
                    alt={event.alt}
                    containerClassName="h-full w-full"
                    className="group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                    <p className="text-lg font-semibold">{event.label}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                      {posterNote}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
