import { useMemo, useState } from "react";
import { tours } from "@/data/tours";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TourFilters } from "@/components/TourFilters";
import { Reveal } from "@/components/Reveal";
import { MapPin, Clock, DollarSign, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";

export const ToursExplorer = () => {
  const { locale } = useLocale();
  const sectionCopy = getTranslations(locale).sections;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [selected, setSelected] = useState<(typeof tours)[number] | null>(null);

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
      return matchesCategory && matchesSearch && matchesPrice && matchesDuration;
    });
  }, [category, search, minPrice, maxPrice, duration]);

  return (
    <section className="py-20 bg-muted/20" id="tours">
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
          onSearch={setSearch}
          onCategory={setCategory}
          onMinPrice={setMinPrice}
          onMaxPrice={setMaxPrice}
          onDuration={setDuration}
        />

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
