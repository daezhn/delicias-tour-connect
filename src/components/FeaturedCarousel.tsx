import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";

export const FeaturedCarousel = () => {
  const { locale } = useLocale();
  const copy = getTranslations(locale).sections.featuredCarousel;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasVideo, setHasVideo] = useState(true);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const handleIntersection: IntersectionObserverCallback = ([entry]) => {
      const target = videoRef.current;
      if (!target) return;

      if (entry.isIntersecting) {
        const playPromise = target.play();
        if (playPromise && typeof playPromise.then === "function") {
          playPromise.catch(() => {
            /* ignore autoplay restrictions */
          });
        }
      } else {
        target.pause();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(videoEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
          {hasVideo ? (
            <video
              ref={videoRef}
              className="w-full h-full max-h-[640px] object-contain md:object-cover"
              controls
              loop
              muted
              playsInline
              preload="metadata"
              autoPlay
              poster="/images/hero-delicias-2.jpg"
              onError={() => setHasVideo(false)}
            >
              <source src="/Video/turismodel.mp4" type="video/mp4" />
              Tu navegador no soporta reproducción de video.
            </video>
          ) : (
            <img
              src="/images/hero-delicias-2.jpg"
              alt="Descubre Delicias"
              className="w-full h-full max-h-[640px] object-cover"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
        <div className="mt-8 max-w-3xl mx-auto text-center md:text-left text-muted-foreground">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-foreground">{copy.title}</h2>
          {copy.description && (
            <p className="text-lg md:text-xl">
              {copy.description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
