import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const hotelImages = [
  "/images/hotel-1.jpg",
  "/images/hotel-2.jpg",
  "/images/hotel-3.jpg",
  "/images/hotel-4.jpg",
  "/images/hotel-5.jpg",
  "/images/hotel-6.jpg",
];

export const Hotels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hotelImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % hotelImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + hotelImages.length) % hotelImages.length);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Dónde Hospedarse
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hoteles confortables en Delicias y la región
          </p>
        </div>

        <div className="max-w-md md:max-w-5xl mx-auto relative">
          <div className="relative aspect-[3/4] md:aspect-[16/9] md:min-h-[420px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            {hotelImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Hotel en Delicias ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            <button
              onClick={prevSlide}
              className="md:hidden absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
              aria-label="Previous hotel"
            >
              <ChevronUp className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
              aria-label="Next hotel"
            >
              <ChevronDown className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/70 hover:bg-white rounded-full p-4 shadow-lg transition-all"
              aria-label="Previous hotel desktop"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={nextSlide}
              className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/70 hover:bg-white rounded-full p-4 shadow-lg transition-all"
              aria-label="Next hotel desktop"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>

            <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
              {hotelImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary h-8" 
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to hotel ${index + 1}`}
                />
              ))}
            </div>

            <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-30 items-center gap-3">
              {hotelImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-12"
                      : "bg-white/60 hover:bg-white/80 w-6"
                  }`}
                  aria-label={`Go to hotel ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/hoteles+en+delicias+chihuahua/@28.2122512,-105.4975832,14z/data=!3m1!4b1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Ver hoteles en el mapa
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
