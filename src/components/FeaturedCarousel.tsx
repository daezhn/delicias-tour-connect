import { useEffect, useState } from "react";
import { FadeImage } from "@/components/FadeImage";

const galleryImages = [
  { src: "/images/Galería/1.jpg", alt: "Plaza central en Delicias" },
  { src: "/images/Galería/2.jpg", alt: "Gastronomía local colorida" },
  { src: "/images/Galería/3.jpg", alt: "Detalles arquitectónicos" },
  { src: "/images/Galería/4.jpg", alt: "Ambiente nocturno" },
  { src: "/images/Galería/5.jpg", alt: "Naturaleza en Delicias" },
  { src: "/images/Galería/6.jpg", alt: "Arte urbano contemporáneo" },
  { src: "/images/Galería/7.jpg", alt: "Paisaje icónico al atardecer" },
  { src: "/images/Galería/8.jpg", alt: "Eventos culturales" },
  { src: "/images/Galería/9.jpg", alt: "Hospitalidad local" },
  { src: "/images/Galería/10.jpg", alt: "Gastronomía creativa" },
  { src: "/images/Galería/11.jpg", alt: "Mercado tradicional" },
  { src: "/images/Galería/12.jpg", alt: "Experiencias al aire libre" },
  { src: "/images/Galería/13.jpg", alt: "Detalles de la ciudad" },
  { src: "/images/Galería/14.jpg", alt: "Arquitectura clásica" },
  { src: "/images/Galería/15.jpg", alt: "Tradiciones locales" },
  { src: "/images/Galería/16.jpg", alt: "Fachadas emblemáticas" },
  { src: "/images/Galería/17.jpg", alt: "Callejuela colorida" },
  { src: "/images/Galería/18.jpg", alt: "Panorama regional" },
  { src: "/images/Galería/19.jpg", alt: "Festividades en Delicias" },
  { src: "/images/Galería/20.jpg", alt: "Destinos cercanos al amanecer" },
];

export const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = galleryImages.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const goTo = (index: number) => setCurrentIndex(index);
  const getImage = (offset: number) =>
    galleryImages[(currentIndex + offset + total) % total];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="rounded-[32px] border border-primary/30 bg-gradient-to-b from-white/5 to-white/0 p-6 md:p-12 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.8)]">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs uppercase tracking-[0.6em] text-primary/70">
              Delicias Foto Tour
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="relative flex w-full max-w-6xl items-center justify-center gap-6">
              {[ -1, 0, 1 ].map((offset) => {
                const image = getImage(offset);
                const isActive = offset === 0;
                return (
                  <button
                    key={`${image.src}-${offset}`}
                    onClick={() => {
                      if (isActive) return;
                      setCurrentIndex((prev) => (prev + offset + total) % total);
                    }}
                    aria-label={isActive ? "Foto actual" : "Cambiar imagen"}
                    className={`relative overflow-hidden rounded-[32px] transition-all duration-500 ${
                      isActive
                        ? "h-[540px] w-[78%] shadow-2xl"
                        : "h-[260px] w-[14%] opacity-50 hover:opacity-90"
                    }`}
                    style={{ transform: isActive ? "scale(1)" : "scale(0.75)" }}
                  >
                    <FadeImage
                      src={image.src}
                      alt={image.alt}
                      containerClassName="h-full w-full"
                      className="h-full w-full object-cover"
                      loading={isActive ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </button>
                );
              })}
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.4em] text-foreground backdrop-blur hover:bg-white/30 md:block"
                aria-label="Anterior"
              >
                ←
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.4em] text-foreground backdrop-blur hover:bg-white/30 md:block"
                aria-label="Siguiente"
              >
                →
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {galleryImages.map((image, index) => (
                <button
                  key={image.src}
                  onClick={() => goTo(index)}
                  className={`h-2 w-2 rounded-full transition ${
                    index === currentIndex ? "w-8 bg-primary" : "bg-muted-foreground/40 hover:bg-primary/60"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
