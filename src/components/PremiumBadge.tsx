import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PremiumBadgeProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

export const PremiumBadge = ({ icon, label, className }: PremiumBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-transparent px-4 py-2 text-sm font-semibold text-primary backdrop-blur-sm shadow-sm shadow-primary/20 transition hover:shadow-md",
        className,
      )}
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow shadow-primary/30">
        {icon}
      </span>
      <span className="uppercase tracking-[0.3em] text-xs">{label}</span>
    </div>
  );
};
