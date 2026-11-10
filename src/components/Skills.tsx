"use client";
import Section from "./Section";
import { useSite } from "./Providers";
import { ui } from "@/content/ui";
import { skills } from "@/content/projects";

const en: Record<string, string> = { "Notions de Machine Learning": "Machine Learning fundamentals", "IA générative": "Generative AI" };

export default function Skills() {
  const { lang } = useSite();
  return (
    <Section id="competences" title={ui.skills.title[lang]}>
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((g) => (
          <div key={g.title.fr} className="grid gap-3 py-6 sm:grid-cols-[13rem_1fr]">
            <dt className="font-medium">{g.title[lang]}</dt>
            <dd><ul className="flex flex-wrap gap-2">{g.items.map((i) => <li key={i} className="rounded-md bg-surface px-3 py-1.5 text-sm ring-1 ring-line">{lang === "en" ? en[i] ?? i : i}</li>)}</ul></dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
