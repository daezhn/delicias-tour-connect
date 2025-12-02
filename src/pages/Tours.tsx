import { Navigation } from "@/components/Navigation";
import { ToursExplorer } from "@/components/ToursExplorer";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { ArrowLeft } from "lucide-react";
import { useSmartBackNavigation } from "@/hooks/use-smart-back-navigation";
import { SEO } from "@/components/SEO";

const Tours = () => {
  const { locale } = useLocale();
  const handleBack = useSmartBackNavigation();

  return (
    <div className="min-h-screen bg-[#0c2c68] text-white">
      <SEO 
        title={locale === "es" ? "Tours y Recorridos" : "Tours & Trips"}
        description={
          locale === "es"
            ? "Descubre los paquetes de cata y recorridos en Vinícola CAVALL, Delicias Chihuahua."
            : "Discover tasting packages and tours at CAVALL Winery, Delicias Chihuahua."
        }
      />
      <Navigation />
      <main className="page-offset">
        <section className="bg-gradient-to-br from-[#0c2c68] via-[#163d8b] to-[#f6b043] px-4 py-20 sm:px-8 lg:px-20">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            {locale === "es" ? "Regresar" : "Go back"}
          </button>
          <div className="mt-12">
            <ToursExplorer />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tours;
