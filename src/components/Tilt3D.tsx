import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Tilt3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  perspective?: number;
  scale?: number;
  glare?: boolean;
  maxGlare?: number;
}

export const Tilt3D = ({
  children,
  className,
  intensity = 15,
  perspective = 1000,
  scale = 1.05,
  glare = true,
  maxGlare = 0.5,
}: Tilt3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glareOpacity, setGlareOpacity] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -intensity;
      const rotateY = ((x - centerX) / centerX) * intensity;

      setTransform(
        `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
      );

      if (glare) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        const distance = Math.sqrt(
          Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
        );
        const maxDistance = Math.sqrt(
          Math.pow(centerX, 2) + Math.pow(centerY, 2)
        );
        const opacity = (1 - distance / maxDistance) * maxGlare;
        setGlareOpacity(opacity);
      }
    };

    const handleMouseLeave = () => {
      setTransform(
        `perspective(${perspective}px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`
      );
      setGlareOpacity(0);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [intensity, perspective, scale, glare, maxGlare]);

  return (
    <div
      ref={containerRef}
      className={cn("relative transition-transform duration-300 ease-out", className)}
      style={{
        transformStyle: "preserve-3d",
        transform: transform || `perspective(${perspective}px)`,
      }}
    >
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glareOpacity > 0 ? "50%" : "50%"} ${glareOpacity > 0 ? "50%" : "50%"}, rgba(255, 255, 255, ${glareOpacity}) 0%, transparent 70%)`,
            opacity: glareOpacity > 0 ? 1 : 0,
            mixBlendMode: "overlay",
          }}
        />
      )}
      <div style={{ transform: "translateZ(0)" }}>{children}</div>
    </div>
  );
};


