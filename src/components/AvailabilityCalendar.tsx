import { useMemo, useState } from "react";
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

  const monthLabel = format(referenceDate, "MMMM yyyy", { locale: formatterLocale });
  const dayNames = useMemo(
    () =>
      calendarRange.slice(0, 7).map((day) =>
        format(day, locale === "es" ? "EEE" : "EEE", { locale: formatterLocale }).toUpperCase()
      ),
    [formatterLocale]
  );

  return (
    <section className={compact ? "" : "py-12"}>
      <div className={compact ? "" : "mx-auto max-w-3xl px-4"}>
        <div className={`rounded-[32px] border border-white/30 bg-gradient-to-r from-[#fdf2ec]/80 via-white/90 to-[#ecfbff]/80 p-6 shadow-[0_30px_70px_rgba(4,18,42,0.12)] backdrop-blur-2xl ${compact ? "" : "text-center"}`}>
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/80">
              {copy?.highlight ?? "Eventos"}
            </p>
            <h2 className="font-tourism text-3xl text-secondary/90">{heading}</h2>
            <p className="text-sm text-muted-foreground">{legend}</p>
          </div>
          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="rounded-full border border-secondary/10 bg-white/70 px-6 py-2 text-center text-sm font-semibold uppercase tracking-[0.35em] text-secondary whitespace-nowrap">
              {monthLabel}
            </div>
            <Button
              className="rounded-full px-6 py-4 text-[11px] uppercase tracking-[0.4em]"
              variant={expanded ? "default" : "outline"}
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
            >
              {toggleLabel}
            </Button>
          </div>
        </div>

        {expanded && (
          <div className="mt-6 rounded-[36px] border border-white/40 bg-white/80 p-6 shadow-[0_35px_80px_rgba(4,18,42,0.15)] backdrop-blur-2xl">
            <div className="flex flex-wrap justify-between gap-4 text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {locale === "es" ? "Fecha confirmada" : "Confirmed date"}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                {locale === "es" ? "Disponible" : "Open slot"}
              </span>
            </div>

          <div className="mt-6 overflow-x-auto pb-2">
            <div className="min-w-[560px] grid grid-cols-7 gap-3 sm:min-w-0">
              {calendarRange.map((day, index) => {
                const iso = format(day, "yyyy-MM-dd");
                const dayEvents = eventsByDate[iso];
                const isEvent = Boolean(dayEvents?.length);
                const inMonth = isSameMonth(day, referenceDate);

                return (
                  <div
                    key={iso}
                    className={`min-h-[110px] rounded-[24px] border px-3 py-4 text-left transition ${
                      isEvent
                        ? "border-[#00aec0]/40 bg-gradient-to-br from-[#c9f1ff] to-white text-[#0645ad]"
                        : "border-black/5 bg-gradient-to-br from-white to-[#fff7ef] text-foreground"
                    } ${!inMonth ? "opacity-50" : ""}`}
                  >
                    {index < 7 && (
                      <p className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground sm:text-[10px] sm:tracking-[0.4em]">
                        {dayNames[index]}
                      </p>
                    )}
                    <p className="mt-1 text-2xl font-bold leading-none">
                      {format(day, "d")}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
                      {format(day, "MMM", { locale: formatterLocale })}
                    </p>
                    {isEvent && (
                      <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[9px] font-semibold tracking-[0.12em] text-primary shadow-sm font-tourism whitespace-nowrap sm:text-[10px] sm:tracking-[0.2em]">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {locale === "es" ? "Agenda" : "Agenda"}
                      </span>
                    )}
                  </div>
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
