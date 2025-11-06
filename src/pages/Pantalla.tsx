import { useEffect, useRef } from "react";

const Pantalla = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    const playPromise = videoEl.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise.catch(() => {
        /* ignore autoplay block, already muted */
      });
    }
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/pantalla/test1.mp4" type="video/mp4" />
        Tu navegador no soporta video.
      </video>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/60">
        IDEA Delicias · Pantalla Turística
      </div>
    </div>
  );
};

export default Pantalla;
