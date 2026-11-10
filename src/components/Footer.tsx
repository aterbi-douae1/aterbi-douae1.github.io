"use client";
import { useSite } from "./Providers";
import { ui } from "@/content/ui";
export default function Footer() {
  const { lang } = useSite();
  return <footer className="border-t border-line px-5 py-8 text-center text-sm text-muted">{ui.footer[lang]}</footer>;
}
