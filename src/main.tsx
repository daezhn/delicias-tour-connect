import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { LocaleProvider } from "@/hooks/use-locale";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <LocaleProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </LocaleProvider>
);

if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .catch((error) => {
        console.error("Service worker registration failed:", error);
      });
  });
}
