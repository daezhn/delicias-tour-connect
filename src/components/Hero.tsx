import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero-delicias-1.jpg",
    title: "Aquí todo es",
    highlight: "Delicioso",
    description: "Descubre la belleza y el encanto de Delicias, Chihuahua"
  },
  {
    image: "/images/hero-delicias-2.jpg",
    title: "Tradición y Cultura",
    highlight: "Viva",
    description: "Explora nuestros eventos, festivales y patrimonio cultural"
  },
  {
    image: "/images/hero-delicias-3.jpg",
    title: "Experiencias",
    highlight: "Inolvidables",
    description: "Vive momentos únicos en cada rincón de nuestra ciudad"
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover animate-zoom-in"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-5xl animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
                {slide.title}{" "}
                <span className="text-primary bg-clip-text" style={{
                  background: "var(--gradient-sunset)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  {slide.highlight}
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/90">
                {slide.description}
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
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-primary w-8" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
