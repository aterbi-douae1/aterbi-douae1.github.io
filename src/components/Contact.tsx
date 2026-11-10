"use client";
import { Download, Mail } from "lucide-react";
import { useState } from "react";
import Section from "./Section";
import { useSite } from "./Providers";
import { site, ui } from "@/content/ui";
import { GithubIcon, LinkedinIcon } from "./Icons";

function Form() {
  const { lang } = useSite();
  const f = ui.contact.form;
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const field = "w-full rounded-md border border-line bg-surface px-3.5 py-2.5 text-ink placeholder:text-muted focus:border-accent";
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    try {
      const r = await fetch(site.formEndpoint, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(e.currentTarget) });
      if (r.ok) { setState("ok"); e.currentTarget.reset(); } else setState("err");
    } catch { setState("err"); }
  }
  return (
    <form onSubmit={submit} className="mt-10 grid max-w-xl gap-4">
      <label className="grid gap-1.5 text-sm">{f.name[lang]}<input required name="name" className={field} /></label>
      <label className="grid gap-1.5 text-sm">{f.email[lang]}<input required type="email" name="email" className={field} /></label>
      <label className="grid gap-1.5 text-sm">{f.message[lang]}<textarea required name="message" rows={5} className={field} /></label>
      <button disabled={state === "sending"} className="justify-self-start rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink disabled:opacity-60">{state === "sending" ? f.sending[lang] : f.send[lang]}</button>
      <p role="status" className="text-sm text-muted">{state === "ok" ? f.ok[lang] : state === "err" ? f.err[lang] : ""}</p>
    </form>
  );
}

export default function Contact() {
  const { lang } = useSite();
  const c = ui.contact;
  const big = "inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold ring-1 ring-line transition hover:bg-surface";
  return (
    <Section id="contact" title={c.title[lang]}>
      <p className="max-w-xl font-serif text-2xl leading-snug">{c.lead[lang]}</p>
      <p className="mt-4"><a href={`mailto:${site.email}`} className="text-lg underline decoration-accent underline-offset-4">{site.email}</a></p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a className="inline-flex items-center gap-2.5 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink hover:brightness-110" href={site.cv} download><Download size={17} />{c.cv[lang]}</a>
        <a className={big} href={site.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon />LinkedIn</a>
        <a className={big} href={site.github} target="_blank" rel="noopener noreferrer"><GithubIcon />GitHub</a>
        <a className={big} href={`mailto:${site.email}`}><Mail size={17} />{c.email[lang]}</a>
      </div>
      {/* Formulaire affiché uniquement si un service réel est configuré (NEXT_PUBLIC_FORM_ENDPOINT). */}
      {site.formEndpoint && <Form />}
    </Section>
  );
}
