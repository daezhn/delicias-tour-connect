import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Atractivos from "./pages/Atractivos";
import Pantalla from "./pages/Pantalla";
import Tours from "./pages/Tours";
import ExperienciasQueHacer from "./pages/ExperienciasQueHacer";
import ExperienciasVidaNocturna from "./pages/ExperienciasVidaNocturna";
import { LocaleProvider } from "@/hooks/use-locale";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LocaleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Atractivos" element={<Atractivos />} />
            <Route path="/Pantalla" element={<Pantalla />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/experiencias/que-hacer" element={<ExperienciasQueHacer />} />
            <Route path="/experiencias/vida-nocturna" element={<ExperienciasVidaNocturna />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LocaleProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
