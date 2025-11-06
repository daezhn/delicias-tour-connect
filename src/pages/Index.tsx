import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturedPlaces } from "@/components/FeaturedPlaces";
import { Activities } from "@/components/Activities";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="inicio">
        <Hero />
        <FeaturedPlaces />
        <Activities />
        <Events />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
