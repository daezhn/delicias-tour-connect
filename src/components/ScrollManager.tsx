import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollManager = ({ children }: { children?: ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const scrollToHash = (hash: string) => {
      const targetId = hash.replace(/^#/, "");
      if (!targetId) return;
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.hash) {
      requestAnimationFrame(() => scrollToHash(location.hash));
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash]);

  return <>{children}</>;
};
