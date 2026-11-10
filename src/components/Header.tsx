"use client";
import { Check, Menu, Palette, X } from "lucide-react";
import { useState } from "react";
import { useSite } from "./Providers";
import { themes, ui } from "@/content/ui";

export default function Header() {
  const { lang, setLang, theme, setTheme } = useSite();
  const [menu, setMenu] = useState(false);
  const [pal, setPal] = useState(false);
  const link = "rounded px-2.5 py-1.5 text-sm text-muted transition-colors hover:text-ink";
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#accueil" className="font-serif text-lg font-medium tracking-tight">Douae Aterbi</a>
        <nav aria-label="Navigation principale" className="hidden items-center gap-0.5 lg:flex">
          {ui.nav.map((n) => <a key={n.id} href={`#${n.id}`} className={link}>{n.label[lang]}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <div className="relative">
            <button onClick={() => setPal((v) => !v)} aria-expanded={pal} aria-label={ui.controls.theme[lang]} className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-line hover:bg-surface"><Palette size={17} /></button>
            {pal && (
              <ul role="menu" className="absolute right-0 mt-2 w-48 rounded-lg border border-line bg-surface p-1.5 shadow-xl">
                {themes.map((t) => (
                  <li key={t.id}>
                    <button role="menuitemradio" aria-checked={theme === t.id} onClick={() => { setTheme(t.id); setPal(false); }} className="flex w-full items-center gap-3 rounded-md px-2.5 py-2 text-left text-sm hover:bg-bg/60">
                      <span className="flex h-5 w-8 overflow-hidden rounded ring-1 ring-line"><i className="w-1/2" style={{ background: t.swatch[0] }} /><i className="w-1/2" style={{ background: t.swatch[1] }} /></span>
                      <span className="flex-1">{t.label[lang]}</span>{theme === t.id && <Check size={15} className="text-accent" />}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div role="group" aria-label={ui.controls.lang[lang]} className="flex overflow-hidden rounded-full text-xs font-medium ring-1 ring-line">
            {(["fr", "en"] as const).map((l) => (
              <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l} className={`px-3 py-2 ${lang === l ? "bg-accent text-accent-ink" : "text-muted hover:text-ink"}`}>{l.toUpperCase()}</button>
            ))}
          </div>
          <button className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-line lg:hidden" aria-label={ui.controls.menu[lang]} aria-expanded={menu} onClick={() => setMenu((v) => !v)}>{menu ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </div>
      {menu && (
        <nav className="border-t border-line bg-bg px-5 py-3 lg:hidden">
          {ui.nav.map((n) => <a key={n.id} href={`#${n.id}`} onClick={() => setMenu(false)} className="block py-2.5 text-base">{n.label[lang]}</a>)}
        </nav>
      )}
    </header>
  );
}
