import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WelcomeDelicias } from "@/components/WelcomeDelicias";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { Hotels } from "@/components/Hotels";
import { Restaurants } from "@/components/Restaurants";
import { FeaturedPlaces } from "@/components/FeaturedPlaces";
import { Activities } from "@/components/Activities";
import { HowToGet } from "@/components/HowToGet";
import { Events } from "@/components/Events";
import { Recommendations } from "@/components/Recommendations";
import { Footer } from "@/components/Footer";
import { ToursExplorer } from "@/components/ToursExplorer";
import { FaqSection } from "@/components/FaqSection";
import { ContactCard } from "@/components/ContactCard";
import { AvailabilityCalendar } from "@/components/AvailabilityCalendar";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f6ecdf] text-foreground">
      <Navigation />
      <main id="inicio" className="space-y-0 pt-[90px]">
        <Hero />

        <WelcomeDelicias />


        <section id="eventos" className="py-0">
          <Events />
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4">
            <AvailabilityCalendar compact />
          </div>
        </section>

        <section id="tours" className="bg-gradient-to-br from-[#0c2c68] via-[#163d8b] to-[#f6b043] py-20 text-white">
          <div className="space-y-12 px-4 sm:px-8 lg:px-16">
            <ToursExplorer />
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl grid gap-8 px-4 lg:grid-cols-[1fr,0.9fr]">
            <HowToGet />
            <Recommendations />
          </div>
        </section>

        <section className="bg-[#fff7ef] py-20" id="stay-dine">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="space-y-2 text-center">
              <p className="font-script text-2xl text-secondary/80">Sueña & saborea</p>
              <p className="text-[11px] uppercase tracking-[0.5em] text-foreground/60">
                Hospedaje boutique · Guías gastronómicas
              </p>
            </div>
            <div className="grid gap-12 lg:grid-cols-2">
              <div id="hoteles">
                <Hotels />
              </div>
              <div id="restaurantes">
                <Restaurants />
              </div>
            </div>
          </div>
        </section>

        <section id="atractivos" className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.2fr,0.8fr]">
            <FeaturedCarousel />
            <FeaturedPlaces />
          </div>
        </section>

        <section id="actividades" className="bg-[#f5fbfd] py-20">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <Activities />
            <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
              <FaqSection />
              <ContactCard />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
