import { ElementType, ReactNode, useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade-in";

interface RevealProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  variant?: RevealVariant;
  id?: string;
}

export const Reveal = ({
  as: Component = "div",
  children,
  className,
  delay = 0,
  duration = 600,
  once = true,
  variant = "fade-up",
  id,
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const style = useMemo(
    () => ({
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`,
    }),
    [delay, duration],
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      element.dataset.revealState = "visible";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.revealState = "visible";
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          element.dataset.revealState = "hidden";
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Component
      ref={ref as never}
      className={cn("reveal", className)}
      style={style}
      data-reveal-variant={variant}
      data-reveal-state="hidden"
      id={id}
    >
      {children}
    </Component>
  );
};
