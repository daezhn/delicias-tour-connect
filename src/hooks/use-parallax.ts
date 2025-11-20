import { useEffect, useRef, useState } from "react";

interface UseParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
  offset?: number;
  enabled?: boolean;
}

export const useParallax = ({
  speed = 0.5,
  direction = "up",
  offset = 0,
  enabled = true,
}: UseParallaxOptions = {}) => {
  const ref = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState("");

  useEffect(() => {
    if (!enabled) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate parallax offset
      const yPos = -(scrolled - elementTop + windowHeight / 2) * speed;
      const directionMultiplier = direction === "up" ? 1 : -1;
      const translateY = (yPos + offset) * directionMultiplier;

      setTransform(`translate3d(0, ${translateY}px, 0)`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction, offset, enabled]);

  return { ref, style: { transform } };
};


