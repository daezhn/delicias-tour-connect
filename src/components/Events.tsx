import { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { format, parseISO } from "date-fns";
import { es, enUS } from "date-fns/locale";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";
import { upcomingEvents } from "@/data/upcoming-events";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const Events = () => {
  const { locale } = useLocale();
  const copy = getTranslations(locale).sections.events;
  const eyebrow = locale === "es" ? "Siempre hay algo nuevo" : "Always something new";
  const script = locale === "es" ? "Próximos eventos" : "Upcoming events";
  const note =
    locale === "es"
      ? "Abre el cartel para más detalles"
      : "Open the poster for full info";
  const ctaLabel = locale === "es" ? "Ver todos los eventos" : "View all events";
  const eventCta = locale === "es" ? "Ver evento" : "View event";

  const groupedEvents = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < upcomingEvents.length; i += 3) {
      chunks.push(upcomingEvents.slice(i, i + 3));
    }
    return chunks;
  }, []);

  return (
    <Reveal variant="fade-up">
      <section className="w-full rounded-none border-y border-sky-100 bg-gradient-to-br from-[#e3f4ff] via-white to-[#f0fbff] px-4 py-16 shadow-[0_35px_80px_rgba(6,69,173,0.12)] sm:px-10 sm:py-20 lg:px-20">
        <div className="flex flex-col gap-10 lg:flex-row">
            <div className="space-y-5 text-slate-900 lg:max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-sky-700">{eyebrow}</p>
              <h2 className="text-4xl font-black leading-tight text-slate-900">
                {copy.title} <span className="text-primary">{copy.highlight}</span>
              </h2>
              <p className="font-tourism text-4xl text-[#d64089]">{script}</p>
              {copy.intro && <p className="text-[15px] leading-relaxed text-slate-700">{copy.intro}</p>}
              <button
                className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-sky-700 shadow-[0_15px_35px_rgba(6,69,173,0.15)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                {ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            <Carousel
              opts={{ align: "start", skipSnaps: true }}
              className="relative flex-1 rounded-[40px] pb-10 [--controls-offset:calc(100%-3rem)]"
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
                            className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-white/60 bg-white/90 shadow-[0_25px_55px_rgba(6,69,173,0.15)] transition hover:-translate-y-1 hover:shadow-[0_35px_70px_rgba(6,69,173,0.22)]"
                          >
                            <div className="relative h-44 w-full overflow-hidden sm:h-48 lg:h-52">
                              <img
                                src={event.image}
                                alt={event.alt}
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                loading="lazy"
                                decoding="async"
                              />
                              <div className="absolute bottom-3 left-3 rounded-full bg-white/85 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-800">
                                {weekday}
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col gap-3 px-5 py-5">
                              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{formatted}</p>
                              <h3 className="text-xl font-bold leading-tight text-slate-900">{event.label}</h3>
                              <p className="text-sm text-slate-600">{note}</p>
                              <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                                <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-primary/80">
                                  Delicias · Live
                                </span>
                                <a
                                  href="#eventos"
                                  className="inline-flex items-center gap-2 rounded-full bg-sky-600/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-sky-600"
                                >
                                  {eventCta}
                                  <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 hidden border-none bg-white/70 text-sky-700 shadow-lg backdrop-blur sm:flex" />
              <CarouselNext className="-right-4 hidden border-none bg-white/70 text-sky-700 shadow-lg backdrop-blur sm:flex" />
            </Carousel>
          </div>
      </section>
    </Reveal>
  );
};
