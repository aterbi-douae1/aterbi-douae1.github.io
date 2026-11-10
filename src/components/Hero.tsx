"use client";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { useSite } from "./Providers";
import { site, ui } from "@/content/ui";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  const { lang } = useSite();
  const h = ui.hero;
  const round = "grid h-11 w-11 place-items-center rounded-full ring-1 ring-line text-ink transition-colors hover:bg-accent hover:text-accent-ink hover:ring-accent";
  return (
    <section id="accueil" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1fr_auto] lg:gap-20 lg:pb-28 lg:pt-40">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <p className="mb-5 text-base text-accent">{h.school[lang]}</p>
        <h1 className="font-serif text-5xl font-medium leading-[1.02] tracking-tight sm:text-7xl">Douae Aterbi</h1>
        <p className="mt-5 max-w-xl font-serif text-2xl leading-snug text-ink/90 sm:text-3xl">{h.headline[lang]}</p>
        <p className="mt-2 max-w-xl text-sm text-muted">{h.role[lang]}</p>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">{h.pitch[lang]}</p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#projets" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-110">{h.seeProjects[lang]}<ArrowDown size={16} /></a>
          <a href="#contact" className="rounded-full px-6 py-3 text-sm font-semibold ring-1 ring-line transition hover:bg-surface">{h.contact[lang]}</a>
          <span className="mx-1 hidden h-6 w-px bg-line sm:block" />
          <a className={round} href={`mailto:${site.email}`} aria-label="Email"><Mail size={18} /></a>
          <a className={round} href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
          <a className={round} href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
        </div>
      </motion.div>
      <motion.figure initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }} className="relative mx-auto w-56 sm:w-64 lg:mx-0">
        <span aria-hidden className="absolute -bottom-3 -right-3 h-full w-full rounded-md border border-accent/60" />
        {/* Photo originale du CV : aucune retouche, cadre rectangulaire à angles légèrement arrondis */}
        <img src="/images/douae.jpg" alt={h.photoAlt[lang]} width={275} height={275} className="relative block h-auto w-full rounded-md border border-line object-cover" />
      </motion.figure>
    </section>
  );
}
