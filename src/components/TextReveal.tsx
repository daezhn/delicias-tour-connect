import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
  threshold?: number;
}

export const TextReveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  threshold = 0.2,
}: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      element.classList.add("text-reveal-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add("text-reveal-visible");
          }, delay);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          element.classList.remove("text-reveal-visible");
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, once, threshold]);

  const directionClass = {
    up: "text-reveal-up",
    down: "text-reveal-down",
    left: "text-reveal-left",
    right: "text-reveal-right",
  }[direction];

  return (
    <div ref={ref} className={cn("text-reveal", directionClass, className)}>
      {children}
    </div>
  );
};

