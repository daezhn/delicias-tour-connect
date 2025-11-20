import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur";
  threshold?: number;
  once?: boolean;
}

export const StaggerContainer = ({
  children,
  className,
  staggerDelay = 100,
  animation = "fade-up",
  threshold = 0.1,
  once = true,
}: StaggerContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      const children = container.querySelectorAll("[data-stagger-item]");
      children.forEach((child) => {
        (child as HTMLElement).classList.add("stagger-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("stagger-visible");
            }, index * staggerDelay);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("stagger-visible");
          }
        });
      },
      { threshold }
    );

    const children = container.querySelectorAll("[data-stagger-item]");
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [staggerDelay, threshold, once]);

  return (
    <div ref={containerRef} className={cn("stagger-container", `stagger-${animation}`, className)}>
      {children}
    </div>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export const StaggerItem = ({ children, className }: StaggerItemProps) => {
  return (
    <div data-stagger-item className={cn("stagger-item", className)}>
      {children}
    </div>
  );
};


