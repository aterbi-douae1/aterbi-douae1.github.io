"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import { useSite } from "./Providers";
import { ui } from "@/content/ui";

export type LightboxItem = { src: string; caption: string };

export default function Lightbox({ items, index, onClose, onIndex }: { items: LightboxItem[]; index: number | null; onClose: () => void; onIndex: (i: number) => void }) {
  const { lang } = useSite();
  const open = index !== null;
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index! + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex((index! - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = prevOverflow; };
  }, [open, index, items.length, onClose, onIndex]);

  const cur = open ? items[index!] : null;
  const btn = "absolute grid h-11 w-11 place-items-center rounded-full bg-surface/90 text-ink ring-1 ring-line hover:bg-surface";
  return (
    <AnimatePresence>
      {cur && (
        <motion.div role="dialog" aria-modal="true" aria-label={cur.caption} className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-bg/90 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} onClick={onClose}>
          <button aria-label={ui.lightbox.close[lang]} onClick={onClose} className={`${btn} right-4 top-4`}><X size={20} /></button>
          {items.length > 1 && (<>
            <button aria-label={ui.lightbox.prev[lang]} onClick={(e) => { e.stopPropagation(); onIndex((index! - 1 + items.length) % items.length); }} className={`${btn} left-3 top-1/2 -translate-y-1/2`}><ChevronLeft size={22} /></button>
            <button aria-label={ui.lightbox.next[lang]} onClick={(e) => { e.stopPropagation(); onIndex((index! + 1) % items.length); }} className={`${btn} right-3 top-1/2 -translate-y-1/2`}><ChevronRight size={22} /></button>
          </>)}
          <motion.img key={cur.src} src={cur.src} alt={cur.caption} onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.97, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.2 }}
            className="max-h-[80vh] max-w-full rounded-md bg-white object-contain shadow-2xl ring-1 ring-line" />
          <p className="mt-3 text-center text-sm text-muted" onClick={(e) => e.stopPropagation()}>{cur.caption} <span className="opacity-60">· {index! + 1}/{items.length}</span></p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
