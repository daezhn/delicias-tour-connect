import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { format, parseISO } from "date-fns";
import { es, enUS } from "date-fns/locale";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";
import { upcomingEvents } from "@/data/upcoming-events";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MagneticButton } from "@/components/MagneticButton";

export const Events = () => {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);
  const { locale } = useLocale();
  const copy = getTranslations(locale).sections.events;
  const eyebrow = locale === "es" ? "Siempre hay algo nuevo" : "Always something new";
  const script = locale === "es" ? "Próximos eventos" : "Upcoming events";
  const note =
    locale === "es"
      ? "Abre el cartel para más detalles"
      : "Open the poster for full info";
  const eventCta = locale === "es" ? "Ver evento" : "View event";

  const groupedEvents = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < upcomingEvents.length; i += 3) {
      chunks.push(upcomingEvents.slice(i, i + 3));
    }
    return chunks;
  }, []);

  return (
    <>
      <section className="w-full rounded-none border-y border-orange-200 bg-gradient-to-br from-[#f7b267] via-[#f79d84] to-[#8fd3fe] px-4 py-16 shadow-[0_35px_80px_rgba(214,64,137,0.15)] sm:px-10 sm:py-20 lg:px-20">
        <div className="flex flex-col gap-10 lg:flex-row">
          <Reveal variant="fade-up" className="flex h-full flex-col justify-center space-y-5 text-slate-900 lg:max-w-sm">
          <p className="text-base font-semibold uppercase tracking-[0.6em] text-sky-800 drop-shadow-sm">{eyebrow}</p>
          <p className="font-tourism text-[clamp(1.7rem,4vw,2.6rem)] text-white drop-shadow-[0_8px_25px_rgba(0,0,0,0.25)] tracking-[0.08em] sm:whitespace-nowrap">
            {script}
          </p>
          {copy.intro && <p className="text-base leading-relaxed text-slate-700 sm:text-lg">{copy.intro}</p>}
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-8 py-2.5 text-[11px] font-semibold uppercase tracking-[0.45em] text-sky-700 shadow-[0_10px_30px_rgba(6,69,173,0.16)]">
            {locale === "es" ? "Cartelera semanal" : "Weekly lineup"}
          </span>
        </Reveal>

        <Reveal variant="fade-up" delay={150} className="flex-1">
          <Carousel
            opts={{ align: "start", skipSnaps: true }}
            className="relative rounded-[40px] pb-10 [--controls-offset:calc(100%-3rem)]"
          >
            <CarouselContent className="pl-0">
              {groupedEvents.map((group, groupIndex) => (
                <CarouselItem key={`group-${groupIndex}`} className="basis-full">
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {group.map((event) => {
                      const date = parseISO(event.date);
                      const localeObj = locale === "es" ? es : enUS;
                      const formatted = format(date, "dd MMM yyyy", { locale: localeObj });
                      const weekday = format(date, "EEEE", { locale: localeObj });

                      return (
                        <article
                          key={event.id}
                          className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-white bg-white shadow-[0_25px_55px_rgba(6,69,173,0.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(6,69,173,0.35)] hover:scale-[1.02]"
                        >
                          <div className="relative h-44 w-full overflow-hidden sm:h-48 lg:h-52">
                            <img
                              src={event.image}
                              alt={event.alt}
                              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="absolute bottom-3 left-3 rounded-full bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-800 shadow-md">
                              {weekday}
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col gap-3 px-5 py-5">
                            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{formatted}</p>
                            <h3 className="text-xl font-bold leading-tight text-slate-900">{event.label}</h3>
                            <p className="text-sm text-slate-600">{event.alt}</p>
                            <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                              <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-primary/80">
                                Delicias · Live
                              </span>
                              <MagneticButton>
                                <button
                                  type="button"
                                  onClick={() => setSelectedPoster(event.image)}
                                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-sky-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-sky-500 hover:shadow-lg active:scale-95"
                                >
                                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                                  <span className="relative z-10 flex items-center gap-2">
                                    {eventCta}
                                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                  </span>
                                </button>
                              </MagneticButton>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 hidden border-none bg-white/80 text-sky-700 shadow-lg backdrop-blur sm:flex" />
            <CarouselNext className="-right-4 hidden border-none bg-white/80 text-sky-700 shadow-lg backdrop-blur sm:flex" />
          </Carousel>
        </Reveal>
      </div>
    </section>

      <Dialog open={!!selectedPoster} onOpenChange={(open) => !open && setSelectedPoster(null)}>
        <DialogContent className="w-[90vw] max-w-4xl border-none bg-transparent p-0 shadow-none">
          {selectedPoster && (
            <img
              src={selectedPoster}
              alt="Cartel del evento"
              className="max-h-[80vh] w-full rounded-3xl object-contain"
              loading="lazy"
              decoding="async"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
