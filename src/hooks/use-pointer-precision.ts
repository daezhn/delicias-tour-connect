import { useEffect, useState } from "react";

const supportsMatchMedia = () => typeof window !== "undefined" && typeof window.matchMedia === "function";

export const usePointerPrecision = () => {
  const [isFine, setIsFine] = useState(true);

  useEffect(() => {
    if (!supportsMatchMedia()) return;
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const update = () => setIsFine(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return {
    isFine,
    isCoarse: !isFine
  };
};
