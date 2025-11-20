import { useEffect, useState } from "react";

interface CursorFollowerProps {
  size?: number;
  color?: string;
  opacity?: number;
  enabled?: boolean;
}

export const CursorFollower = ({
  size = 32,
  color = "rgba(0, 174, 192, 0.3)",
  opacity = 0.5,
  enabled = true,
}: CursorFollowerProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let animationFrame: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setIsVisible(true);

      if (!animationFrame) {
        const animate = () => {
          currentX += (targetX - currentX) * 0.15;
          currentY += (targetY - currentY) * 0.15;
          setPosition({ x: currentX, y: currentY });

          if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
            animationFrame = requestAnimationFrame(animate);
          } else {
            animationFrame = 0;
          }
        };
        animate();
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Check if device has fine pointer (mouse, not touch)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (hasFinePointer) {
      window.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [enabled]);

  if (!enabled || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] mix-blend-difference transition-opacity duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size}px`,
        height: `${size}px`,
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: isVisible ? opacity : 0,
        filter: "blur(8px)",
      }}
      aria-hidden="true"
    />
  );
};


