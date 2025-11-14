import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const modalCopy = {
  es: {
    badge: "Ruta sugerida",
    title: "Planifica tu visita a Delicias",
    description: "Descubre eventos, rutas gastronómicas y experiencias al aire libre para armar tu itinerario en minutos.",
    highlight: "Tip: comienza revisando la agenda y después arma tu plan con transporte, hospedaje y clima.",
    primaryCta: "Ver agenda de eventos",
    secondaryCta: "Armar mi plan",
    dismiss: "Seguir explorando"
  },
  en: {
    badge: "Suggested route",
    title: "Plan your visit to Delicias",
    description: "Browse upcoming events, food routes and outdoor experiences to build a trip in minutes.",
    highlight: "Tip: start with the event calendar and then craft your plan with transport, stays and climate guides.",
    primaryCta: "See upcoming events",
    secondaryCta: "Plan my trip",
    dismiss: "Keep exploring"
  }
} as const;

export const WelcomeModal = () => {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const copy = modalCopy[locale] ?? modalCopy.es;
  const storageKey = "welcome-modal-dismissed";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasSeenModal = window.sessionStorage.getItem(storageKey);
    setOpen(!hasSeenModal);
  }, [storageKey]);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen && typeof window !== "undefined") {
      window.sessionStorage.setItem(storageKey, "1");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-xl rounded-[32px] border-none bg-white/95 p-8 text-left text-foreground shadow-[0_30px_120px_rgba(9,16,29,0.35)] backdrop-blur">
        <DialogHeader className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">{copy.badge}</p>
          <DialogTitle className="text-3xl font-semibold leading-tight">{copy.title}</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">{copy.description}</DialogDescription>
        </DialogHeader>

        <div className="rounded-2xl bg-gradient-to-r from-[#f6b043]/20 via-[#f79d84]/20 to-[#8fd3fe]/20 p-4 text-sm text-secondary">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/70 text-secondary shadow">
              <Sparkles className="h-4 w-4" />
            </span>
            <p className="text-foreground/80">{copy.highlight}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="flex-1 bg-[#f6b043] text-slate-900 transition hover:-translate-y-0.5 hover:bg-[#f6b043]/90"
              onClick={() => handleOpenChange(false)}
            >
              <Link to="/#eventos">{copy.primaryCta}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex-1 border-white/60 bg-white/80 text-secondary transition hover:-translate-y-0.5 hover:bg-white"
              onClick={() => handleOpenChange(false)}
            >
              <Link to="/#plan-trip">{copy.secondaryCta}</Link>
            </Button>
          </div>
          <Button variant="ghost" className="text-muted-foreground" onClick={() => handleOpenChange(false)}>
            {copy.dismiss}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
