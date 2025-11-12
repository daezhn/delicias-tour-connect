import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type HistoryState = {
  idx?: number;
};

export const useSmartBackNavigation = (fallback = "/") => {
  const navigate = useNavigate();

  return useCallback(() => {
    if (typeof window !== "undefined") {
      const historyState = window.history.state as HistoryState | null;
      if (typeof historyState?.idx === "number" && historyState.idx > 0) {
        navigate(-1);
        return;
      }
    }

    navigate(fallback);
  }, [navigate, fallback]);
};
