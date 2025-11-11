import { Suspense, type ComponentType, type LazyExoticComponent, type ReactNode, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { FullPageSkeleton } from "@/components/skeletons/FullPageSkeleton";
import { routeLoaders } from "@/lib/route-preloader";

type LazyComponent = LazyExoticComponent<ComponentType<any>>;

const Index = lazy(routeLoaders["/"]);
const Atractivos = lazy(routeLoaders["/Atractivos"]);
const Pantalla = lazy(routeLoaders["/Pantalla"]);
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
const NotFound = lazy(routeLoaders["/404"]);

const withSuspense = (Component: LazyComponent, fallback?: ReactNode) => (
  <Suspense fallback={fallback ?? <FullPageSkeleton />}>
    <Component />
  </Suspense>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={withSuspense(Index, <FullPageSkeleton tone="sand" sections={4} />)} />
          <Route path="/Atractivos" element={withSuspense(Atractivos)} />
          <Route path="/Pantalla" element={withSuspense(Pantalla)} />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={withSuspense(NotFound)} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
