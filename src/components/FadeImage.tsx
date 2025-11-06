import React, { ImgHTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export const FadeImage = ({
  className,
  containerClassName,
  onLoad,
  onError,
  ...props
}: FadeImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (event) => {
    setLoaded(true);
    onLoad?.(event);
  };

  const handleError: React.ReactEventHandler<HTMLImageElement> = (event) => {
    setFailed(true);
    onError?.(event);
  };

  return (
    <div className={cn("relative h-full w-full overflow-hidden", containerClassName)}>
      {!loaded && !failed && <div className="absolute inset-0 animate-pulse bg-muted" />}
      <img
        {...props}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-out",
          loaded && !failed && "opacity-100",
          failed && "opacity-0",
          className,
        )}
        loading={props.loading ?? "lazy"}
        decoding="async"
      />
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-sm text-muted-foreground">
          Imagen no disponible
        </div>
      )}
    </div>
  );
};
