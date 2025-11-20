import { Link } from "react-router-dom";
import { type LucideIcon } from "lucide-react";

interface HeroTileProps {
  href: string;
  label: string;
  shortLabel: string;
  image: string;
  Icon?: LucideIcon;
  priority?: boolean;
  className?: string;
}

export const HeroTile = ({ 
  href, 
  label, 
  shortLabel, 
  image, 
  Icon, 
  priority = false, 
  className = "" 
}: HeroTileProps) => {
  return (
    <Link
      to={href}
      aria-label={label}
      className={`group relative overflow-hidden border border-white/60 bg-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.5)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-white ${className}`}
      style={{ transform: "rotate(45deg)" }}
    >
      <img
        src={image}
        alt={label}
        className="h-full w-full object-cover transition duration-700"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        style={{ transform: "rotate(-45deg) scale(1.25)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/75 via-black/45 to-black/80 opacity-90 transition group-hover:opacity-100"
        style={{ transform: "rotate(-45deg) scale(1.32)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1 text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.85)] transition group-hover:scale-[1.03]"
        style={{ transform: "rotate(-45deg)" }}
      >
        {Icon && <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={2} aria-hidden="true" />}
        <span className="text-[0.55rem] sm:text-xs font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em]">
          {shortLabel}
        </span>
      </div>
      <span className="sr-only">{label}</span>
    </Link>
  );
};

