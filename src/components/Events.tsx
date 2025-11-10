import { ArrowUpRight } from "lucide-react";
import { format, parseISO } from "date-fns";
import { es, enUS } from "date-fns/locale";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";
import { upcomingEvents } from "@/data/upcoming-events";

export const Events = () => {
  const { locale } = useLocale();
  const copy = getTranslations(locale).sections.events;
  const script = locale === "es" ? "La ciudad en vivo" : "City live now";
  const note =
    locale === "es"
      ? "Consulta el cartel para más información."
      : "Open the poster for full details.";

  return (
    <div className="space-y-10">
      <Reveal variant="fade-up" className="space-y-2 text-left">
        <p className="font-script text-2xl text-secondary/80">{script}</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
          {copy.title} <span className="text-primary">{copy.highlight}</span>
        </h2>
        {copy.intro && <p className="max-w-2xl text-base text-muted-foreground">{copy.intro}</p>}
      </Reveal>

      <div className="space-y-6">
        {upcomingEvents.map((event, index) => {
          const date = parseISO(event.date);
          const localeObj = locale === "es" ? es : enUS;
          const formatted = format(date, "dd MMM yyyy", { locale: localeObj });
          const weekday = format(date, "EEEE", { locale: localeObj });

          return (
            <Reveal key={event.id} variant="fade-up" delay={index * 80}>
              <article className="flex flex-col gap-4 overflow-hidden rounded-[28px] border border-black/5 bg-white/95 p-4 shadow-[0_18px_40px_rgba(4,18,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_28px_55px_rgba(4,18,42,0.12)] md:flex-row md:items-stretch">
                <div className="overflow-hidden rounded-3xl md:max-w-[320px]">
                  <img
                    src={event.image}
                    alt={event.alt}
                    className="h-full w-full object-cover transition duration-500 md:h-64 md:w-[320px]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                  <div className="flex flex-1 flex-col justify-between gap-4 px-2 py-1">
                  <div>
                    <p className="text-xs tracking-wide text-secondary/80">{weekday}</p>
                    <h3 className="mt-1 text-2xl font-extrabold text-foreground">{event.label}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{formatted}</p>
                  </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold tracking-wide text-primary">
                      {note}
                    </span>
                    <a
                      href="#eventos"
                      className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-secondary"
                    >
                      {locale === "es" ? "Ver evento" : "View event"} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};
