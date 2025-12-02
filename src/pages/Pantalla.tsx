import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale } from "@/hooks/use-locale";
import { getTickerEvents, useClock } from "@/utils/pantalla";
import { format } from "date-fns";
import { es, enUS } from "date-fns/locale";
import { SEO } from "@/components/SEO";

type MediaItem =
  | { type: "video"; src: string }
  | { type: "image"; src: string; alt: string; duration?: number };

const mediaItems: MediaItem[] = [
  { type: "video", src: "/pantalla/test1.mp4" },
  { type: "video", src: "/pantalla/test2.mp4" },
  {
    type: "image",
    src: "/images/flyer1.webp",
    alt: "Flyer promocional 1",
    duration: 45_000
  },
  {
    type: "image",
    src: "/images/flyer2.webp",
    alt: "Flyer promocional 2",
    duration: 45_000
  }
];

const Pantalla = () => {
  const { locale } = useLocale();
  const timeline = getTickerEvents(locale);
  const now = useClock(15_000);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMedia = mediaItems[currentIndex];

  useEffect(() => {
    if (currentMedia.type !== "video") {
      const previousVideo = videoRef.current;
      if (previousVideo) {
        previousVideo.pause();
        previousVideo.currentTime = 0;
      }
      return;
    }

    const videoEl = videoRef.current;
    if (!videoEl) return;
    videoEl.currentTime = 0;

    const attemptPlay = () => {
      const playPromise = videoEl.play();
      playPromise?.catch(() => {
        /* autoplay blocked; ignored because muted */
      });
    };

    if (videoEl.readyState >= 2) {
      attemptPlay();
    } else {
      const onLoadedData = () => {
        videoEl.removeEventListener("loadeddata", onLoadedData);
        attemptPlay();
      };
      videoEl.addEventListener("loadeddata", onLoadedData);
      return () => videoEl.removeEventListener("loadeddata", onLoadedData);
    }
  }, [currentMedia]);

  const advanceMedia = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  }, []);

  useEffect(() => {
    if (currentMedia.type !== "image") return;

    const timeout = setTimeout(
      advanceMedia,
      currentMedia.duration ?? 10_000
    );
    return () => clearTimeout(timeout);
  }, [advanceMedia, currentMedia]);

  const handleEnded = useCallback(() => {
    advanceMedia();
  }, [advanceMedia]);

  const formatterLocale = locale === "es" ? es : enUS;
  const formattedTime = format(now, "HH:mm", { locale: formatterLocale });
  const formattedDate = format(now, "PPPP", { locale: formatterLocale });

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <SEO
        title={locale === "es" ? "Pantalla Informativa" : "Info Display"}
        description="Display informativo de Delicias Tour Connect."
      />
      {currentMedia.type === "video" ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          preload="metadata"
          src={currentMedia.src}
          onEnded={handleEnded}
        >
          Tu navegador no soporta video.
        </video>
      ) : (
        <img
          src={currentMedia.src}
          alt={currentMedia.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-x-0 top-0 flex justify-between bg-gradient-to-b from-black/70 to-transparent px-8 py-6 text-white">
        <div className="space-y-1">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            IDEA Delicias
          </p>
          <p className="text-3xl font-bold">{formattedTime}</p>
          <p className="text-sm text-white/80">{formattedDate}</p>
        </div>
        <div className="flex flex-col items-end space-y-1">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            {locale === "es" ? "Temperatura" : "Temperature"}
          </p>
          <p className="text-3xl font-bold">{timeline.temp}</p>
          <p className="text-sm text-white/80">{timeline.condition}</p>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 bg-black/70 py-4">
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-8 text-sm uppercase tracking-[0.3em] text-white/80">
            {timeline.events.map((event) => (
              <div key={event.title} className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-primary">●</span>
                <span>{event.title}</span>
                <span className="text-white/60">{event.time}</span>
                <span>{event.location}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pantalla;
