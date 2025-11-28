import { useMemo, useState } from "react";
import { tours, type Tour } from "@/data/tours";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TourFilters } from "@/components/TourFilters";
import { Reveal } from "@/components/Reveal";
import { MapPin, Clock, DollarSign, Star, Tag } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";
import { TourMap } from "@/components/TourMap";
import { SpotlightCard } from "@/components/ui/spotlight-card";

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
  const [selected, setSelected] = useState<Tour | null>(null);

  const availableDates = useMemo(() => {
    const dates = new Set<string>();
    tours.forEach((tour) => tour.nextDates.forEach((d) => dates.add(d)));
    return Array.from(dates);
  }, []);

  const highlightImages = useMemo(() => {
    const seen = new Set<string>();
    const images: string[] = [];
    tours.forEach((tour) => {
      tour.gallery.forEach((src) => {
        if (!seen.has(src)) {
          seen.add(src);
          images.push(src);
        }
      });
    });
    return images.slice(0, 8);
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
      <div className="overflow-hidden rounded-[40px] border border-white/40 bg-gradient-to-r from-[#f6b043]/30 via-transparent to-[#163d8b]/30 p-4 shadow-[0_30px_70px_rgba(4,18,42,0.25)]">
        <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {highlightImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="relative h-32 min-w-[220px] overflow-hidden rounded-3xl border border-white/50 shadow-[0_20px_45px_rgba(4,18,42,0.15)]"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[36px] border border-white/40 bg-white/10 p-6 text-white shadow-[0_45px_110px_rgba(0,0,0,0.35)] backdrop-blur-2xl space-y-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
          <div className="flex-1">
            <TourFilters
              search={search}
              category={category}
              minPrice={minPrice}
              maxPrice={maxPrice}
              duration={duration}
              date={date}
              availableDates={availableDates}
              light
              onSearch={setSearch}
              onCategory={setCategory}
              onMinPrice={setMinPrice}
              onMaxPrice={setMaxPrice}
              onDuration={setDuration}
              onDate={setDate}
              onSubmit={() => {/* El filtrado es automático, el botón da feedback visual */}}
            />
          </div>
        </div>
        <div className="mt-6">
          <div className="flex flex-wrap items-center gap-3 rounded-full border border-white/30 bg-white/15 px-5 py-2 text-[11px] uppercase tracking-[0.4em] text-white/90 shadow-sm">
            <Tag className="h-4 w-4" />
            <span>{locale === "es" ? "Promociones especiales" : "Special offers"}</span>
            <span className="text-white/80 normal-case tracking-normal text-[11px]">
              {locale === "es"
                ? "Combos para grupos, roadtrips y escapadas express."
                : "Combos for groups, roadtrips and express escapes."}
            </span>
          </div>
          <div className="mt-3 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {specialOffers.map((offer) => (
              <Card
                key={offer.id}
                className="min-w-[260px] flex-1 border border-white/40 bg-white/15 text-white shadow-[0_15px_35px_rgba(0,0,0,0.35)]"
              >
                <CardContent className="space-y-2 p-4">
                  <p className="font-tourism text-xl text-white">{offer.title[locale]}</p>
                  <p className="text-xs text-white/80">{offer.description[locale]}</p>
                  <div className="flex items-center justify-between text-sm font-semibold text-white">
                    <span className="text-lg font-bold text-white">{offer.price[locale]}</span>
                    <span className="rounded-full border border-white/40 px-2 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80">
                      {offer.note[locale]}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-foreground">
        {filtered.map((tour, index) => (
          <Reveal key={tour.id} variant="fade-up" delay={index * 80}>
            <SpotlightCard className="flex h-full flex-col overflow-hidden border border-white/50 bg-white/80 shadow-[0_30px_70px_rgba(4,18,42,0.12)] transition hover:-translate-y-1 hover:shadow-[0_40px_90px_rgba(4,18,42,0.15)] backdrop-blur">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.gallery[0]}
                  alt={tour.title[locale]}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.4em] text-secondary shadow">
                  {tour.category}
                </span>
              </div>
              <CardContent className="flex flex-1 flex-col space-y-3 p-5">
                <p className="font-tourism text-2xl text-secondary/80">
                  {tour.title[locale]}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-3">{tour.description[locale]}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-4 w-4 text-primary" /> {tour.durationHours}h
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <DollarSign className="h-4 w-4 text-primary" /> ${tour.price} MXN
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-4 w-4 text-primary" />
                    {typeof tour.rating === "number" ? tour.rating.toFixed(1) : "—"}
                  </span>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {tour.nextDates.slice(0, 2).map((d) => (
                      <span
                        key={d}
                        className="rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-secondary"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                  <Button
                    className="rounded-full bg-secondary px-6 py-2 text-[11px] uppercase tracking-[0.35em] text-white shadow-md hover:bg-secondary/90"
                    onClick={() => setSelected(tour)}
                  >
                    {locale === "es" ? "Ver detalle" : "Details"}
                  </Button>
                </div>
              </CardContent>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-4xl overflow-y-auto max-h-[90vh] rounded-[36px] border border-white/40 bg-gradient-to-br from-white via-[#fef7ef] to-[#ecfbff] shadow-[0_45px_95px_rgba(4,18,42,0.18)]">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-tourism text-3xl text-secondary/90">
                  {selected.title[locale]}
                </DialogTitle>
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
                    <div className="rounded-xl border border-white/40 bg-white/80 p-4 shadow">
                      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                        {locale === "es" ? "Duración" : "Duration"}
                      </p>
                      <p className="text-2xl font-semibold text-foreground">{selected.durationHours}h</p>
                    </div>
                    <div className="rounded-xl border border-white/40 bg-white/80 p-4 shadow">
                      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                        {locale === "es" ? "Precio" : "Price"}
                      </p>
                      <p className="text-2xl font-semibold text-foreground">${selected.price} MXN</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/40 bg-white/80 p-4 space-y-3 shadow">
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
