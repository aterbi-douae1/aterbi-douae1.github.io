"use client";
import Section from "./Section";
import { useSite } from "./Providers";
import { ui } from "@/content/ui";
import { projects } from "@/content/projects";

export default function Journey() {
  const { lang } = useSite();
  const j = ui.journey;
  const stages = projects.filter((p) => p.group === "stage");
  return (
    <Section id="parcours" title={j.title[lang]} band>
      <h3 className="mb-5 font-serif text-xl">{j.academic[lang]}</h3>
      <ol className="border-l border-line">
        {j.studies.map((s) => (
          <li key={s.when} className="relative pb-7 pl-6 last:pb-0">
            <span aria-hidden className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="text-sm text-accent">{s.when}{s.note && <span className="text-muted"> · {j.current[lang]}</span>}</p>
            <p className="font-medium">{s.title[lang]}</p>
            <p className="text-sm text-muted">{s.where}</p>
          </li>
        ))}
      </ol>
      <h3 className="mb-5 mt-14 font-serif text-xl">{j.internships[lang]}</h3>
      <ol className="border-l border-line">
        {stages.map((p) => (
          <li key={p.id} className="relative pb-8 pl-6 last:pb-0">
            <span aria-hidden className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="text-sm text-accent">{p.period[lang]}</p>
            <p className="font-medium">{p.role[lang]}</p>
            <p className="text-sm text-muted">{p.place[lang]} · {p.title}</p>
            <a href={`#${p.id}`} className="mt-1 inline-block text-sm underline decoration-accent/60 underline-offset-4 hover:decoration-accent">{j.seeProject[lang]}</a>
          </li>
        ))}
      </ol>
    </Section>
  );
}
