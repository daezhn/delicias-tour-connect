import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { FadeImage } from "@/components/FadeImage";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";

const initialGalleryImages = [
  { src: "/images/Galería/1.webp", alt: "Vista aérea de Delicias" },
  { src: "/images/Galería/2.webp", alt: "Detalles urbanos y arquitectura" },
  { src: "/images/Galería/3.webp", alt: "Plaza principal al atardecer" },
  { src: "/images/Galería/4.webp", alt: "Ambiente nocturno con neones" },
  { src: "/images/Galería/5.webp", alt: "Paisaje desértico y nubes doradas" },
  { src: "/images/Galería/6.webp", alt: "Arte urbano contemporáneo" },
  { src: "/images/Galería/7.webp", alt: "Eventos culturales al aire libre" },
  { src: "/images/Galería/8.webp", alt: "Mercado local con colores vibrantes" },
  { src: "/images/Galería/9.webp", alt: "Escenarios creativos y gastronomía" },
  { src: "/images/Galería/10.webp", alt: "Cañones y formaciones rocosas" },
  { src: "/images/Galería/11.webp", alt: "Panorámica completa de la ciudad" },
  { src: "/images/Galería/12.webp", alt: "Vida nocturna con luces cálidas" },
  { src: "/images/Galería/13.webp", alt: "Hotel boutique con alberca" },
  { src: "/images/Galería/14.webp", alt: "Sabores regionales y mixología" },
  { src: "/images/Galería/15.webp", alt: "Rutas carreteras hacia el valle" },
  { src: "/images/Galería/16.webp", alt: "Escenarios para ciclismo" },
  { src: "/images/Galería/17.webp", alt: "Miradores naturales" },
  { src: "/images/Galería/18.webp", alt: "Festividades comunitarias" },
  { src: "/images/Galería/19.webp", alt: "Experiencias de aventura" },
  { src: "/images/Galería/20.webp", alt: "Atardeceres en Delicias" }
];

const additionalImages = [
  "1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp", "10.webp",
  "11.webp", "12.webp", "13.webp", "14.webp", "15.webp", "16.webp", "17.webp", "18.webp", "19.webp", "29.webp"
].map(name => ({
  src: `/images/Galeria/${name}`,
  alt: "Postales de Delicias"
}));

const allGalleryImages = [...initialGalleryImages, ...additionalImages];

export const GalleryShowcase = () => {
  const { locale } = useLocale();
  // Shuffle images on mount using useMemo to ensure consistency during render cycle but random per reload
  // Note: In a purely client-side app, this runs once per session/reload. 
  const galleryImages = useMemo(() => {
    return [...allGalleryImages].sort(() => Math.random() - 0.5);
  }, []);

  const [index, setIndex] = useState(0);
  const total = galleryImages.length;

  const prevIndex = useMemo(() => (index - 1 + total) % total, [index, total]);
  const nextIndex = useMemo(() => (index + 1) % total, [index, total]);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % total), 5000);
    return () => clearInterval(timer);
  }, [total]);

  const goNext = () => setIndex((prev) => (prev + 1) % total);
  const goPrev = () => setIndex((prev) => (prev - 1 + total) % total);

  const title = locale === "es" ? "Postales de la capital deliciosa" : "Postcards from Delicias";
  const subtitle =
    locale === "es" ? "Archivo fotográfico ·" : "Photo archive ·";
  const description =
    locale === "es"
      ? "Un carrusel inmersivo con escenas urbanas, gastronomía, naturaleza y talento local capturados durante el año."
      : "An immersive carousel featuring urban scenes, food, nature and local talent captured throughout the year.";

  return (
    <section className="bg-white py-20" id="galeria-delicias">
      <div className="mx-auto max-w-6xl space-y-8 px-4">
        <Reveal className="text-center space-y-2">
          <p className="font-tourism text-2xl text-secondary/80">{title}</p>
          <p className="text-[11px] uppercase tracking-[0.5em] text-foreground/60">{subtitle}</p>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">{description}</p>
        </Reveal>

        <Reveal
          variant="fade-up"
          delay={120}
          className="relative overflow-hidden rounded-[36px] border border-white/40 bg-gradient-to-r from-[#0c2c68]/85 via-[#11254a]/70 to-[#f6b043]/30 shadow-[0_35px_85px_rgba(4,18,42,0.25)] px-4 py-10"
        >
          <div className="pointer-events-none absolute inset-0">
            <span className="gallery-orb left-[10%] top-[-15%] h-48 w-48 bg-cyan-400/40" style={{ "--gallery-duration": "16s" } as CSSProperties} />
            <span className="gallery-orb right-[8%] top-[10%] h-56 w-56 bg-amber-300/45" style={{ "--gallery-duration": "22s" } as CSSProperties} />
            <span className="gallery-orb left-[30%] bottom-[-10%] h-64 w-64 bg-pink-400/35" style={{ "--gallery-duration": "18s" } as CSSProperties} />
            <span className="gallery-orb right-[20%] bottom-[5%] h-40 w-40 bg-primary/30" style={{ "--gallery-duration": "25s" } as CSSProperties} />
          </div>
          <div className="relative mx-auto flex h-[420px] max-w-5xl items-center justify-center">
            {galleryImages.map((photo, photoIndex) => {
              const isCurrent = photoIndex === index;
              const isPrev = photoIndex === prevIndex;
              const isNext = photoIndex === nextIndex;
              const hidden = !isCurrent && !isPrev && !isNext;

              return (
                <div
                  key={photo.src}
                  className={`absolute h-full w-[90%] rounded-[30px] border border-white/50 bg-black transition-all duration-700 ease-out md:w-[70%] ${
                    hidden ? "pointer-events-none opacity-0" : "opacity-100"
                  } ${isPrev ? "-translate-x-[55%] scale-[0.85] blur-[1px]" : ""} ${
                    isNext ? "translate-x-[55%] scale-[0.85] blur-[1px]" : ""
                  } ${isCurrent ? "z-20 shadow-[0_30px_60px_rgba(0,0,0,0.2)]" : "z-10 shadow-lg"}`}
                  aria-hidden={!isCurrent}
                >
                  <FadeImage
                    src={photo.src}
                    alt={photo.alt}
                    className="object-cover bg-black"
                    containerClassName="rounded-[30px] bg-black"
                    loading={photoIndex === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-[30px] bg-gradient-to-t from-black/70 via-black/15 to-transparent p-6 text-white">
                    <p className="text-[11px] uppercase tracking-[0.5em] text-white/70">
                      {locale === "es" ? "Delicias · Chihuahua" : "Delicias · Chihuahua"}
                    </p>
                    <p className="text-xl font-semibold">{photo.alt}</p>
                  </div>
                </div>
              );
            })}

            <div className="absolute -bottom-3 flex w-full items-center justify-between px-6">
              <MagneticButton>
                <button
                  onClick={goPrev}
                  aria-label={locale === "es" ? "Imagen anterior" : "Previous photo"}
                  className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/40"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
              </MagneticButton>
              <span className="rounded-full bg-white/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary shadow">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <MagneticButton>
                <button
                  onClick={goNext}
                  aria-label={locale === "es" ? "Imagen siguiente" : "Next photo"}
                  className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/40"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </MagneticButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={220} className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {galleryImages.map((photo, photoIndex) => (
            <button
              key={photo.src}
              onClick={() => setIndex(photoIndex)}
              className={`relative h-24 min-w-[150px] overflow-hidden rounded-2xl border transition ${
                index === photoIndex ? "border-secondary shadow-lg" : "border-black/10"
              }`}
              aria-label={`${locale === "es" ? "Ver" : "View"} ${photo.alt}`}
            >
              <img src={photo.src} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
              <span className="absolute inset-0 bg-black/20" />
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
