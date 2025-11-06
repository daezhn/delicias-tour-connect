import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MonthlyAgenda } from "@/components/MonthlyAgenda";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { Hotels } from "@/components/Hotels";
import { Restaurants } from "@/components/Restaurants";
import { FeaturedPlaces } from "@/components/FeaturedPlaces";
import { Activities } from "@/components/Activities";
import { HowToGet } from "@/components/HowToGet";
import { Events } from "@/components/Events";
import { Recommendations } from "@/components/Recommendations";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="inicio">
        <Hero />
        <MonthlyAgenda />
        <FeaturedCarousel />
        <Hotels />
        <Restaurants />
        <FeaturedPlaces />
        <Activities />
        <HowToGet />
        <Events />
        <Recommendations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
