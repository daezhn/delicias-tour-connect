import { motion, useInView, useAnimation, type Variants } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade-in" | "scale" | "blur";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  variant?: RevealVariant;
  threshold?: number;
}

const variants: Record<RevealVariant, Variants> = {
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
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
};

export const Reveal = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  variant = "fade-up",
  threshold = 0.2,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });
  const controls = useAnimation();

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
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.25, 0.25, 0, 1], // Cubic bezier for "premium" feel
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

// New Stagger Container for list items
interface RevealListProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  threshold?: number;
  once?: boolean;
}

export const RevealList = ({
  children,
  className,
  stagger = 0.1,
  threshold = 0.2,
  once = true,
}: RevealListProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Item for RevealList
interface RevealItemProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
}

export const RevealItem = ({ 
  children, 
  className,
  variant = "fade-up" 
}: RevealItemProps) => {
  return (
    <motion.div variants={variants[variant]} className={className}>
      {children}
    </motion.div>
  );
};
