import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WelcomeDelicias } from "@/components/WelcomeDelicias";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import { FaqSection } from "@/components/FaqSection";
import { ContactCard } from "@/components/ContactCard";
import { AvailabilityCalendar } from "@/components/AvailabilityCalendar";
import { ExperiencesCollage } from "@/components/ExperiencesCollage";
import { PlanYourTrip } from "@/components/PlanYourTrip";
import { FeaturedCitizens } from "@/components/FeaturedCitizens";
import { GalleryShowcase } from "@/components/GalleryShowcase";

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

        <ExperiencesCollage />

        <PlanYourTrip />
        <FeaturedCitizens />

        <GalleryShowcase />

        <section
          id="preguntas"
          className="bg-gradient-to-br from-[#f7b267] via-[#f79d84] to-[#8fd3fe] py-20"
        >
          <div className="mx-auto max-w-5xl px-4">
            <FaqSection />
          </div>
        </section>

        <section id="contacto" className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4">
            <ContactCard />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
