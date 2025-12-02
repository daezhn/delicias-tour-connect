import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Reducido a 15 copos para mejor rendimiento
    const flakes: Snowflake[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 12 + Math.random() * 8,
      size: 4 + Math.random() * 4,
      opacity: 0.4 + Math.random() * 0.4,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute will-change-transform animate-snowfall"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
          }}
        >
          <div
            className="rounded-full bg-white/80"
            style={{
              width: flake.size,
              height: flake.size,
              opacity: flake.opacity,
            }}
          />
        </div>
      ))}
    </div>
  );
};
