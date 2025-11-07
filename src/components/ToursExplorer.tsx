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
      es: "Incluye entrada a 2 museos, guía especializado y degustación regional.",
      en: "Includes access to 2 museums, expert guide and regional tasting."
    },
    price: { es: "Desde $480 MXN", en: "From $480 MXN" },
    note: { es: "Precio por persona, cupo limitado", en: "Per person, limited seats" }
  },
  {
    id: "sunset-pack",
    title: { es: "Sunset Pack Presa Las Vírgenes", en: "Las Vírgenes Sunset Pack" },
    description: {
      es: "Transporte, picnic al atardecer y fotos aéreas incluidas.",
      en: "Transport, sunset picnic and aerial photos included."
    },
    price: { es: "2x1 los viernes", en: "2-for-1 on Fridays" },
    note: { es: "Reservación anticipada requerida", en: "Advance booking required" }
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
    <section className="py-20" id="tours">
      <div className="container mx-auto px-4">
        <Reveal variant="fade-up" className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
            {locale === "es" ? "Explora" : "Explore"}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {locale === "es" ? "Tours Destacados" : "Featured Tours"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {locale === "es"
              ? "Filtra por categoría o busca por palabra clave para planear tu visita."
              : "Filter by category or search to plan your visit."}
          </p>
        </Reveal>

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

        <Reveal variant="fade-up" delay={80} className="mt-6">
          <div className="rounded-xl border border-primary/10 bg-white/90 shadow-md shadow-primary/10 p-4">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary/80">
              <Tag className="h-4 w-4" />
              <span>{locale === "es" ? "Promociones especiales" : "Special offers"}</span>
              <span className="text-muted-foreground/80 normal-case tracking-normal text-[11px]">
                {locale === "es"
                  ? "Mantén visibles tus combos sin desplazar los tours."
                  : "Keep combos visible without pushing tours away."}
              </span>
            </div>
            <div className="mt-3 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {specialOffers.map((offer) => (
                <Card
                  key={offer.id}
                  className="min-w-[240px] flex-1 border border-primary/20 bg-primary/5 shadow-sm"
                >
                  <CardContent className="space-y-1.5 p-3">
                    <p className="text-sm font-semibold text-primary">{offer.title[locale]}</p>
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
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tour, index) => (
            <Reveal key={tour.id} variant="fade-up" delay={index * 80}>
              <Card className="h-full overflow-hidden border border-transparent bg-white shadow-lg transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">
                <img
                  src={tour.gallery[0]}
                  alt={tour.title[locale]}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <CardContent className="space-y-3 p-6">
                  <div className="text-sm uppercase tracking-[0.3em] text-primary">
                    {tour.category}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{tour.title[locale]}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {tour.description[locale]}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-primary" /> {tour.durationHours}h
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-primary" /> ${tour.price} MXN
                    </span>
                  </div>
                  <Button className="w-full" onClick={() => setSelected(tour)}>
                    {locale === "es" ? "Ver detalle" : "View details"}
                  </Button>
                </CardContent>
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
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">
                        {locale === "es" ? "Próximas fechas" : "Upcoming dates"}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selected.nextDates.map((date) => (
                          <span key={date} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                            {date}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <img
                      src={selected.gallery[0]}
                      alt={selected.title[locale]}
                      className="w-full rounded-xl object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">
                        {locale === "es" ? "Testimonios" : "Testimonials"}
                      </h4>
                      <div className="space-y-3">
                        {selected.testimonials.map((testimonial) => (
                          <div key={testimonial.name} className="rounded-xl bg-muted/50 p-3 text-sm text-muted-foreground">
                            <p className="font-semibold text-foreground flex items-center gap-2">
                              <Star className="h-4 w-4 text-primary" /> {testimonial.name}
                            </p>
                            <p>{testimonial.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="rounded-xl bg-muted/50 p-4 text-sm text-muted-foreground">
                        <p className="flex items-center gap-2 text-foreground font-semibold">
                          <MapPin className="h-4 w-4 text-primary" /> {locale === "es" ? "Ubicación" : "Location"}
                        </p>
                        <p>{selected.location.lat.toFixed(3)}, {selected.location.lng.toFixed(3)}</p>
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
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
