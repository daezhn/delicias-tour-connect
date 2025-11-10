import { useEffect, useState } from "react";
import { FadeImage } from "@/components/FadeImage";

const galleryImages = [
  { src: "/images/Galería/1.jpg", alt: "Plaza central en Delicias" },
  { src: "/images/Galería/2.jpg", alt: "Gastronomía local colorida" },
  { src: "/images/Galería/3.jpg", alt: "Detalles arquitectónicos" },
  { src: "/images/Galería/4.jpg", alt: "Ambiente nocturno" },
  { src: "/images/Galería/5.jpg", alt: "Naturaleza en Delicias" },
  { src: "/images/Galería/6.jpg", alt: "Arte urbano contemporáneo" }
];

export const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = galleryImages.length;

  useEffect(() => {
    const timer = setInterval(() => setCurrentIndex((prev) => (prev + 1) % total), 4500);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (index: number) => setCurrentIndex(index);

  return (
    <div className="space-y-4">
      <div className="rounded-[32px] border border-black/5 bg-black text-white shadow-[0_25px_55px_rgba(4,18,42,0.4)]">
        <div className="relative h-[360px] w-full overflow-hidden rounded-[32px]">
          {galleryImages.map((image, index) => (
            <FadeImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              containerClassName={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="text-[11px] uppercase tracking-[0.5em] text-white/70">Delicias Foto Tour</p>
            <p className="text-2xl font-semibold">{galleryImages[currentIndex].alt}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            onClick={() => goTo(index)}
            className={`h-2 flex-1 rounded-full ${index === currentIndex ? "bg-primary" : "bg-black/10"}`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
