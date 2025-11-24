import { Suspense, type ComponentType, type LazyExoticComponent, type ReactNode, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { FullPageSkeleton } from "@/components/skeletons/FullPageSkeleton";
import { routeLoaders } from "@/lib/route-preloader";
import { CursorFollower } from "@/components/CursorFollower";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollManager } from "@/components/ScrollManager";
import { PageTransition } from "@/components/PageTransition";
import { SplashScreen } from "@/components/SplashScreen";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Chatbot } from "@/components/Chatbot";

type LazyComponent = LazyExoticComponent<ComponentType<unknown>>;

const Index = lazy(routeLoaders["/"]);
const Atractivos = lazy(routeLoaders["/Atractivos"]);
const Pantalla = lazy(routeLoaders["/Pantalla"]);
const PantallaTouch = lazy(routeLoaders["/pantallatouch"]);
const Tours = lazy(routeLoaders["/tours"]);
const Transporte = lazy(routeLoaders["/transporte"]);
const Hospedaje = lazy(routeLoaders["/hospedaje"]);
const ClimaTips = lazy(routeLoaders["/clima-tips"]);
const PersonasDestacadas = lazy(routeLoaders["/personas-destacadas"]);
const ExperienciasQueHacer = lazy(routeLoaders["/experiencias/que-hacer"]);
const ExperienciasVidaNocturna = lazy(routeLoaders["/experiencias/vida-nocturna"]);
const ExperienciasQueComer = lazy(routeLoaders["/experiencias/que-comer"]);
const ExperienciasArteCultura = lazy(routeLoaders["/experiencias/arte-cultura"]);
const ExperienciasFamilia = lazy(routeLoaders["/experiencias/familia"]);
const ExperienciasDeportes = lazy(routeLoaders["/experiencias/deportes"]);
const Privacidad = lazy(routeLoaders["/privacidad"]);
const NotFound = lazy(routeLoaders["/404"]);

const withSuspense = (Component: LazyComponent, fallback?: ReactNode) => (
  <PageTransition>
    <Suspense fallback={fallback ?? <FullPageSkeleton />}>
      <Component />
    </Suspense>
  </PageTransition>
);

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={withSuspense(Index, <FullPageSkeleton tone="sand" sections={4} />)} />
        <Route path="/Atractivos" element={withSuspense(Atractivos)} />
        <Route path="/Pantalla" element={withSuspense(Pantalla)} />
        <Route path="/pantallatouch" element={withSuspense(PantallaTouch, <FullPageSkeleton tone="sand" sections={2} />)} />
        <Route path="/tours" element={withSuspense(Tours)} />
        <Route path="/transporte" element={withSuspense(Transporte, <FullPageSkeleton tone="indigo" />)} />
        <Route path="/hospedaje" element={withSuspense(Hospedaje)} />
        <Route path="/clima-tips" element={withSuspense(ClimaTips)} />
        <Route path="/personas-destacadas" element={withSuspense(PersonasDestacadas)} />
        <Route path="/experiencias/que-hacer" element={withSuspense(ExperienciasQueHacer)} />
        <Route path="/experiencias/vida-nocturna" element={withSuspense(ExperienciasVidaNocturna)} />
        <Route path="/experiencias/que-comer" element={withSuspense(ExperienciasQueComer)} />
        <Route path="/experiencias/arte-cultura" element={withSuspense(ExperienciasArteCultura)} />
        <Route path="/experiencias/familia" element={withSuspense(ExperienciasFamilia)} />
        <Route path="/experiencias/deportes" element={withSuspense(ExperienciasDeportes)} />
        <Route path="/privacidad" element={withSuspense(Privacidad)} />
        <Route path="/privacy" element={withSuspense(Privacidad)} />
        <Route path="*" element={withSuspense(NotFound)} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SplashScreen />
      <SmoothScroll />
      <ScrollProgress />
      <CursorFollower />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager>
          <AnimatedRoutes />
        </ScrollManager>
      </BrowserRouter>
      <Chatbot />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
