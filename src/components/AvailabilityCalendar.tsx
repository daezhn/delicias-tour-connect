import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";
import { upcomingEvents } from "@/data/upcoming-events";
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  parseISO,
  startOfMonth,
  startOfWeek,
  isSameMonth,
} from "date-fns";
import { es, enUS } from "date-fns/locale";

const referenceDate = upcomingEvents.length
  ? parseISO(upcomingEvents[0].date)
  : new Date();

const calendarRange = (() => {
  const monthStart = startOfMonth(referenceDate);
  const monthEnd = endOfMonth(referenceDate);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  return eachDayOfInterval({ start: calendarStart, end: calendarEnd });
})();

const eventsByDate = upcomingEvents.reduce<Record<string, typeof upcomingEvents[number][]>>(
  (acc, event) => {
    acc[event.date] = acc[event.date] ? [...acc[event.date], event] : [event];
    return acc;
  },
  {}
);

export const AvailabilityCalendar = () => {
  const [expanded, setExpanded] = useState(false);
  const { locale } = useLocale();
  const formatterLocale = locale === "es" ? es : enUS;
  const copy = getTranslations(locale).sections.events;

  const heading = locale === "es" ? "Calendario de disponibilidad" : "Availability calendar";
  const legend =
    locale === "es"
      ? "Vista mensual con los eventos confirmados"
      : "Monthly view with confirmed events";

  const toggleLabel = expanded
    ? locale === "es" ? "Ocultar calendario" : "Hide calendar"
    : locale === "es" ? "Consultar calendario" : "View calendar";

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-primary/70">
            {copy?.highlight ?? "Eventos"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{heading}</h2>
          <p className="text-muted-foreground mt-3 text-base">{legend}</p>
          <Button
            className="mt-6 rounded-full px-8 py-6 text-sm uppercase tracking-[0.4em]"
            variant={expanded ? "default" : "outline"}
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
          >
            {toggleLabel}
          </Button>
        </div>

        {expanded && (
          <div className="mt-10 rounded-[32px] bg-gradient-to-br from-primary/5 via-background to-background/80 p-6 md:p-10 shadow-[0_25px_70px_-30px_rgba(15,23,42,0.7)] ring-1 ring-white/10">
            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap justify-between gap-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {locale === "es" ? "Fecha con evento confirmado" : "Confirmed tour date"}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                  {locale === "es" ? "Disponible" : "Open slot"}
                </span>
              </div>

              <div className="grid grid-cols-7 gap-3">
                {calendarRange.map((day, index) => {
                  const iso = format(day, "yyyy-MM-dd");
                  const dayEvents = eventsByDate[iso];
                  const isEvent = Boolean(dayEvents?.length);
                  const inMonth = isSameMonth(day, referenceDate);

                  return (
                    <div
                      key={iso}
                      className={`min-h-[110px] rounded-2xl border px-3 py-4 text-left transition ${
                        isEvent
                          ? "border-primary/70 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/15 text-white shadow-lg shadow-primary/30"
                          : "border-white/20 bg-white/5 text-foreground"
                      } ${!inMonth ? "opacity-40" : ""}`}
                    >
                      {index < 7 && (
                        <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                          {format(day, "EEE", { locale: formatterLocale })}
                        </p>
                      )}
                      <p className="text-2xl font-bold leading-none mt-1">
                        {format(day, "d")}
                      </p>
                      <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground/70">
                        {format(day, "MMM", { locale: formatterLocale })}
                      </p>
                      {isEvent && (
                        <span className="mt-3 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em]">
                          Evento
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {upcomingEvents.map((event) => {
                  const date = parseISO(event.date);
                  return (
                    <Card
                      key={event.id}
                      className="border-0 bg-white/90 p-5 shadow-lg ring-1 ring-black/5"
                    >
                      <p className="text-xs uppercase tracking-[0.4em] text-primary/70">
                        {format(date, "EEEE", { locale: formatterLocale })}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-foreground">{event.label}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {locale === "es"
                          ? "Consulta el cartel completo en Próximos Eventos."
                          : "See full poster in Upcoming Events."}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
