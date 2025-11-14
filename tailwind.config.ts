import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(100%)"
          },
          "100%": {
            transform: "translateX(0)"
          }
        },
        "zoom-in": {
          "0%": {
            transform: "scale(1)"
          },
          "100%": {
            transform: "scale(1.05)"
          }
        },
        "hero-pan": {
          "0%": {
            transform: "scale(1) translate3d(0, 0, 0)"
          },
          "100%": {
            transform: "scale(1.1) translate3d(-12px, -18px, 0)"
          }
        },
        "gradient-drift": {
          "0%": {
            opacity: "0.4",
            transform: "translate3d(-10%, 0, 0) scale(1)"
          },
          "50%": {
            opacity: "0.7",
            transform: "translate3d(5%, -3%, 0) scale(1.1)"
          },
          "100%": {
            opacity: "0.4",
            transform: "translate3d(-10%, 0, 0) scale(1)"
          }
        },
        "scroll-wheel": {
          "0%": {
            opacity: "0",
            transform: "translateY(-6px)"
          },
          "30%": {
            opacity: "1",
            transform: "translateY(0)"
          },
          "60%": {
            opacity: "1",
            transform: "translateY(8px)"
          },
          "100%": {
            opacity: "0",
            transform: "translateY(14px)"
          }
        },
        "float-y": {
          "0%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-6px)"
          },
          "100%": {
            transform: "translateY(0)"
          }
        },
        "timeline-grow": {
          "0%": {
            height: "0%"
          },
          "100%": {
            height: "100%"
          }
        },
        "star-pop": {
          "0%": {
            transform: "scale(0.6)",
            opacity: "0"
          },
          "70%": {
            transform: "scale(1.2)",
            opacity: "1"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },
        "chip-shine": {
          "0%": {
            backgroundPosition: "0% 50%"
          },
          "100%": {
            backgroundPosition: "200% 50%"
          }
        },
        "cta-shine": {
          "0%": {
            transform: "translateX(-150%)"
          },
          "100%": {
            transform: "translateX(150%)"
          }
        },
        "pulse-soft": {
          "0%": {
            opacity: "0.25",
            transform: "scale(0.95)"
          },
          "50%": {
            opacity: "0.5",
            transform: "scale(1.05)"
          },
          "100%": {
            opacity: "0.25",
            transform: "scale(0.95)"
          }
        },
        "text-shimmer": {
          "0%": {
            backgroundPosition: "-200% center"
          },
          "100%": {
            backgroundPosition: "200% center"
          }
        },
        "glow-pulse": {
          "0%, 100%": {
            opacity: "0.4",
            transform: "scale(1)"
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.05)"
          }
        },
        "slide-up-fade": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        },
        "rotate-in": {
          "0%": {
            opacity: "0",
            transform: "rotate(-5deg) scale(0.95)"
          },
          "100%": {
            opacity: "1",
            transform: "rotate(0deg) scale(1)"
          }
        },
        "shimmer-sweep": {
          "0%": {
            transform: "translateX(-100%) skewX(-15deg)"
          },
          "100%": {
            transform: "translateX(200%) skewX(-15deg)"
          }
        },
        "gradient-shift": {
          "0%, 100%": {
            backgroundPosition: "0% 50%"
          },
          "50%": {
            backgroundPosition: "100% 50%"
          }
        },
        "float-orb": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -30px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          }
        },
        "shimmer": {
          "0%": {
            transform: "translateX(-100%)"
          },
          "100%": {
            transform: "translateX(100%)"
          }
        },
        "ripple": {
          "0%": {
            width: "0",
            height: "0",
            opacity: "1"
          },
          "100%": {
            width: "300px",
            height: "300px",
            opacity: "0"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "zoom-in": "zoom-in 20s ease-out infinite alternate",
        "hero-pan": "hero-pan 26s ease-in-out infinite alternate",
        "gradient-drift": "gradient-drift 18s ease-in-out infinite",
        "scroll-wheel": "scroll-wheel 2.4s ease-in-out infinite",
        "float-y": "float-y 7s ease-in-out infinite",
        "timeline-grow": "timeline-grow 1.6s ease-out forwards",
        "star-pop": "star-pop 0.6s ease-out forwards",
        "chip-shine": "chip-shine 3s linear infinite",
        "cta-shine": "cta-shine 2s linear infinite",
        "pulse-soft": "pulse-soft 5s ease-in-out infinite",
        "text-shimmer": "text-shimmer 3s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-up-fade": "slide-up-fade 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "rotate-in": "rotate-in 0.6s ease-out",
        "shimmer-sweep": "shimmer-sweep 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 15s ease-in-out infinite",
        "float-orb": "float-orb 20s ease-in-out infinite",
        "shimmer": "shimmer 2s ease-in-out infinite",
        "ripple": "ripple 0.6s ease-out"
      },
    },
  },
  plugins: [animatePlugin],
} satisfies Config;
