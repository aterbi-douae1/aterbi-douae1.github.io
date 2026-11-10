"use client";
import { Lock } from "lucide-react";
import { useCallback, useState } from "react";
import Section from "./Section";
import Lightbox from "./Lightbox";
import { useSite } from "./Providers";
import { ui } from "@/content/ui";
import { projects } from "@/content/projects";
import type { Project } from "@/lib/types";

function Chips({ items }: { items: string[] }) {
  return <ul className="flex flex-wrap gap-2">{items.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-sm">{t}</li>)}</ul>;
}

function ProjectCard({ p }: { p: Project }) {
  const { lang } = useSite();
  const u = ui.projects;
  const [idx, setIdx] = useState<number | null>(null);
  const close = useCallback(() => setIdx(null), []);
  const hidden = p.restricted && !p.restricted.published;
  const ordered = [...p.shots.filter((s) => s.featured), ...p.shots.filter((s) => !s.featured)];
  const items = ordered.map((s) => ({ src: s.src, caption: s.caption[lang] }));
  const featured = ordered.filter((s) => s.featured);
  const rest = ordered.filter((s) => !s.featured);
  const h4 = "mb-2.5 mt-7 font-medium";
  return (
    <article id={p.id} className="grid gap-8 border-t border-line py-12 first:border-t-0 first:pt-0 xl:grid-cols-[1fr_1fr] xl:gap-12">
      <div>
        <p className="text-sm text-accent">{p.period[lang]}</p>
        <h3 className="mt-1 font-serif text-3xl font-medium tracking-tight">{p.title}</h3>
        <p className="mt-1 text-muted">{p.subtitle[lang]}</p>
        <p className="mt-5 text-sm text-muted"><span className="text-ink">{u.role[lang]} :</span> {p.role[lang]}<br />{p.place[lang]}</p>
        <p className="mt-3 rounded-md border-l-2 border-accent bg-surface/60 px-3 py-2 text-sm">{p.context[lang]}</p>
        <p className="mt-5 leading-relaxed">{p.description[lang]}</p>
        <h4 className={h4}>{u.features[lang]}</h4>
        <ul className="list-disc space-y-1 pl-5 text-muted marker:text-accent">{p.features[lang].map((f) => <li key={f}>{f}</li>)}</ul>
        {p.contributions[lang].length > 0 && (<>
          <h4 className={h4}>{u.contributions[lang]}</h4>
          <ul className="list-disc space-y-1 pl-5 text-muted marker:text-accent">{p.contributions[lang].map((f) => <li key={f}>{f}</li>)}</ul>
        </>)}
        <h4 className={h4}>{u.tech[lang]}</h4>
        <Chips items={p.tech} />
      </div>
      <div className="min-w-0">
        {hidden ? (
          <div className="flex h-full min-h-48 flex-col items-start justify-center gap-3 rounded-lg border border-dashed border-line bg-surface/50 p-6">
            <Lock size={20} className="text-accent" />
            <p className="font-medium">{u.restricted[lang]}</p>
            <p className="text-sm text-muted">{p.restricted!.notice[lang]}</p>
          </div>
        ) : (
          <>
            <h4 className="sr-only">{u.gallery[lang]}</h4>
            <div className="space-y-4">
              {featured.map((s, i) => (
                <figure key={s.src}>
                  <button onClick={() => setIdx(i)} aria-label={`${u.open[lang]} : ${s.caption[lang]}`} className="block w-full overflow-hidden rounded-md border border-line bg-white transition hover:border-accent">
                    <img src={s.src} alt={s.caption[lang]} loading="lazy" className="block h-auto w-full" />
                  </button>
                  <figcaption className="mt-1.5 text-sm text-muted">{s.caption[lang]}</figcaption>
                </figure>
              ))}
            </div>
            {rest.length > 0 && (
              <>
                <p className="mb-2 mt-6 text-sm font-medium">{u.more[lang]}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {rest.map((s, i) => (
                    <li key={s.src}>
                      <button onClick={() => setIdx(featured.length + i)} aria-label={`${u.open[lang]} : ${s.caption[lang]}`} className="flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-md border border-line bg-white transition hover:border-accent">
                        <img src={s.src} alt={s.caption[lang]} loading="lazy" className="max-h-full max-w-full object-contain" />
                      </button>
                      <span className="mt-1 block text-xs text-muted">{s.caption[lang]}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {p.demoNote && <p className="mt-4 text-xs text-muted">{p.demoNote[lang]}</p>}
          </>
        )}
      </div>
      <Lightbox items={items} index={idx} onClose={close} onIndex={setIdx} />
    </article>
  );
}

export default function Projects() {
  const { lang } = useSite();
  const u = ui.projects;
  const group = (g: Project["group"]) => projects.filter((p) => p.group === g);
  return (
    <Section id="projets" title={u.title[lang]}>
      <p className="mb-12 max-w-2xl text-muted">{u.intro[lang]}</p>
      <h3 className="mb-8 font-serif text-xl text-muted">{u.internships[lang]}</h3>
      {group("stage").map((p) => <ProjectCard key={p.id} p={p} />)}
      <h3 className="mb-8 mt-10 font-serif text-xl text-muted">{u.academic[lang]}</h3>
      {group("academique").map((p) => <ProjectCard key={p.id} p={p} />)}
    </Section>
  );
}
