import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ImageRevealProps extends ImgHTMLAttributes<HTMLImageElement> {
  revealType?: "blur" | "slide" | "scale" | "mask";
  threshold?: number;
  once?: boolean;
}

export const ImageReveal = ({
  src,
  alt,
  className,
  revealType = "blur",
  threshold = 0.2,
  once = true,
  ...props
}: ImageRevealProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(img);
    return () => observer.disconnect();
  }, [threshold, once]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={cn("image-reveal-wrapper", `image-reveal-${revealType}`, className)}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={handleLoad}
        className={cn(
          "image-reveal-image",
          isLoaded && "image-reveal-loaded",
          isVisible && "image-reveal-visible"
        )}
        {...props}
      />
    </div>
  );
};

