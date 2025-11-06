import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-10" />
      <img
        src="/images/hero-delicias-1.jpg"
        alt="Delicias, Chihuahua"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-5xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            Aquí todo es{" "}
            <span className="text-primary bg-clip-text" style={{
              background: "var(--gradient-sunset)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Delicioso
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/90">
            Descubre la belleza y el encanto de Delicias, Chihuahua
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              Explorar Destinos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              Ver Eventos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
