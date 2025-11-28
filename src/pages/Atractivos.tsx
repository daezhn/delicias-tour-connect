import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { attractions } from "@/data/attractions";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, MapPin, Clock, DollarSign, Phone, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSmartBackNavigation } from "@/hooks/use-smart-back-navigation";
import { SEO } from "@/components/SEO";
import { useLocale } from "@/hooks/use-locale";
import { MotionReveal } from "@/components/MotionReveal";
import { useState } from "react";
import type { Attraction } from "@/data/attractions";

const Atractivos = () => {
  const { locale } = useLocale();
  const handleBack = useSmartBackNavigation();
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

  const openGoogleMaps = (location: string) => {
    const query = encodeURIComponent(`${location}, Delicias, Chihuahua`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={locale === "es" ? "Atractivos Turísticos" : "Tourist Attractions"}
        description={
          locale === "es"
            ? "Visita el Museo del Desierto, el Reloj Público y los parques emblemáticos de Delicias."
            : "Visit the Desert Museum, the Public Clock and iconic parks in Delicias."
        }
      />
      <Navigation />
      <main className="page-offset">
        <section id="inicio" className="relative overflow-hidden" tabIndex={-1}>
          <div className="absolute inset-0">
            <img
              src="/images/hero-delicias.jpg"
              alt="Atractivos turisticos en Delicias"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          </div>
          <div className="relative z-10">
            <div className="container mx-auto px-4 py-20 md:py-28">
              <MotionReveal variant="fade-up" duration={0.8}>
                <div className="max-w-3xl space-y-6 text-white">
                  <Badge className="bg-primary/80 text-white">Explora Delicias</Badge>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Todos los atractivos turisticos de Delicias
                  </h1>
                  <p className="text-lg md:text-xl text-white/80">
                    Encuentra experiencias culturales, gastronomicas, historicas y naturales para planear
                    tu visita a la region.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="secondary"
                      className="bg-white/20 text-white hover:bg-white/30"
                      onClick={handleBack}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Volver al inicio
                    </Button>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section id="atractivos" className="py-16 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Catalogo de atractivos
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Descubre los puntos imperdibles de Delicias, agrupados por categoria para que armes tu itinerario.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {attractions.map((place, index) => (
                <MotionReveal
                  key={place.id}
                  variant="fade-up"
                  delay={index * 0.1}
                  duration={0.5}
                  className="h-full"
                >
                  <Card
                    id={`atractivo-${place.id}`}
                    className="group h-full overflow-hidden border-0 bg-gradient-to-br from-[#1f242f] via-[#2c3140] to-[#1b1e26] shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
                    onClick={() => setSelectedAttraction(place)}
                  >
                    <div className="relative aspect-[4/5] flex flex-col items-center justify-center overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className={cn(
                          "max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105",
                          place.imageClass,
                        )}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="px-5 pb-6 pt-5 text-center">
                      <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
                        {place.category}
                      </span>
                      <p className="mt-4 text-xl font-semibold text-white tracking-wide">
                        {locale === "es" ? place.name : (place.nameEn || place.name)}
                      </p>
                      <p className="mt-2 text-sm text-white/60 line-clamp-2">
                        {locale === "es" ? place.description : (place.descriptionEn || place.description)}
                      </p>
                    </div>
                  </Card>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Dialog open={!!selectedAttraction} onOpenChange={(open) => !open && setSelectedAttraction(null)}>
        <DialogContent className="max-w-2xl overflow-y-auto max-h-[90vh] rounded-[28px] border border-white/40 bg-gradient-to-br from-white via-[#fef7ef] to-[#ecfbff] shadow-[0_45px_95px_rgba(4,18,42,0.18)]">
          {selectedAttraction && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-secondary">
                  {locale === "es" ? selectedAttraction.name : (selectedAttraction.nameEn || selectedAttraction.name)}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img
                  src={selectedAttraction.image}
                  alt={selectedAttraction.name}
                  className="h-48 w-full rounded-xl object-cover bg-slate-100"
                />
                <Badge className="bg-primary/10 text-primary">{selectedAttraction.category}</Badge>
                <p className="text-muted-foreground">
                  {locale === "es" ? selectedAttraction.description : (selectedAttraction.descriptionEn || selectedAttraction.description)}
                </p>
                
                <div className="grid gap-3">
                  {selectedAttraction.location && (
                    <div className="rounded-xl border border-black/5 bg-white/80 p-4 space-y-1">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {locale === "es" ? "Ubicación" : "Location"}
                      </p>
                      <p className="text-sm">{selectedAttraction.location}</p>
                    </div>
                  )}

                  {selectedAttraction.schedule && (
                    <div className="rounded-xl border border-black/5 bg-white/80 p-4 space-y-1">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {locale === "es" ? "Horario" : "Schedule"}
                      </p>
                      <p className="text-sm">{selectedAttraction.schedule}</p>
                    </div>
                  )}

                  {selectedAttraction.cost && (
                    <div className="rounded-xl border border-black/5 bg-white/80 p-4 space-y-1">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        {locale === "es" ? "Costo" : "Cost"}
                      </p>
                      <p className="text-sm">{selectedAttraction.cost}</p>
                    </div>
                  )}

                  {selectedAttraction.highlights && selectedAttraction.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {selectedAttraction.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {selectedAttraction.contact && (
                    <a
                      href={`tel:${selectedAttraction.contact.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-2 text-sm font-semibold text-secondary transition hover:bg-secondary/10"
                    >
                      <Phone className="h-4 w-4" />
                      {selectedAttraction.contact}
                    </a>
                  )}
                  {selectedAttraction.web && (
                    <a
                      href={selectedAttraction.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-primary/90"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {locale === "es" ? "Más información" : "More info"}
                    </a>
                  )}
                  {selectedAttraction.location && (
                    <Button
                      className="rounded-full bg-secondary text-white hover:bg-secondary/90"
                      onClick={() => openGoogleMaps(selectedAttraction.location!)}
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      {locale === "es" ? "Ver en mapa" : "View on map"}
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Atractivos;
