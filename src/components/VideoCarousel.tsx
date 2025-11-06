import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface VideoCarouselProps {
  sources: string[];
  autoAdvanceMs?: number;
  aspectRatio?: string;
}

export const VideoCarousel = ({
  sources,
  autoAdvanceMs = 12000,
  aspectRatio = "aspect-[9/16]",
}: VideoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const playVideo = (index: number) => {
    const el = videoRefs.current[index];
    if (!el) return;
    const playPromise = el.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise.catch(() => {
        /* Some browsers block autoplay; audio is muted so we can ignore */
      });
    }
  };

  const pauseVideo = (index: number) => {
    const el = videoRefs.current[index];
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  };

  const goTo = (index: number) => {
    pauseVideo(currentIndex);
    const nextIndex = (index + sources.length) % sources.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => goTo(currentIndex - 1);
  const handleNext = () => goTo(currentIndex + 1);

  useEffect(() => {
    if (!sources.length) return;
    playVideo(currentIndex);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(handleNext, autoAdvanceMs);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, sources.length, autoAdvanceMs]);

  useEffect(() => {
    // restart when the list of sources changes
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    };
  }, [sources]);

  if (!sources.length) {
    return (
      <div className="flex h-full items-center justify-center bg-muted text-muted-foreground">
        No hay videos disponibles
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div className={`relative overflow-hidden rounded-3xl shadow-2xl bg-black ${aspectRatio}`}>
        {sources.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <video
              ref={(el) => {
                if (el) videoRefs.current[index] = el;
              }}
              className="h-full w-full object-cover"
              muted
              playsInline
              loop={false}
              onEnded={handleNext}
              preload="auto"
            >
              <source src={src} type="video/mp4" />
              Tu navegador no soporta video.
            </video>
          </div>
        ))}

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60"
          aria-label="Video anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60"
          aria-label="Video siguiente"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
          {sources.map((src, index) => (
            <button
              key={src}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Ir al video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
