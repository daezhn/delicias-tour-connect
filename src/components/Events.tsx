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
  const script = locale === "es" ? "Agenda viva del desierto" : "Living desert lineup";
  const note =
    locale === "es"
      ? "Consulta el cartel para más información."
      : "Open the poster for full details.";

  return (
    <div className="space-y-10">
      <Reveal variant="fade-up" className="space-y-3 text-left">
        <p className="font-script text-2xl text-secondary/80">{script}</p>
        <p className="text-[11px] uppercase tracking-[0.5em] text-foreground/60">
          {copy.title} · {copy.highlight}
        </p>
        {copy.intro && (
          <p className="max-w-2xl text-lg text-foreground/80">{copy.intro}</p>
        )}
      </Reveal>

      <div className="space-y-6">
        {upcomingEvents.map((event, index) => {
          const date = parseISO(event.date);
          const localeObj = locale === "es" ? es : enUS;
          const formatted = format(date, "dd MMM yyyy", { locale: localeObj });
          const weekday = format(date, "EEEE", { locale: localeObj });

          return (
            <Reveal key={event.id} variant="fade-up" delay={index * 80}>
              <article className="flex flex-col gap-4 rounded-[32px] border border-black/5 bg-white/90 p-4 shadow-[0_25px_45px_rgba(4,18,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_55px_rgba(4,18,42,0.12)] md:flex-row md:items-stretch">
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
                    <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">{weekday}</p>
                    <h3 className="mt-2 text-2xl font-bold text-foreground">{event.label}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{formatted}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
                      {note}
                    </span>
                    <a
                      href="#eventos"
                      className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.35em] text-secondary"
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
