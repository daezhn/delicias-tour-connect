import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Locale, defaultLocale } from "@/lib/i18n";

const LOCALE_STORAGE_KEY = "dtc-locale";

const isLocale = (value: string | null): value is Locale => value === "es" || value === "en";

const getInitialLocale = (): Locale => {
  if (typeof window === "undefined") return defaultLocale;
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (isLocale(stored)) return stored;
  const browserLanguage = window.navigator.language?.toLowerCase() ?? "";
  if (browserLanguage.startsWith("en")) return "en";
  if (browserLanguage.startsWith("es")) return "es";
  return defaultLocale;
};

interface LocaleContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  setLocale: () => undefined,
});

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    }
  }, [locale]);

  const value = { locale, setLocale };
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => useContext(LocaleContext);
