import React, { ImgHTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";
import { BlurImage } from "./BlurImage";

interface FadeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  blurDataURL?: string; // Optional blur placeholder
}

/**
 * FadeImage component - now uses BlurImage for better UX
 * Maintains backward compatibility while adding blur-up effect
 */
export const FadeImage = ({
  className,
  containerClassName,
  blurDataURL,
  onLoad,
  onError,
  ...props
}: FadeImageProps) => {
  return (
    <BlurImage
      {...props}
      className={className}
      containerClassName={containerClassName}
      blurDataURL={blurDataURL}
      onLoad={onLoad}
      onError={onError}
    />
  );
};
