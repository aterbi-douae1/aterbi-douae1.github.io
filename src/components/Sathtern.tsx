"use client";
import { Bot, FileText } from "lucide-react";
import { useSite } from "./Providers";
import { ui } from "@/content/ui";
import { sathtern } from "@/content/projects";

export default function Sathtern() {
  const { lang } = useSite();
  const s = ui.sathtern;
  const icons = [FileText, Bot];
  return (
    <section id="sathtern" className="border-y border-accent/40 bg-gradient-to-b from-surface to-bg">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{s.title[lang]}</h2>
        <p className="mt-4 max-w-2xl text-muted">{s.intro[lang]}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sathtern.map((p, i) => {
            const Icon = icons[i];
            return (
              <article key={p.id} className="rounded-lg border border-line bg-bg/70 p-7">
                <div className="mb-4 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-md bg-accent text-accent-ink"><Icon size={20} /></span><h3 className="font-serif text-2xl">{p.title}</h3></div>
                <p className="leading-relaxed">{p.description[lang]}</p>
                <ul className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-sm">{t}</li>)}</ul>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-sm text-muted">{s.note[lang]}</p>
      </div>
    </section>
  );
}
