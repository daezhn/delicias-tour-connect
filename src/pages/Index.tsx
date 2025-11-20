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
import { MotionReveal } from "@/components/MotionReveal";
import { WelcomeModal } from "@/components/WelcomeModal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { AnimatedGradient } from "@/components/AnimatedGradient";
import { SEO } from "@/components/SEO";
import { useLocale } from "@/hooks/use-locale";

const Index = () => {
  const { locale } = useLocale();

  return (
    <div className="min-h-screen bg-[#f6ecdf] text-foreground relative overflow-hidden">
      <SEO 
        title={locale === "es" ? "Inicio" : "Home"}
        description={
          locale === "es" 
            ? "Descubre Delicias, Chihuahua. Encuentra qué hacer, dónde comer y hospedarte en la ciudad de los vencedores del desierto." 
            : "Discover Delicias, Chihuahua. Find things to do, places to eat and stay in the city of desert conquerors."
        }
      />
      <AnimatedGradient variant="subtle" speed="slow" />
      <WelcomeModal />
      <Navigation />
      <main id="inicio" className="space-y-0 relative">
        <Hero />

        <ParallaxSection speed={0.3}>
          <WelcomeDelicias />
        </ParallaxSection>

        <section id="eventos" className="py-0 relative">
          <ParallaxSection speed={0.2} direction="down">
            <MotionReveal variant="fade-up">
              <Events />
            </MotionReveal>
          </ParallaxSection>
        </section>

        <section className="bg-white py-16 relative">
          <ParallaxSection speed={0.15}>
            <MotionReveal variant="scale-up" delay={0.2}>
              <div className="mx-auto max-w-4xl px-4">
                <AvailabilityCalendar compact />
              </div>
            </MotionReveal>
          </ParallaxSection>
        </section>

        <ParallaxSection speed={0.25}>
          <ExperiencesCollage />
        </ParallaxSection>

        <ParallaxSection speed={0.2}>
          <PlanYourTrip />
        </ParallaxSection>
        
        <ParallaxSection speed={0.3} direction="down">
          <FeaturedCitizens />
        </ParallaxSection>

        <ParallaxSection speed={0.2}>
          <GalleryShowcase />
        </ParallaxSection>

        <section
          id="preguntas"
          className="bg-gradient-to-br from-[#f7b267] via-[#f79d84] to-[#8fd3fe] py-20"
        >
          <MotionReveal variant="fade-up">
            <div className="mx-auto max-w-5xl px-4">
              <FaqSection />
            </div>
          </MotionReveal>
        </section>

        <section id="contacto" className="bg-white py-20">
          <MotionReveal variant="fade-up" delay={0.1}>
            <div className="mx-auto max-w-4xl px-4">
              <ContactCard />
            </div>
          </MotionReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
