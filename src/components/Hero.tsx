import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";

export const Hero = () => {
  const { locale } = useLocale();
  const heroCopy = getTranslations(locale).hero;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-10" />
      <img
        src="/images/hero-delicias.jpg"
        alt="Delicias, Chihuahua"
        className="w-full h-full object-cover scale-105 animate-[hero-zoom_20s_ease-in-out_infinite_alternate]"
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-5xl space-y-6">
          <Reveal variant="fade-down" className="uppercase tracking-[0.6em] text-sm text-white/70">
            {heroCopy.label}
          </Reveal>
          <Reveal as="h1" variant="fade-up" className="text-5xl md:text-7xl lg:text-8xl font-bold">
            {heroCopy.titleLead}{" "}
            <span className="text-primary bg-clip-text" style={{
              background: "var(--gradient-sunset)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              {heroCopy.titleHighlight}
            </span>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/85">{heroCopy.description}</p>
          </Reveal>
          <Reveal variant="fade-up" delay={220} className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/30 hover:-translate-y-1 transition"
            >
              <a href="#atractivos">{heroCopy.explore}</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white hover:-translate-y-1 transition"
            >
              <a href="#eventos">{heroCopy.events}</a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
