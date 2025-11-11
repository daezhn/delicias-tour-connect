import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type FullPageSkeletonProps = {
  tone?: "sand" | "indigo";
  sections?: number;
} & HTMLAttributes<HTMLDivElement>;

const heroToneStyles = {
  sand: "from-[#f6ecdf] via-[#f3d3ad] to-[#f6b043]",
  indigo: "from-[#0c2c68] via-[#163d8b] to-[#0c2c68]"
} as const;

const sectionToneStyles = {
  sand: "bg-white/80",
  indigo: "bg-white/90"
} as const;

export const FullPageSkeleton = ({
  tone = "sand",
  sections = 3,
  className,
  ...rest
}: FullPageSkeletonProps) => {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col bg-[#f6ecdf] text-foreground",
        tone === "indigo" && "bg-[#f6ecdf]"
      )}
      aria-hidden="true"
      {...rest}
    >
      <div className={cn("relative overflow-hidden text-white", tone === "indigo" ? "bg-[#0c2c68]" : "bg-[#134165]")}>
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r opacity-90",
            heroToneStyles[tone]
          )}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-4 py-24">
          <div className="h-8 w-32 rounded-full bg-white/40" />
          <div className="h-14 w-full max-w-3xl rounded-full bg-white/50" />
          <div className="h-4 w-full max-w-2xl rounded-full bg-white/40" />
          <div className="h-4 w-full max-w-xl rounded-full bg-white/30" />
          <div className="flex gap-3 pt-4">
            <div className="h-11 w-36 rounded-full bg-white/40" />
            <div className="h-11 w-36 rounded-full border border-white/50" />
          </div>
        </div>
      </div>

      <div className="flex-1 bg-transparent">
        <div className="mx-auto max-w-6xl space-y-10 px-4 py-16">
          {[...Array(sections)].map((_, index) => (
            <div
              key={`skeleton-section-${index}`}
              className={cn(
                "rounded-[2rem] border border-black/5 p-6 shadow-[0_25px_55px_rgba(4,18,42,0.08)]",
                sectionToneStyles[tone],
                "animate-pulse"
              )}
            >
              <div className="mb-6 space-y-3">
                <div className="h-4 w-32 rounded-full bg-black/10" />
                <div className="h-6 w-3/4 rounded-full bg-black/10" />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {[0, 1, 2].map((column) => (
                  <div key={`skeleton-card-${index}-${column}`} className="space-y-3 rounded-2xl border border-black/5 bg-white/70 p-4">
                    <div className="h-5 w-20 rounded-full bg-black/10" />
                    <div className="h-4 w-full rounded-full bg-black/10" />
                    <div className="h-4 w-3/4 rounded-full bg-black/10" />
                    <div className="h-4 w-2/3 rounded-full bg-black/10" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
