import React, { ImgHTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";

interface BlurImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  blurDataURL?: string; // Base64 encoded tiny image for blur-up
  quality?: "low" | "medium" | "high";
}

/**
 * BlurImage component with blur-up effect
 * Shows a blurred placeholder that transitions to the sharp image when loaded
 * Similar to Medium, Instagram, and Pinterest image loading
 */
export const BlurImage = ({
  className,
  containerClassName,
  src,
  blurDataURL,
  quality = "medium",
  onLoad,
  onError,
  ...props
}: BlurImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [showBlur, setShowBlur] = useState(true);

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (event) => {
    setLoaded(true);
    // Delay hiding blur for smooth transition
    setTimeout(() => setShowBlur(false), 100);
    onLoad?.(event);
  };

  const handleError: React.ReactEventHandler<HTMLImageElement> = (event) => {
    setFailed(true);
    setShowBlur(false);
    onError?.(event);
  };

  // Generate a simple gradient placeholder if no blurDataURL provided
  const getPlaceholder = () => {
    if (blurDataURL) return blurDataURL;
    
    // Create a simple gradient placeholder based on image position
    // This is a fallback when no blur data URL is provided
    const canvas = document.createElement("canvas");
    canvas.width = 40;
    canvas.height = 40;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 40, 40);
      gradient.addColorStop(0, "#e5e7eb");
      gradient.addColorStop(1, "#d1d5db");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 40, 40);
      return canvas.toDataURL();
    }
    return undefined;
  };

  const placeholder = getPlaceholder();

  const blurIntensity = quality === "low" ? "blur-xl" : quality === "high" ? "blur-sm" : "blur-lg";
  const scaleAmount = quality === "low" ? "scale-110" : "scale-105";

  return (
    <div className={cn("relative h-full w-full overflow-hidden", containerClassName)}>
      {/* Blur placeholder - shown while loading */}
      {showBlur && placeholder && (
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500 ease-out",
            loaded ? "opacity-0" : "opacity-100"
          )}
          style={{
            backgroundImage: `url(${placeholder})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(20px)",
            transform: "scale(1.1)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Fallback gradient while no placeholder */}
      {!loaded && !failed && !placeholder && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-muted animate-pulse" />
      )}

      {/* Main image */}
      <img
        src={src}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "h-full w-full object-cover transition-all duration-700 ease-out",
          loaded
            ? "opacity-100 scale-100"
            : "opacity-0 scale-105",
          failed && "opacity-0",
          className
        )}
        loading={props.loading ?? "lazy"}
        decoding="async"
        {...props}
      />

      {/* Error state */}
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-sm text-muted-foreground">
          <span>Imagen no disponible</span>
        </div>
      )}
    </div>
  );
};

