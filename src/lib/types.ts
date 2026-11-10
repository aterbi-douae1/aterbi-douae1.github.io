export type Lang = "fr" | "en";
export type L = Record<Lang, string>;
export type LL = Record<Lang, string[]>;
export type Shot = { src: string; caption: L; featured?: boolean };
export type Project = {
  id: string;
  group: "stage" | "academique";
  title: string;
  subtitle: L;
  period: L;
  place: L;
  role: L;
  context: L;          // mention collaboration / périmètre
  description: L;
  features: LL;
  contributions: LL;
  tech: string[];
  shots: Shot[];
  /** Captures soumises à vérification de confidentialité : non publiées tant que published=false */
  restricted?: { published: boolean; notice: L };
  demoNote?: L;
};
