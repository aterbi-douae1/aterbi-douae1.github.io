import type { L } from "@/lib/types";

export const site = {
  name: "Douae Aterbi",
  email: "aterbi.douae1@gmail.com",
  linkedin: "https://www.linkedin.com/in/douae-aterbi",
  github: "https://github.com/aterbi-douae1",
  cv: "/CV_Douae_Aterbi_PFE.pdf",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
};

export const themes = [
  { id: "midnight", label: { fr: "Midnight Cyan", en: "Midnight Cyan" }, swatch: ["#101B2D", "#55C8D8"] },
  { id: "clair", label: { fr: "Clair", en: "Light" }, swatch: ["#F4F7FA", "#0E7490"] },
  { id: "ardoise", label: { fr: "Ardoise", en: "Slate" }, swatch: ["#1E232B", "#94C5E0"] },
  { id: "ocean", label: { fr: "Océan", en: "Ocean" }, swatch: ["#082436", "#5ED6C4"] },
  { id: "foret", label: { fr: "Forêt", en: "Forest" }, swatch: ["#0F2420", "#8ED6A8"] },
  { id: "prune", label: { fr: "Prune", en: "Plum" }, swatch: ["#1E1830", "#BEAAF0"] },
] as const;
export type ThemeId = (typeof themes)[number]["id"];

const t = (fr: string, en: string): L => ({ fr, en });

export const ui = {
  nav: [
    { id: "accueil", label: t("Accueil", "Home") },
    { id: "a-propos", label: t("À propos", "About") },
    { id: "parcours", label: t("Parcours", "Journey") },
    { id: "projets", label: t("Projets", "Projects") },
    { id: "competences", label: t("Compétences", "Skills") },
    { id: "certifications", label: t("Certifications", "Certifications") },
    { id: "contact", label: t("Contact", "Contact") },
  ],
  hero: {
    role: t("Élève-ingénieure en Génie Informatique, option Intelligence Artificielle", "Engineering student in Computer Engineering, Artificial Intelligence track"),
    school: t("EHEIM Oujda · 5ᵉ année du cycle ingénieur", "EHEIM Oujda · 5th year of the engineering cycle"),
    headline: t("Développement full-stack et intelligence artificielle.", "Full-stack development and artificial intelligence."),
    pitch: t(
      "À la recherche d’un stage PFE de 4 à 6 mois à partir de février 2027, pour mettre mes compétences full-stack au service de projets combinant informatique et IA.",
      "Looking for a 4 to 6-month final-year internship (PFE) starting February 2027, to apply my full-stack skills to projects combining software engineering and AI."
    ),
    seeProjects: t("Voir mes projets", "See my projects"),
    contact: t("Me contacter", "Get in touch"),
    photoAlt: t("Portrait de Douae Aterbi", "Portrait of Douae Aterbi"),
  },
  about: {
    title: t("À propos", "About"),
    lead: t(
      "Élève-ingénieure en 5ᵉ année de Génie Informatique, option Intelligence Artificielle, à l’EHEIM Oujda, à la recherche d’un stage PFE de 4 à 6 mois à partir de février 2027. Dotée de compétences en développement web full-stack et en conception de systèmes logiciels, je souhaite les mettre à profit dans des projets concrets combinant informatique et intelligence artificielle.",
      "Fifth-year engineering student in Computer Engineering, Artificial Intelligence track, at EHEIM Oujda, looking for a 4 to 6-month final-year internship (PFE) starting February 2027. With skills in full-stack web development and software system design, I want to apply them to concrete projects combining computer science and artificial intelligence."
    ),
    body: t(
      "J’ai effectué trois stages en développement full-stack, en Laravel puis en Java / Spring Boot, au sein de Seomaniak, du CHU Mohammed VI et de la Banque Populaire de l’Oriental. En parallèle, je me forme à l’intelligence artificielle : programme de stage virtuel Sathtern en IA et Machine Learning, simulation Datacom, certifications IBM. Mes centres d’intérêt sont l’intelligence artificielle et la veille technologique, ainsi que le développement web et les nouvelles technologies.",
      "I have completed three full-stack development internships, first in Laravel, then in Java / Spring Boot, at Seomaniak, CHU Mohammed VI and Banque Populaire de l’Oriental. Alongside, I am building my skills in artificial intelligence: the Sathtern virtual internship in AI and Machine Learning, the Datacom simulation and IBM certifications. My interests are artificial intelligence and technology watch, as well as web development and new technologies."
    ),
    languages: t("Langues", "Languages"),
    langItems: [
      { k: t("Arabe", "Arabic"), v: t("langue maternelle", "native") },
      { k: t("Français", "French"), v: t("niveau conversationnel", "conversational") },
      { k: t("Anglais", "English"), v: t("niveau technique", "technical level") },
    ],
  },
  journey: {
    title: t("Parcours académique et stages", "Education and internships"),
    academic: t("Parcours académique", "Education"),
    internships: t("Stages réalisés", "Internships"),
    current: t("5ᵉ année en cours", "5th year in progress"),
    seeProject: t("Voir le projet", "See the project"),
    studies: [
      { when: "2024–2027", title: t("Cycle ingénieur — Génie Informatique, option IA", "Engineering cycle — Computer Engineering, AI track"), where: "EHEIM Oujda", note: true },
      { when: "2022–2024", title: t("Classes préparatoires", "Preparatory classes"), where: "EHEIM Oujda" },
      { when: "2021–2022", title: t("Baccalauréat — Sciences physiques, option internationale", "Baccalaureate — Physical sciences, international option"), where: "Lycée Hassan Dakhil, Guercif" },
    ],
  },
  projects: {
    title: t("Projets", "Projects"),
    intro: t("Projets de stage et projets académiques. Chaque fiche précise mon rôle et le cadre de réalisation.", "Internship and academic projects. Each entry states my role and the setting in which it was built."),
    internships: t("Réalisés en stage", "Built during internships"),
    academic: t("Projets académiques", "Academic projects"),
    role: t("Rôle", "Role"),
    features: t("Fonctionnalités principales", "Main features"),
    contributions: t("Mes contributions", "My contributions"),
    tech: t("Technologies", "Technologies"),
    gallery: t("Captures d’écran", "Screenshots"),
    more: t("Autres captures", "More screenshots"),
    open: t("Agrandir", "Enlarge"),
    restricted: t("Captures non publiées", "Screenshots not published"),
  },
  sathtern: {
    title: t("Projets IA — programme Sathtern", "AI projects — Sathtern programme"),
    intro: t(
      "Ces deux réalisations ont été effectuées dans le cadre du programme de stage virtuel Sathtern en Intelligence Artificielle et Machine Learning (septembre 2026). Ce ne sont pas des projets personnels indépendants.",
      "These two pieces of work were carried out as part of the Sathtern virtual internship programme in Artificial Intelligence and Machine Learning (September 2026). They are not independent personal projects."
    ),
    note: t("Les modèles de langage utilisés sont des modèles pré-entraînés.", "The language models used are pre-trained models."),
  },
  skills: { title: t("Compétences techniques", "Technical skills") },
  certs: {
    title: t("Certifications", "Certifications"),
    intro: t("Certificats originaux, non modifiés. Cliquez sur un certificat pour l’agrandir.", "Original, unaltered certificates. Click a certificate to enlarge it."),
  },
  contact: {
    title: t("Contact", "Contact"),
    lead: t("Je suis disponible pour un stage PFE de 4 à 6 mois à partir de février 2027. Le plus simple : m’écrire par e-mail.", "I am available for a 4 to 6-month final-year internship starting February 2027. The simplest way: send me an e-mail."),
    cv: t("Télécharger mon CV", "Download my CV"),
    email: t("Email", "Email"),
    form: { name: t("Nom", "Name"), email: t("Votre e-mail", "Your e-mail"), message: t("Message", "Message"), send: t("Envoyer le message", "Send message"), sending: t("Envoi…", "Sending…"), ok: t("Message envoyé. Merci !", "Message sent. Thank you!"), err: t("L’envoi a échoué. Écrivez-moi directement par e-mail.", "Sending failed. Please write to me directly by e-mail.") },
  },
  lightbox: { close: t("Fermer", "Close"), prev: t("Précédent", "Previous"), next: t("Suivant", "Next") },
  controls: { theme: t("Thème", "Theme"), lang: t("Langue", "Language"), menu: t("Menu", "Menu") },
  footer: t("Douae Aterbi — Élève-ingénieure en Génie Informatique, option IA", "Douae Aterbi — Engineering student in Computer Engineering, AI track"),
};
