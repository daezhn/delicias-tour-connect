import { cn } from "@/lib/utils";

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
  return (
    <section className="py-10 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 via-white/2 to-transparent p-4 md:p-6 shadow-[0_20px_90px_-35px_rgba(15,23,42,0.9)]">
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.5em] text-primary/70">
            <span className="h-px flex-1 bg-primary/40" />
            <span>Delicias Foto Tour</span>
            <span className="h-px flex-1 bg-primary/40" />
          </div>
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 md:gap-4 [column-fill:balance]">
            {galleryImages.map((image) => (
              <figure
                key={image.src}
                className={cn(
                  "group mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-black/30 via-black/10 to-black/40 shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
                )}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/70 opacity-30 transition duration-500 group-hover:opacity-80" />
                  <span className="absolute inset-[4%] rounded-[20px] border border-white/20 opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,166,94,0.35)] via-transparent to-[rgba(56,189,248,0.35)] opacity-70 group-hover:opacity-90 transition duration-500" />
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="block w-full object-cover transition duration-700 ease-out group-hover:scale-[1.08] group-hover:rotate-[0.5deg]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute inset-[12%] rounded-[26px] border border-white/30 blur-sm animate-pulse-glow" />
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
