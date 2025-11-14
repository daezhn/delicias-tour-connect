import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
  disabled?: boolean;
}

export const ParallaxSection = ({
  children,
  className,
  speed = 0.5,
  direction = "up",
  disabled = false,
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (disabled) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calculate when element is in viewport
      const scrollProgress = Math.max(
        0,
        Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight))
      );

      const translateY = (scrollProgress - 0.5) * speed * 100;
      setOffset(direction === "up" ? translateY : -translateY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction, disabled]);

  return (
    <div
      ref={ref}
      className={cn("transition-transform duration-75 ease-out", className)}
      style={{
        transform: disabled ? undefined : `translateY(${offset}px)`,
      }}
    >
      {children}
    </div>
  );
};

