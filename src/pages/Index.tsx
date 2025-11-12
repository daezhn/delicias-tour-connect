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
import { Reveal } from "@/components/Reveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f6ecdf] text-foreground">
      <Navigation />
      <main id="inicio" className="space-y-0 pt-[90px]">
        <Hero />

        <WelcomeDelicias />


        <Reveal as="section" id="eventos" className="py-0">
          <Events />
        </Reveal>

        <Reveal as="section" className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4">
            <AvailabilityCalendar compact />
          </div>
        </Reveal>

        <ExperiencesCollage />

        <PlanYourTrip />
        <FeaturedCitizens />

        <GalleryShowcase />

        <Reveal
          as="section"
          id="preguntas"
          className="bg-gradient-to-br from-[#f7b267] via-[#f79d84] to-[#8fd3fe] py-20"
        >
          <div className="mx-auto max-w-5xl px-4">
            <FaqSection />
          </div>
        </Reveal>

        <Reveal as="section" id="contacto" className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4">
            <ContactCard />
          </div>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
