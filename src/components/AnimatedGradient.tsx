import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  children?: ReactNode;
  className?: string;
  variant?: "subtle" | "vibrant" | "warm" | "cool";
  speed?: "slow" | "normal" | "fast";
}

export const AnimatedGradient = ({
  children,
  className,
  variant = "subtle",
  speed = "normal",
}: AnimatedGradientProps) => {
  const variants = {
    subtle: "from-primary/5 via-accent/5 to-secondary/5",
    vibrant: "from-primary/20 via-accent/20 to-secondary/20",
    warm: "from-[#f6b043]/10 via-[#f79d84]/10 to-[#d64089]/10",
    cool: "from-[#00aec0]/10 via-[#0645ad]/10 to-[#8fd3fe]/10",
  };

  const speeds = {
    slow: "animate-[gradient-shift_20s_ease-in-out_infinite]",
    normal: "animate-[gradient-shift_15s_ease-in-out_infinite]",
    fast: "animate-[gradient-shift_10s_ease-in-out_infinite]",
  };

  return (
    <div
      className={cn(
        "absolute inset-0 bg-gradient-to-br bg-[length:200%_200%]",
        variants[variant],
        speeds[speed],
        className
      )}
      style={{
        backgroundSize: "200% 200%",
      }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
};

