"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Lang } from "@/lib/types";
import { themes, type ThemeId } from "@/content/ui";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; theme: ThemeId; setTheme: (t: ThemeId) => void };
const C = createContext<Ctx | null>(null);
export const useSite = () => {
  const c = useContext(C);
  if (!c) throw new Error("useSite outside provider");
  return c;
};

export default function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");
  const [theme, setThemeState] = useState<ThemeId>("midnight");

  useEffect(() => {
    try {
      const l = localStorage.getItem("lang");
      if (l === "fr" || l === "en") setLangState(l);
      else if (navigator.language?.toLowerCase().startsWith("en")) setLangState("en");
      const t = localStorage.getItem("theme");
      if (t && themes.some((x) => x.id === t)) setThemeState(t as ThemeId);
    } catch {}
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    document.documentElement.lang = l;
    try { localStorage.setItem("lang", l); } catch {}
  }, []);
  const setTheme = useCallback((t: ThemeId) => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("theme", t); } catch {}
  }, []);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => { document.documentElement.setAttribute("data-theme", theme); }, [theme]);

  return <C.Provider value={{ lang, setLang, theme, setTheme }}>{children}</C.Provider>;
}
