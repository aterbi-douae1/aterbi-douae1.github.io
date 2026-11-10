import type { Metadata, Viewport } from "next";
import "@fontsource-variable/newsreader";
import "@fontsource-variable/instrument-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Douae Aterbi — Élève-ingénieure Génie Informatique & IA",
  description: "Portfolio de Douae Aterbi, élève-ingénieure en Génie Informatique (option IA) à l’EHEIM Oujda, à la recherche d’un stage PFE de 4 à 6 mois à partir de février 2027.",
  metadataBase: new URL("https://aterbi-douae1.github.io"),
  openGraph: { title: "Douae Aterbi — Portfolio", description: "Développement full-stack & intelligence artificielle. Stage PFE dès février 2027.", url: "https://aterbi-douae1.github.io", type: "website" },
};
export const viewport: Viewport = { themeColor: "#101B2D" };

// Applique thème et langue avant l'hydratation pour éviter tout flash.
const init = `try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);var l=localStorage.getItem('lang');if(l)document.documentElement.lang=l}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-theme="midnight" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: init }} /></head>
      <body>{children}</body>
    </html>
  );
}
