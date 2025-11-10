import { useMemo, useState } from "react";
import { tours } from "@/data/tours";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TourFilters } from "@/components/TourFilters";
import { Reveal } from "@/components/Reveal";
import { MapPin, Clock, DollarSign, Star, Tag } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";
import { TourMap } from "@/components/TourMap";

const specialOffers = [
  {
    id: "combo-cultural",
    title: { es: "Combo Cultural + Degustación", en: "Cultural Combo + Tasting" },
    description: {
      es: "Incluye entrada a museos, guía y degustación regional.",
      en: "Includes museum access, guide and local tasting."
    },
    price: { es: "Desde $480 MXN", en: "From $480 MXN" },
    note: { es: "Precio por persona", en: "Per person" }
  },
  {
    id: "sunset-pack",
    title: { es: "Sunset Pack Presa Las Vírgenes", en: "Las Vírgenes Sunset Pack" },
    description: {
      es: "Transporte, picnic al atardecer y fotos aéreas incluidas.",
      en: "Transport, sunset picnic and aerial photos."
    },
    price: { es: "2x1 los viernes", en: "2-for-1 on Fridays" },
    note: { es: "Reserva anticipada", en: "Book ahead" }
  }
];

export const ToursExplorer = () => {
  const { locale } = useLocale();
  const sectionCopy = getTranslations(locale).sections;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [selected, setSelected] = useState<(typeof tours)[number] | null>(null);

  const availableDates = useMemo(() => {
    const dates = new Set<string>();
    tours.forEach((tour) => tour.nextDates.forEach((d) => dates.add(d)));
    return Array.from(dates);
  }, []);

  const filtered = useMemo(() => {
    return tours.filter((tour) => {
      const matchesCategory = category ? tour.category === category : true;
      const term = search.toLowerCase();
      const matchesSearch = term
        ? tour.title.es.toLowerCase().includes(term) ||
          tour.title.en.toLowerCase().includes(term) ||
          tour.description.es.toLowerCase().includes(term)
        : true;
      const matchesPrice =
        (!minPrice || tour.price >= Number(minPrice)) &&
        (!maxPrice || tour.price <= Number(maxPrice));
      const matchesDuration = duration ? tour.durationHours <= Number(duration) : true;
      const matchesDate = date ? tour.nextDates.includes(date) : true;
      return matchesCategory && matchesSearch && matchesPrice && matchesDuration && matchesDate;
    });
  }, [category, search, minPrice, maxPrice, duration, date]);

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <p className="font-script text-2xl text-secondary/80">
          {locale === "es" ? "Explora Delicias" : "Explore Delicias"}
        </p>
        <p className="text-[11px] uppercase tracking-[0.5em] text-foreground/60">
          {locale === "es" ? "Tours destacados" : "Featured tours"}
        </p>
        <p className="max-w-3xl text-sm text-muted-foreground">
          {locale === "es"
            ? "Filtra por categoría, precio o fecha. Curamos experiencias diurnas y nocturnas para que planifiques tu visita desde Chihuahua capital."
            : "Filter by category, price or date. We curate day & night experiences so you can plan straight from Chihuahua capital."}
        </p>
      </div>

      <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_20px_55px_rgba(4,18,42,0.08)]">
        <TourFilters
          search={search}
          category={category}
          minPrice={minPrice}
          maxPrice={maxPrice}
          duration={duration}
          date={date}
          availableDates={availableDates}
          onSearch={setSearch}
          onCategory={setCategory}
          onMinPrice={setMinPrice}
          onMaxPrice={setMaxPrice}
          onDuration={setDuration}
          onDate={setDate}
        />
        <div className="mt-6">
          <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-secondary/80">
            <Tag className="h-4 w-4" />
            <span>{locale === "es" ? "Promociones especiales" : "Special offers"}</span>
            <span className="text-muted-foreground/80 normal-case tracking-normal text-[11px]">
              {locale === "es"
                ? "Combos para grupos, roadtrips y escapadas express."
                : "Combos for groups, roadtrips and express escapes."}
            </span>
          </div>
          <div className="mt-3 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {specialOffers.map((offer) => (
              <Card
                key={offer.id}
                className="min-w-[240px] flex-1 border border-black/5 bg-white/90 shadow-sm"
              >
                <CardContent className="space-y-1.5 p-3">
                  <p className="text-sm font-semibold text-secondary">{offer.title[locale]}</p>
                  <p className="text-xs text-muted-foreground">{offer.description[locale]}</p>
                  <div className="flex items-center justify-between text-[13px] font-semibold text-foreground">
                    <span>{offer.price[locale]}</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/70">
                      {offer.note[locale]}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {filtered.map((tour, index) => (
          <Reveal key={tour.id} variant="fade-up" delay={index * 80}>
            <Card className="overflow-hidden border border-black/5 bg-white shadow-[0_20px_45px_rgba(4,18,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(4,18,42,0.12)]">
              <div className="grid gap-4 md:grid-cols-[0.9fr,1.1fr]">
                <img
                  src={tour.gallery[0]}
                  alt={tour.title[locale]}
                  className="h-64 w-full object-cover md:h-full"
                  loading="lazy"
                  decoding="async"
                />
                <CardContent className="space-y-3 p-6">
                  <div className="text-[11px] uppercase tracking-[0.4em] text-secondary/70">
                    {tour.category}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{tour.title[locale]}</h3>
                  <p className="text-sm text-muted-foreground">{tour.description[locale]}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-4 w-4 text-primary" /> {tour.durationHours}h
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-primary" /> ${tour.price} MXN
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-4 w-4 text-primary" />
                      {typeof (tour as any).rating === "number" ? (tour as any).rating.toFixed(1) : "—"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
                      {tour.nextDates.slice(0, 2).join(" · ")}
                    </div>
                    <Button
                      className="rounded-full px-6 py-2 text-[11px] uppercase tracking-[0.35em]"
                      onClick={() => setSelected(tour)}
                    >
                      {locale === "es" ? "Ver detalle" : "Details"}
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-4xl overflow-y-auto max-h-[90vh]">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.title[locale]}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
                <div className="space-y-4">
                  <p className="text-muted-foreground">{selected.description[locale]}</p>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">
                      {locale === "es" ? "Itinerario" : "Itinerary"}
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {selected.itinerary.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">
                      {locale === "es" ? "Incluye" : "Includes"}
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {selected.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-muted/30 p-4">
                      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                        {locale === "es" ? "Duración" : "Duration"}
                      </p>
                      <p className="text-2xl font-semibold text-foreground">{selected.durationHours}h</p>
                    </div>
                    <div className="rounded-xl bg-muted/30 p-4">
                      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                        {locale === "es" ? "Precio" : "Price"}
                      </p>
                      <p className="text-2xl font-semibold text-foreground">${selected.price} MXN</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-muted/40 bg-muted/10 p-4 space-y-3">
                    <p className="flex items-center gap-2 text-foreground font-semibold">
                      <MapPin className="h-4 w-4 text-primary" /> {locale === "es" ? "Ubicación" : "Location"}
                    </p>
                    <p>
                      {selected.location.lat.toFixed(3)}, {selected.location.lng.toFixed(3)}
                    </p>
                    <Button asChild variant="outline" className="mt-3 w-full">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${selected.location.lat},${selected.location.lng}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {locale === "es" ? "Ver en Maps" : "Open in Maps"}
                      </a>
                    </Button>
                  </div>
                  <TourMap position={selected.location} label={selected.title[locale]} />
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
