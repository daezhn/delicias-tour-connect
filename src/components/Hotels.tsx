import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";

const hotelImages = [
  "/images/hoteles/1.jpg",
  "/images/hoteles/2.jpg",
  "/images/hoteles/3.jpg",
  "/images/hoteles/4.jpg",
  "/images/hoteles/5.jpg"
];

export const Hotels = () => {
  const [index, setIndex] = useState(0);
  const { locale } = useLocale();
  const translations = getTranslations(locale);
  const hotelsCopy = translations.sections.hotels;
  const script = locale === "es" ? "Sueña en la capital del desierto" : "Dream in the desert capital";

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % hotelImages.length), 4500);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => setIndex((prev) => (prev + 1) % hotelImages.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + hotelImages.length) % hotelImages.length);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <p className="font-script text-2xl text-secondary/80">{script}</p>
        <p className="text-[11px] uppercase tracking-[0.5em] text-foreground/60">{hotelsCopy.title}</p>
        {hotelsCopy.intro && (
          <p className="max-w-xl text-sm text-muted-foreground">{hotelsCopy.intro}</p>
        )}
      </div>

      <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_25px_55px_rgba(4,18,42,0.1)]">
        <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            {hotelImages.map((image, i) => (
              <img
                key={image}
                src={image}
                alt={`Hotel en Delicias ${i + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  index === i ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                decoding="async"
              />
            ))}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-white"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-white"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <p className="text-sm text-muted-foreground">
              {locale === "es"
                ? "Desde hoteles boutique hasta estancias familiares con alberca, Delicias ofrece hospedaje para cada itinerario."
                : "From boutique hotels to family-friendly stays with pools, Delicias has a room for every plan."}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {hotelImages.map((image, i) => (
                <button
                  key={image}
                  onClick={() => setIndex(i)}
                  className={`overflow-hidden rounded-2xl border ${index === i ? "border-primary" : "border-black/5"}`}
                  aria-label={`Ver hotel ${i + 1}`}
                >
                  <img src={image} alt="" className="h-24 w-full object-cover" loading="lazy" decoding="async" />
                </button>
              ))}
            </div>
            <a
              href="https://www.google.com/maps/search/hoteles+en+delicias+chihuahua/@28.2122512,-105.4975832,14z/data=!3m1!4b1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-white shadow-[0_15px_35px_rgba(0,174,192,0.35)] transition hover:bg-primary/90"
            >
              {translations.buttons.mapHotels}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
