import { useState } from "react";
import { MapPin, Phone, ExternalLink, Users, Bed, Accessibility, Calendar } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";
import { hotels } from "@/data/hotels";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Hotel } from "@/data/hotels";

export const Hotels = () => {
  const { locale } = useLocale();
  const translations = getTranslations(locale);
  const hotelsCopy = translations.sections.hotels;
  const script = locale === "es" ? "Sueña distinto" : "Dream differently";
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  const openGoogleMaps = (direccion: string) => {
    const query = encodeURIComponent(`${direccion}, Delicias, Chihuahua`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="font-script text-2xl text-secondary/80">{script}</p>
        <h2 className="text-3xl font-extrabold tracking-tight">{hotelsCopy.title}</h2>
        {hotelsCopy.intro && (
          <p className="max-w-xl text-sm text-muted-foreground">{hotelsCopy.intro}</p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {hotels.map((hotel) => (
          <article
            key={hotel.id}
            className="group flex flex-col overflow-hidden rounded-[24px] border border-black/5 bg-white/95 shadow-[0_18px_45px_rgba(4,18,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(4,18,42,0.12)]"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={hotel.imagen || "/images/hoteles/1.jpg"}
                alt={hotel.nombre}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-secondary shadow">
                {hotel.rangoPrecio}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-4 space-y-3">
              <h3 className="text-lg font-bold text-secondary line-clamp-1">{hotel.nombre}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {locale === "es" ? hotel.descripcion : (hotel.descripcionEn || hotel.descripcion)}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Bed className="h-3.5 w-3.5 text-primary" />
                  {hotel.numHabitaciones} {locale === "es" ? "hab." : "rooms"}
                </span>
                {hotel.salonEventos && (
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {locale === "es" ? "Eventos" : "Events"}
                  </span>
                )}
                {hotel.accesibilidad !== "No" && (
                  <span className="inline-flex items-center gap-1">
                    <Accessibility className="h-3.5 w-3.5 text-primary" />
                  </span>
                )}
              </div>
              <div className="mt-auto flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-full text-xs"
                  onClick={() => setSelectedHotel(hotel)}
                >
                  {locale === "es" ? "Ver más" : "Details"}
                </Button>
                <Button
                  size="sm"
                  className="flex-1 rounded-full bg-primary text-xs text-white hover:bg-primary/90"
                  onClick={() => openGoogleMaps(hotel.direccion)}
                >
                  <MapPin className="mr-1 h-3 w-3" />
                  {locale === "es" ? "Mapa" : "Map"}
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <a
          href="https://www.google.com/maps/search/hoteles+en+delicias+chihuahua/@28.2122512,-105.4975832,14z/data=!3m1!4b1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_12px_30px_rgba(0,174,192,0.35)] transition hover:bg-secondary/90"
        >
          {translations.buttons.mapHotels}
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <Dialog open={!!selectedHotel} onOpenChange={(open) => !open && setSelectedHotel(null)}>
        <DialogContent className="max-w-2xl overflow-y-auto max-h-[90vh] rounded-[28px] border border-white/40 bg-gradient-to-br from-white via-[#fef7ef] to-[#ecfbff] shadow-[0_45px_95px_rgba(4,18,42,0.18)]">
          {selectedHotel && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-secondary">
                  {selectedHotel.nombre}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img
                  src={selectedHotel.imagen || "/images/hoteles/1.jpg"}
                  alt={selectedHotel.nombre}
                  className="h-48 w-full rounded-xl object-cover"
                />
                <p className="text-muted-foreground">
                  {locale === "es" ? selectedHotel.descripcion : (selectedHotel.descripcionEn || selectedHotel.descripcion)}
                </p>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-black/5 bg-white/80 p-4 space-y-2">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {locale === "es" ? "Precio" : "Price"}
                    </p>
                    <p className="text-xl font-bold text-secondary">{selectedHotel.rangoPrecio}</p>
                  </div>
                  <div className="rounded-xl border border-black/5 bg-white/80 p-4 space-y-2">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {locale === "es" ? "Habitaciones" : "Rooms"}
                    </p>
                    <p className="text-xl font-bold text-secondary">{selectedHotel.numHabitaciones}</p>
                  </div>
                </div>

                {selectedHotel.tiposHabitacion && (
                  <div className="rounded-xl border border-black/5 bg-white/80 p-4 space-y-2">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {locale === "es" ? "Tipos de habitación" : "Room types"}
                    </p>
                    <p className="text-sm">{selectedHotel.tiposHabitacion}</p>
                  </div>
                )}

                {selectedHotel.salonEventos && selectedHotel.capacidadSalon && (
                  <div className="rounded-xl border border-black/5 bg-white/80 p-4 space-y-2">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {locale === "es" ? "Salón de eventos" : "Event hall"}
                    </p>
                    <p className="text-sm">{selectedHotel.capacidadSalon}</p>
                  </div>
                )}

                <div className="rounded-xl border border-black/5 bg-white/80 p-4 space-y-2">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {locale === "es" ? "Dirección" : "Address"}
                  </p>
                  <p className="text-sm">{selectedHotel.direccion}</p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={`tel:${selectedHotel.telefono.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-2 text-sm font-semibold text-secondary transition hover:bg-secondary/10"
                  >
                    <Phone className="h-4 w-4" />
                    {selectedHotel.telefono}
                  </a>
                  <a
                    href={selectedHotel.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-primary/90"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {locale === "es" ? "Sitio web" : "Website"}
                  </a>
                  <Button
                    className="rounded-full bg-secondary text-white hover:bg-secondary/90"
                    onClick={() => openGoogleMaps(selectedHotel.direccion)}
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    {locale === "es" ? "Ver en mapa" : "View on map"}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
