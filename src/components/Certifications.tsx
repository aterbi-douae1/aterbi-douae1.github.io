"use client";
import { useCallback, useState } from "react";
import Section from "./Section";
import Lightbox from "./Lightbox";
import { useSite } from "./Providers";
import { ui } from "@/content/ui";
import { certifications } from "@/content/projects";

export default function Certifications() {
  const { lang } = useSite();
  const [idx, setIdx] = useState<number | null>(null);
  const close = useCallback(() => setIdx(null), []);
  const items = certifications.map((c) => ({ src: c.src, caption: `${c.title} — ${c.issuer}` }));
  return (
    <Section id="certifications" title={ui.certs.title[lang]} band>
      <p className="mb-8 max-w-2xl text-muted">{ui.certs.intro[lang]}</p>
      <ul className="grid gap-6 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <li key={c.id}>
            <button onClick={() => setIdx(i)} aria-label={`${c.title} — ${c.issuer}`} className="group block w-full overflow-hidden rounded-md border border-line bg-white transition hover:border-accent">
              <img src={c.src} alt={`${c.title} — ${c.issuer}`} loading="lazy" className="block h-auto w-full" />
            </button>
            <p className="mt-2.5 font-medium leading-snug">{c.title}</p>
            <p className="text-sm text-muted">{c.issuer} · {c.date[lang]}</p>
          </li>
        ))}
      </ul>
      <Lightbox items={items} index={idx} onClose={close} onIndex={setIdx} />
    </Section>
  );
}
