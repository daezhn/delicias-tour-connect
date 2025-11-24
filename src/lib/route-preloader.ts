import type { ComponentType } from "react";

type RouteLoader = () => Promise<{ default: ComponentType<unknown> }>;

export const routeLoaders = {
  "/": () => import("@/pages/Index"),
  "/Atractivos": () => import("@/pages/Atractivos"),
  "/Pantalla": () => import("@/pages/Pantalla"),
  "/pantallatouch": () => import("@/pages/PantallaTouch"),
  "/tours": () => import("@/pages/Tours"),
  "/transporte": () => import("@/pages/Transporte"),
  "/hospedaje": () => import("@/pages/Hospedaje"),
  "/clima-tips": () => import("@/pages/ClimaTips"),
  "/personas-destacadas": () => import("@/pages/PersonasDestacadas"),
  "/experiencias/que-hacer": () => import("@/pages/ExperienciasQueHacer"),
  "/experiencias/vida-nocturna": () => import("@/pages/ExperienciasVidaNocturna"),
  "/experiencias/que-comer": () => import("@/pages/ExperienciasQueComer"),
  "/experiencias/arte-cultura": () => import("@/pages/ExperienciasArteCultura"),
  "/experiencias/familia": () => import("@/pages/ExperienciasFamilia"),
  "/experiencias/deportes": () => import("@/pages/ExperienciasDeportes"),
  "/privacidad": () => import("@/pages/Privacidad"),
  "/privacy": () => import("@/pages/Privacidad"),
  "/404": () => import("@/pages/NotFound")
} satisfies Record<string, RouteLoader>;

const normalizePath = (path: string) => {
  if (!path) return "/";
  const trimmed = path.trim();
  if (trimmed === "/") return "/";
  const withoutTrailing = trimmed.replace(/\/+$/, "");
  return withoutTrailing.length ? withoutTrailing : "/";
};

export const preloadRoute = (path: string) => {
  const normalized = normalizePath(path);
  const loader = routeLoaders[normalized];
  if (loader) {
    void loader();
  }
};
