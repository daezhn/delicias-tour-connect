import type { CSSProperties } from "react";

const blobs = [
  { size: 420, top: "6%", left: "12%", duration: 18, opacity: 0.4 },
  { size: 320, top: "20%", left: "65%", duration: 22, opacity: 0.35 },
  { size: 260, top: "58%", left: "72%", duration: 16, opacity: 0.3 },
  { size: 520, top: "50%", left: "-5%", duration: 26, opacity: 0.28 },
  { size: 360, top: "78%", left: "35%", duration: 24, opacity: 0.32 }
] as const;

export const AuroraParticles = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((blob, index) => {
        const style: CSSProperties = {
          width: blob.size,
          height: blob.size,
          top: blob.top,
          left: blob.left,
          opacity: blob.opacity,
          animationDuration: `${blob.duration}s`,
          animationDelay: `${index * 1.2}s`
        };

        return (
          <span
            key={`aurora-${index}`}
            className="aurora-blob absolute rounded-full bg-gradient-to-br from-cyan-300/60 via-sky-400/40 to-amber-300/50 blur-3xl"
            style={style}
          />
        );
      })}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_60%)]" />
    </div>
  );
};
