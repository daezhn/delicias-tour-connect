import { useMemo, useState } from "react";
import { tours, type Tour } from "@/data/tours";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { MapPin, Clock, DollarSign, Users, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLocale } from "@/hooks/use-locale";
import { TourMap } from "@/components/TourMap";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export const ToursExplorer = () => {
  const { locale } = useLocale();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Tour | null>(null);

  const filtered = useMemo(() => {
    return tours.filter((tour) => {
      const term = search.toLowerCase();
      const matchesSearch = term
        ? tour.title.es.toLowerCase().includes(term) ||
        tour.title.en.toLowerCase().includes(term) ||
        tour.description.es.toLowerCase().includes(term)
        : true;
      return matchesSearch;
    });
  }, [search]);

  return (
    <div className="space-y-10">
      {/* Header con imagen de CAVALL */}
      <div className="overflow-hidden rounded-[40px] border border-white/40 bg-gradient-to-r from-[#f6b043]/30 via-transparent to-[#163d8b]/30 p-4 shadow-[0_30px_70px_rgba(4,18,42,0.25)]">
        <div className="relative h-48 w-full overflow-hidden rounded-3xl border border-white/50 shadow-[0_20px_45px_rgba(4,18,42,0.15)]">
          <img
            src="/images/cavall.webp"
            alt="Vinícola CAVALL"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/80">Enoturismo en Delicias</p>
            <h2 className="font-tourism text-3xl">Vinícola CAVALL</h2>
          </div>
        </div>
      </div>

      <div className="rounded-[36px] border border-white/40 bg-white/10 p-6 text-white shadow-[0_45px_110px_rgba(0,0,0,0.35)] backdrop-blur-2xl space-y-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="flex-1">
            <input
              type="text"
              placeholder={locale === "es" ? "Buscar paquetes..." : "Search packages..."}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-3 rounded-full border border-white/30 bg-white/15 px-5 py-2 text-[11px] uppercase tracking-[0.4em] text-white/90 shadow-sm">
            <MessageCircle className="h-4 w-4" />
            <span>{locale === "es" ? "Información importante" : "Important info"}</span>
            <span className="text-white/80 normal-case tracking-normal text-[11px]">
              {locale === "es"
                ? "Se requiere reservación previa • IVA no incluido si requiere factura • Vinos a precio especial de bodega"
                : "Advance reservation required • VAT not included if invoice needed • Wines at special winery prices"}
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 text-foreground">
        {filtered.map((tour, index) => {
          // Estilos visuales diferentes para cada paquete
          const cardStyles = [
            { overlay: "from-amber-900/70 via-amber-800/30 to-transparent", filter: "sepia(20%)", badge: "bg-amber-100 text-amber-800", icon: "🍇" },
            { overlay: "from-purple-900/70 via-purple-800/30 to-transparent", filter: "saturate(110%)", badge: "bg-purple-100 text-purple-800", icon: "🍷" },
            { overlay: "from-rose-900/70 via-rose-800/30 to-transparent", filter: "contrast(105%) saturate(120%)", badge: "bg-rose-100 text-rose-800", icon: "🍽️" },
            { overlay: "from-slate-900/70 via-slate-800/30 to-transparent", filter: "grayscale(20%) contrast(110%)", badge: "bg-slate-100 text-slate-800", icon: "✨" },
          ];
          const style = cardStyles[index % cardStyles.length];
          
          return (
          <Reveal key={tour.id} variant="fade-up" delay={index * 80}>
            <SpotlightCard className="flex h-full flex-col overflow-hidden border border-white/50 bg-white/80 shadow-[0_30px_70px_rgba(4,18,42,0.12)] transition hover:-translate-y-1 hover:shadow-[0_40px_90px_rgba(4,18,42,0.15)] backdrop-blur">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.gallery[0]}
                  alt={tour.title[locale]}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  style={{ filter: style.filter }}
                  loading="lazy"
                  decoding="async"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${style.overlay}`} />
                <span className={`absolute left-4 top-4 rounded-full px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.4em] shadow ${style.badge}`}>
                  {style.icon} {tour.category}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow">
                  {locale === "es" ? `Paquete ${index + 1}` : `Package ${index + 1}`}
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
                  {tour.price > 0 ? (
                    <span className="inline-flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-primary" /> ${tour.price.toLocaleString()} MXN
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-primary font-medium">
                      {locale === "es" ? "Precio variable" : "Variable price"}
                    </span>
                  )}
                  {tour.minPeople && (
                    <span className="inline-flex items-center gap-1">
                      <Users className="h-4 w-4 text-primary" /> {locale === "es" ? `Mín. ${tour.minPeople} personas` : `Min. ${tour.minPeople} people`}
                    </span>
                  )}
                </div>
                <div className="mt-auto flex items-center justify-between gap-3">
                  {tour.contactWhatsApp && (
                    <a
                      href={`https://wa.me/52${tour.contactWhatsApp}?text=${encodeURIComponent(locale === "es" ? `Hola, me interesa el paquete: ${tour.title.es}` : `Hi, I'm interested in the package: ${tour.title.en}`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-green-700 hover:bg-green-500/20 transition"
                    >
                      <MessageCircle className="h-3 w-3" />
                      {locale === "es" ? "Reservar" : "Book"}
                    </a>
                  )}
                  <Button
                    className="rounded-full bg-secondary px-6 py-2 text-[11px] uppercase tracking-[0.35em] text-white shadow-md hover:bg-secondary/90 ml-auto"
                    onClick={() => setSelected(tour)}
                  >
                    {locale === "es" ? "Ver detalle" : "Details"}
                  </Button>
                </div>
              </CardContent>
            </SpotlightCard>
          </Reveal>
        );
        })}
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
                      {selected.price > 0 ? (
                        <p className="text-2xl font-semibold text-foreground">${selected.price.toLocaleString()} MXN</p>
                      ) : (
                        <p className="text-lg font-semibold text-primary">
                          {selected.priceNote?.[locale] || (locale === "es" ? "Consultar" : "Contact us")}
                        </p>
                      )}
                    </div>
                  </div>
                  {selected.minPeople && (
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
                      <Users className="inline h-4 w-4 mr-2" />
                      {locale === "es" 
                        ? `Mínimo ${selected.minPeople} personas por reservación`
                        : `Minimum ${selected.minPeople} people per booking`}
                    </div>
                  )}
                  {selected.contactWhatsApp && (
                    <a
                      href={`https://wa.me/52${selected.contactWhatsApp}?text=${encodeURIComponent(locale === "es" ? `Hola, me interesa reservar: ${selected.title.es}` : `Hi, I'd like to book: ${selected.title.en}`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full rounded-full bg-green-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-green-700 transition"
                    >
                      <MessageCircle className="h-5 w-5" />
                      {locale === "es" ? "Reservar por WhatsApp" : "Book via WhatsApp"}
                    </a>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/40 bg-white/80 p-4 space-y-3 shadow">
                    <p className="flex items-center gap-2 text-foreground font-semibold">
                      <MapPin className="h-4 w-4 text-primary" /> {locale === "es" ? "Ubicación" : "Location"}
                    </p>
                    <p className="text-sm text-muted-foreground">Vinícola CAVALL, Delicias</p>
                    <Button asChild variant="outline" className="mt-3 w-full">
                      <a
                        href={selected.mapUrl || `https://www.google.com/maps/search/?api=1&query=${selected.location.lat},${selected.location.lng}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {locale === "es" ? "Ver en Maps" : "Open in Maps"}
                      </a>
                    </Button>
                  </div>
                  <TourMap position={selected.location} label={selected.title[locale]} />
                  <div className="rounded-xl border border-blue-200 bg-blue-50 p-3 text-xs text-blue-800 space-y-1">
                    <p className="font-semibold">{locale === "es" ? "Información importante:" : "Important info:"}</p>
                    <ul className="list-disc pl-4 space-y-0.5">
                      <li>{locale === "es" ? "Se requiere reservación previa" : "Advance reservation required"}</li>
                      <li>{locale === "es" ? "IVA adicional si requiere factura" : "VAT extra if invoice needed"}</li>
                      <li>{locale === "es" ? "Vinos a precio especial de bodega" : "Wines at special winery prices"}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
