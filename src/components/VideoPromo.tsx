import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { Reveal } from "@/components/Reveal";

export const VideoPromo = () => {
  const { locale } = useLocale();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Default to muted for autoplay policy

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch((error) => console.log("Play failed:", error));
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the parent click (play/pause)
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            // Attempt to play when in view
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsPlaying(true);
                })
                .catch((error) => {
                  console.log("Autoplay prevented:", error);
                  setIsPlaying(false);
                });
            }
          } else {
            // Pause when out of view
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.4 } // Trigger when 40% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-16 bg-[#fcf8f4] relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="text-center mb-10">
          <h2 className="font-tourism text-3xl text-secondary/90 mb-2">
            {locale === "es" ? "Delicias en Movimiento" : "Delicias in Motion"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {locale === "es" 
              ? "Un vistazo a la vida, la cultura y la alegría de nuestra ciudad." 
              : "A glimpse into the life, culture, and joy of our city."}
          </p>
        </Reveal>

        <Reveal variant="scale-up" className="relative rounded-[32px] overflow-hidden shadow-2xl border border-white/50 bg-black group aspect-video">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="/images/hero-delicias-1.jpg" // Fallback to a hero image
            onClick={togglePlay}
            loop
            playsInline
            muted={isMuted}
          >
            <source src="/images/Videos/turismo720.mp4" type="video/mp4" />
            {locale === "es" ? "Tu navegador no soporta el video." : "Your browser does not support the video tag."}
          </video>

          {/* Overlay Play Button - Only show if paused AND user interaction might be needed or desired */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors cursor-pointer" onClick={togglePlay}>
              <button 
                className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white transition-transform transform hover:scale-110 group-hover:bg-white/30"
                aria-label="Play video"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </button>
            </div>
          )}

          {/* Custom Controls */}
          <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
            <div className="flex items-center justify-between text-white">
              <button onClick={(e) => { e.stopPropagation(); togglePlay(); }} className="hover:text-primary transition-colors">
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 fill-current" />}
              </button>
              
              <button onClick={toggleMute} className="hover:text-primary transition-colors">
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
