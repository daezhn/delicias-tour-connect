import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up" | "wipe-right" | "wipe-up" | "zoom-reveal" | "none";
  threshold?: number;
  once?: boolean;
}

export const MotionReveal = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  variant = "fade-up",
  threshold = 0.2,
  once = true,
}: MotionRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });
  const controls = useAnimation();

  const variants: Record<string, Variants> = {
    "fade-up": {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-down": {
      hidden: { opacity: 0, y: -40 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-left": {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
    "fade-right": {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
    "scale-up": {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    "wipe-right": {
      hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
      visible: { opacity: 1, clipPath: "inset(0 0% 0 0)" },
    },
    "wipe-up": {
      hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
      visible: { opacity: 1, clipPath: "inset(0 0 0 0)" },
    },
    "zoom-reveal": {
      hidden: { opacity: 0, scale: 1.1, filter: "blur(10px)" },
      visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
    },
    none: {
      hidden: {},
      visible: {},
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[variant]}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

