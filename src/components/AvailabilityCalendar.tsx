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

interface AvailabilityCalendarProps {
  compact?: boolean;
}

export const AvailabilityCalendar = ({ compact = false }: AvailabilityCalendarProps) => {
  const [expanded, setExpanded] = useState(compact);
  const { locale } = useLocale();
  const formatterLocale = locale === "es" ? es : enUS;
  const copy = getTranslations(locale).sections.events;

  const heading = locale === "es" ? "Calendario de disponibilidad" : "Availability calendar";
  const legend =
    locale === "es"
      ? "Eventos confirmados del mes"
      : "Confirmed happenings this month";

  const toggleLabel = expanded
    ? locale === "es" ? "Ocultar calendario" : "Hide calendar"
    : locale === "es" ? "Ver calendario" : "View calendar";

  return (
    <section className={compact ? "" : "py-12"}>
      <div className={compact ? "" : "mx-auto max-w-3xl px-4"}>
        <div className={compact ? "text-left" : "text-center"}>
          <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">
            {copy?.highlight ?? "Eventos"}
          </p>
          <h2 className="text-2xl font-bold text-foreground">{heading}</h2>
          <p className="text-sm text-muted-foreground">{legend}</p>
          <Button
            className="mt-4 rounded-full px-6 py-4 text-[11px] uppercase tracking-[0.4em]"
            variant={expanded ? "default" : "outline"}
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
          >
            {toggleLabel}
          </Button>
        </div>

        {expanded && (
          <div className="mt-6 rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_25px_60px_rgba(4,18,42,0.08)]">
            <div className="flex flex-wrap justify-between gap-4 text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {locale === "es" ? "Fecha confirmada" : "Confirmed date"}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                {locale === "es" ? "Disponible" : "Open slot"}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-7 gap-3">
              {calendarRange.map((day, index) => {
                const iso = format(day, "yyyy-MM-dd");
                const dayEvents = eventsByDate[iso];
                const isEvent = Boolean(dayEvents?.length);
                const inMonth = isSameMonth(day, referenceDate);

                return (
                  <div
                    key={iso}
                    className={`min-h-[100px] rounded-2xl border px-3 py-4 text-left ${
                      isEvent
                        ? "border-primary/60 bg-primary/10 text-secondary"
                        : "border-black/5 bg-white text-foreground"
                    } ${!inMonth ? "opacity-50" : ""}`}
                  >
                    {index < 7 && (
                      <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                        {format(day, "EEE", { locale: formatterLocale })}
                      </p>
                    )}
                    <p className="mt-1 text-2xl font-bold leading-none">
                      {format(day, "d")}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
                      {format(day, "MMM", { locale: formatterLocale })}
                    </p>
                    {isEvent && (
                      <span className="mt-3 inline-flex rounded-full bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em]">
                        {locale === "es" ? "Evento" : "Event"}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {upcomingEvents.map((event) => {
                const date = parseISO(event.date);
                return (
                  <Card key={event.id} className="border border-black/5 bg-white/95 p-4 shadow-none">
                    <p className="text-[11px] uppercase tracking-[0.4em] text-primary/70">
                      {format(date, "EEEE", { locale: formatterLocale })}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">{event.label}</h3>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {locale === "es"
                        ? "Cartel disponible en Agenda."
                        : "Poster available in Agenda."}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
