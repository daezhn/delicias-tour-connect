import { useCallback, useEffect, useRef, useState } from "react";

const videoSources = ["/pantalla/test1.mp4", "/pantalla/test2.mp4"];

const Pantalla = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
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
  }, [currentIndex]);

  const handleEnded = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % videoSources.length);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        preload="metadata"
        src={videoSources[currentIndex]}
        onEnded={handleEnded}
      >
        Tu navegador no soporta video.
      </video>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/60">
        IDEA Delicias · Pantalla Turística
      </div>
    </div>
  );
};

export default Pantalla;
