"use client";
import Section from "./Section";
import { useSite } from "./Providers";
import { ui } from "@/content/ui";

export default function About() {
  const { lang } = useSite();
  const a = ui.about;
  return (
    <Section id="a-propos" title={a.title[lang]}>
      <p className="max-w-2xl font-serif text-xl leading-relaxed sm:text-2xl">{a.lead[lang]}</p>
      <p className="mt-6 max-w-2xl leading-relaxed text-muted">{a.body[lang]}</p>
      <dl className="mt-10 grid max-w-2xl gap-x-8 gap-y-3 border-t border-line pt-6 sm:grid-cols-[auto_1fr]">
        <dt className="font-medium">{a.languages[lang]}</dt>
        <dd className="flex flex-wrap gap-x-6 gap-y-1 text-muted">
          {a.langItems.map((l) => <span key={l.k.fr}><span className="text-ink">{l.k[lang]}</span> : {l.v[lang]}</span>)}
        </dd>
      </dl>
    </Section>
  );
}
