import { useRef, useEffect, useState } from "react";
import { useLocale } from "@/hooks/use-locale";
import { Reveal } from "@/components/Reveal";
import { Volume2, VolumeX } from "lucide-react";

const PARAGRAPHS = {
  es: [
    "Bienvenido a Delicias, una ciudad que late al ritmo del desierto y que abraza a cada visitante con calidez chihuahuense.",
    "Aquí, la tradición algodonera convive con cafeterías creativas, murales vibrantes y una escena gastronómica que presume sabores de río, huerta y sierra.",
    "Desde las sombras doradas de la torre reloj hasta los atardeceres que inundan los viñedos, siempre hay un nuevo plan: festivales, rutas ciclistas, escapadas a los ríos Conchos y San Pedro o recorridos arquitectónicos.",
    "Los delicienses creemos en la hospitalidad genuina: llegar es fácil, quedarse es inevitable."
  ],
  en: [
    "Welcome to Delicias, a desert city with a warm heartbeat and the most generous hosts in northern Mexico.",
    "Cotton heritage blends with creative cafés, vibrant murals and a food scene that proudly mixes river, orchard and mountain flavors.",
    "From the golden glow of the clock tower to sunsets pouring over vineyards, there is always something happening: festivals, bike routes, escapes to the Conchos and San Pedro rivers or architectural walks.",
    "Here, hospitality is a way of living — arriving is easy, staying becomes inevitable."
  ]
};

const STRINGS = {
  subtitle: {
    es: "El corazón de Chihuahua",
    en: "The Heart of Chihuahua"
  },
  heading: {
    es: "Bienvenido a Delicias",
    en: "Welcome to Delicias"
  },
  closing: {
    es: "Te esperamos para que descubras la ciudad más dulce del norte.",
    en: "We invite you to discover the sweetest city in the north."
  }
};

const GALLERY_IMAGES = [
  { src: "/images/motocross.webp", alt: "Motocross en Delicias" },
  { src: "/images/Galería/12.webp", alt: "Atardecer dorado sobre el desierto de Delicias" }
];

export const WelcomeDelicias = () => {
  const { locale } = useLocale();
  const paragraphs = PARAGRAPHS[locale] ?? PARAGRAPHS.es;
  const columnHeights = ["h-[300px] sm:h-[420px]", "h-[240px] sm:h-[360px]"];
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {
              // Autoplay might be prevented by browser policy
              console.log("Autoplay prevented");
            });
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="bg-[#fffdf8] pt-10 pb-20 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr]">
          <Reveal variant="fade-up" className="space-y-6 text-foreground">
            <p className="font-tourism text-3xl text-secondary/90">{STRINGS.subtitle[locale]}</p>
            <div>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{STRINGS.heading[locale]}</h2>
              <div className="mt-4 h-[2px] w-24 bg-primary/50" />
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-foreground/90">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="text-sm italic text-foreground/70">{STRINGS.closing[locale]}</p>
          </Reveal>

          <Reveal variant="fade-up" delay={120} className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
             {/* Video Reel */}
             <div className="group relative overflow-hidden rounded-[28px] border border-black/5 shadow-[0_25px_50px_rgba(4,18,42,0.12)] transition-all duration-500 hover:shadow-[0_35px_70px_rgba(4,18,42,0.2)] hover:-translate-y-1 h-[320px] sm:h-[440px] mt-8 sm:mt-0">
              <video
                ref={videoRef}
                src="/images/entretumbas.mp4"
                className="h-full w-full object-cover"
                loop
                muted={isMuted}
                playsInline
              />
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/60"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>

            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={image.src}
                className={`group overflow-hidden rounded-[28px] border border-black/5 shadow-[0_25px_50px_rgba(4,18,42,0.12)] transition-all duration-500 hover:shadow-[0_35px_70px_rgba(4,18,42,0.2)] hover:-translate-y-1 ${columnHeights[index]} ${
                  index === 1 ? "mt-12 sm:mt-20" : "mt-6 sm:mt-10"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
};
