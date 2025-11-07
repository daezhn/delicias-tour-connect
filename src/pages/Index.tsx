import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
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
    <div className="min-h-screen bg-section-white">
      <Navigation />
      <main id="inicio" className="space-y-0">
        <section className="bg-section-dark">
          <Hero />
        </section>
        <section className="bg-section-blue">
          <Events />
        </section>
        <section className="bg-section-orange">
          <ToursExplorer />
        </section>
        <section className="bg-section-white">
          <AvailabilityCalendar />
        </section>
        <section className="bg-section-white-black">
          <FeaturedCarousel />
        </section>
        <section className="bg-section-blue">
          <Hotels />
        </section>
        <section className="bg-section-orange">
          <Restaurants />
        </section>
        <section className="bg-section-white">
          <FeaturedPlaces />
        </section>
        <section className="bg-section-navy">
          <Activities />
        </section>
        <section className="bg-section-orange">
          <HowToGet />
        </section>
        <section className="bg-section-white">
          <FaqSection />
        </section>
        <section className="bg-section-white-black">
          <ContactCard />
        </section>
        <section className="bg-section-navy">
          <Recommendations />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
