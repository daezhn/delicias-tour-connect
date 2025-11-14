import { cn } from "@/lib/utils";

interface SkeletonCardProps {
  className?: string;
  variant?: "default" | "image" | "text" | "avatar" | "button";
  lines?: number;
  showImage?: boolean;
  showAvatar?: boolean;
}

/**
 * Enhanced Skeleton Loader with shimmer effect
 * Mimics the shape of content that will appear
 */
export const SkeletonCard = ({
  className,
  variant = "default",
  lines = 3,
  showImage = true,
  showAvatar = false,
}: SkeletonCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-muted/50",
        variant === "image" && "aspect-video",
        variant === "text" && "p-6",
        variant === "default" && "p-4",
        className
      )}
    >
      {/* Shimmer effect */}
      <div
        className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{
          backgroundSize: "200% 100%",
        }}
      />

      {showImage && variant !== "text" && (
        <div className="mb-4 aspect-video w-full rounded-lg bg-muted" />
      )}

      {showAvatar && (
        <div className="mb-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-muted" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-24 rounded bg-muted" />
            <div className="h-3 w-32 rounded bg-muted/70" />
          </div>
        </div>
      )}

      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-4 rounded bg-muted",
              i === lines - 1 && "w-3/4",
              i < lines - 1 && "w-full"
            )}
          />
        ))}
      </div>

      {variant === "button" && (
        <div className="mt-4 h-10 w-32 rounded-lg bg-muted" />
      )}
    </div>
  );
};

/**
 * Skeleton loader for image gallery
 */
export const SkeletonImage = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-muted/50", className)}>
      <div className="aspect-video w-full bg-muted" />
      <div
        className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{
          backgroundSize: "200% 100%",
        }}
      />
    </div>
  );
};

/**
 * Skeleton loader for event cards
 */
export const SkeletonEventCard = () => {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white bg-white p-0 shadow-lg">
      <div className="relative h-48 w-full bg-muted">
        <div
          className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{
            backgroundSize: "200% 100%",
          }}
        />
      </div>
      <div className="space-y-3 p-5">
        <div className="h-3 w-20 rounded bg-muted" />
        <div className="h-6 w-3/4 rounded bg-muted" />
        <div className="h-4 w-full rounded bg-muted/70" />
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="h-3 w-24 rounded bg-muted/70" />
          <div className="h-8 w-24 rounded-full bg-muted" />
        </div>
      </div>
    </div>
  );
};

