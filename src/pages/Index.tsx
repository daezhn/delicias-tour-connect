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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="inicio">
        <Hero />
        <Events />
        <ToursExplorer />
        <FeaturedCarousel />
        <Hotels />
        <Restaurants />
        <FeaturedPlaces />
        <Activities />
        <HowToGet />
        <Recommendations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
