import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-10" />
      <img
        src="/images/hero-delicias.jpg"
        alt="Delicias, Chihuahua"
        className="w-full h-full object-cover scale-105 animate-[hero-zoom_20s_ease-in-out_infinite_alternate]"
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-5xl space-y-6">
          <Reveal variant="fade-down" className="uppercase tracking-[0.6em] text-sm text-white/70">
            Turismo en Delicias
          </Reveal>
          <Reveal as="h1" variant="fade-up" className="text-5xl md:text-7xl lg:text-8xl font-bold">
            Aquí todo es{" "}
            <span className="text-primary bg-clip-text" style={{
              background: "var(--gradient-sunset)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Delicioso
            </span>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/85">
              Descubre la belleza y el encanto de Delicias, Chihuahua
            </p>
          </Reveal>
          <Reveal variant="fade-up" delay={220} className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/30 hover:-translate-y-1 transition"
            >
              <a href="#atractivos">Explorar Destinos</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white hover:-translate-y-1 transition"
            >
              <a href="#eventos">Ver Eventos</a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
