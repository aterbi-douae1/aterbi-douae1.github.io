import type { Project } from "@/lib/types";

const img = (d: string, f: string) => `/images/${d}/${f}`;

export const projects: Project[] = [
  {
    id: "bp-talent-360",
    group: "stage",
    title: "BP TALENT 360",
    subtitle: { fr: "Gestion des talents — Direction des Ressources Humaines", en: "Talent management — Human Resources Department" },
    period: { fr: "Septembre – octobre 2026", en: "September – October 2026" },
    place: { fr: "Siège régional de la Banque Populaire de l’Oriental, Oujda", en: "Regional headquarters of Banque Populaire de l’Oriental, Oujda" },
    role: { fr: "Stagiaire développeuse Full-Stack — Java / Spring Boot", en: "Full-Stack Developer Intern — Java / Spring Boot" },
    context: {
      fr: "Projet réalisé en stage, au sein d’une équipe. Les contributions ci-dessous décrivent ma participation personnelle, non l’application dans son ensemble.",
      en: "Project carried out during an internship, within a team. The contributions below describe my own participation, not the application as a whole.",
    },
    description: {
      fr: "Application de gestion des talents destinée à accompagner la Direction des Ressources Humaines dans le suivi et l’analyse des campagnes d’évaluation. La solution centralise les données issues des fichiers Excel, facilite leur traitement et permet de visualiser les indicateurs liés à la performance et au potentiel des collaborateurs.",
      en: "Talent management application designed to support the Human Resources Department in tracking and analysing evaluation campaigns. It centralises data coming from Excel files, simplifies their processing and visualises indicators related to employee performance and potential.",
    },
    features: {
      fr: ["Centralisation des données RH issues de fichiers Excel", "Positionnement des talents dans la matrice 9-Box", "Identification des hauts potentiels", "Visualisation des indicateurs de performance et de potentiel"],
      en: ["Centralisation of HR data coming from Excel files", "Talent positioning in the 9-Box matrix", "Identification of high-potential employees", "Visualisation of performance and potential indicators"],
    },
    contributions: {
      fr: [
        "Conception et participation à la structuration du modèle de données.",
        "Développement de mécanismes d’importation, de lecture et de validation de fichiers Excel avec Apache POI.",
        "Mise en place de la persistance des données avec JPA/Hibernate et MySQL.",
        "Participation au traitement des scores de performance et de potentiel avec Python.",
        "Contribution au positionnement des talents dans la matrice 9-Box et à l’identification des hauts potentiels.",
        "Développement des interfaces de gestion des collaborateurs et participation à la visualisation des indicateurs RH.",
      ],
      en: [
        "Design of, and contribution to structuring, the data model.",
        "Development of Excel import, reading and validation mechanisms with Apache POI.",
        "Data persistence with JPA/Hibernate and MySQL.",
        "Contribution to processing performance and potential scores with Python.",
        "Contribution to positioning talents in the 9-Box matrix and identifying high potentials.",
        "Development of employee management interfaces and contribution to the visualisation of HR indicators.",
      ],
    },
    tech: ["Java 17", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "MySQL", "Apache POI", "Python", "Thymeleaf", "HTML", "CSS", "JavaScript", "Bootstrap"],
    // Captures non publiées par défaut (voir README, section « Confidentialité BP TALENT 360 »).
    shots: [],
    restricted: {
      published: false,
      notice: {
        fr: "Les captures de ce projet proviennent d’un environnement interne de la banque. Elles ne sont pas publiées sans autorisation ; des versions anonymisées ou de démonstration pourront les remplacer.",
        en: "Screenshots of this project come from the bank’s internal environment. They are not published without authorisation; anonymised or demo versions may replace them.",
      },
    },
  },
  {
    id: "stageflow",
    group: "stage",
    title: "StageFlow",
    subtitle: { fr: "Plateforme de gestion du parcours des stagiaires", en: "Intern journey management platform" },
    period: { fr: "Juillet 2026", en: "July 2026" },
    place: { fr: "CHU Mohammed VI, Oujda", en: "CHU Mohammed VI, Oujda" },
    role: { fr: "Stagiaire développeuse Full-Stack Java", en: "Full-Stack Java Developer Intern" },
    context: {
      fr: "Projet réalisé en collaboration, et non développé seule.",
      en: "Project carried out collaboratively, not developed alone.",
    },
    description: {
      fr: "Plateforme web de gestion du parcours des stagiaires, conçue pour structurer et faciliter le suivi administratif, depuis les demandes de stage jusqu’à la gestion des affectations, des présences et des évaluations, avec génération des attestations.",
      en: "Web platform managing the interns’ journey, designed to structure and simplify administrative follow-up, from internship requests to assignments, attendance and evaluations, including the generation of certificates.",
    },
    features: {
      fr: ["Gestion des utilisateurs et des stagiaires", "Gestion des encadrants et des affectations", "Suivi des présences et des évaluations", "Génération d’attestations PDF"],
      en: ["User and intern management", "Supervisor and assignment management", "Attendance and evaluation tracking", "PDF certificate generation"],
    },
    contributions: {
      fr: [
        "Participation au développement des modules de gestion des utilisateurs et des stagiaires.",
        "Contribution aux fonctionnalités de gestion des encadrants et des affectations.",
        "Participation au suivi des présences et des évaluations.",
        "Contribution à la génération des attestations PDF avec OpenPDF.",
        "Participation à l’intégration des interfaces et à la sécurisation des fonctionnalités.",
      ],
      en: [
        "Contribution to the user and intern management modules.",
        "Contribution to supervisor and assignment management features.",
        "Contribution to attendance and evaluation tracking.",
        "Contribution to PDF certificate generation with OpenPDF.",
        "Contribution to interface integration and feature security.",
      ],
    },
    tech: ["Java 21", "Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security", "Thymeleaf", "Bootstrap", "MySQL", "OpenPDF"],
    shots: [
      { src: img("stageflow", "tableau-de-bord.png"), featured: true, caption: { fr: "Tableau de bord de la plateforme", en: "Platform dashboard" } },
      { src: img("stageflow", "encadrants.png"), featured: true, caption: { fr: "Gestion des encadrants", en: "Supervisor management" } },
      { src: img("stageflow", "fiche-stagiaire.png"), caption: { fr: "Fiche d’un stagiaire", en: "Intern record" } },
      { src: img("stageflow", "connexion.png"), caption: { fr: "Page de connexion", en: "Login page" } },
    ],
  },
  {
    id: "chafaf",
    group: "stage",
    title: "CHAFAF",
    subtitle: { fr: "Gestion des dons, événements et signalements pour les mosquées", en: "Donations, events and reports management for mosques" },
    period: { fr: "Juillet – septembre 2025", en: "July – September 2025" },
    place: { fr: "Seomaniak, Oujda", en: "Seomaniak, Oujda" },
    role: { fr: "Stagiaire développeuse Full-Stack — Laravel", en: "Full-Stack Developer Intern — Laravel" },
    context: {
      fr: "Projet mené en équipe, avec GitHub et des méthodes Agile.",
      en: "Team project, using GitHub and Agile methods.",
    },
    description: {
      fr: "Plateforme web destinée à faciliter la gestion des dons, des événements et des signalements liés aux mosquées. Le projet vise à centraliser les interactions et les opérations de gestion dans une interface structurée et accessible.",
      en: "Web platform designed to simplify the management of donations, events and reports related to mosques. The project aims to centralise interactions and management operations in a structured, accessible interface.",
    },
    features: {
      fr: ["Gestion des dons, des mosquées et des signalements", "Interfaces dynamiques et API REST", "Notifications et messagerie", "Espace de gestion des utilisateurs et de leurs rôles"],
      en: ["Management of donations, mosques and reports", "Dynamic interfaces and REST APIs", "Notifications and messaging", "User and role management area"],
    },
    contributions: {
      fr: [
        "Développement de fonctionnalités backend liées à la gestion des dons, des mosquées et des signalements.",
        "Intégration d’API REST.",
        "Création d’interfaces dynamiques.",
        "Participation aux fonctionnalités de notification et de messagerie.",
        "Travail collaboratif avec GitHub et méthodes Agile.",
      ],
      en: [
        "Development of backend features for managing donations, mosques and reports.",
        "REST API integration.",
        "Creation of dynamic interfaces.",
        "Contribution to notification and messaging features.",
        "Collaborative work with GitHub and Agile methods.",
      ],
    },
    tech: ["PHP", "Laravel", "Blade", "Tailwind CSS"],
    shots: [
      { src: img("chafaf", "gestion-utilisateurs.png"), featured: true, caption: { fr: "Gestion des utilisateurs et de leurs rôles", en: "User and role management" } },
      { src: img("chafaf", "connexion.png"), featured: true, caption: { fr: "Page de connexion", en: "Login page" } },
      { src: img("chafaf", "inscription.png"), caption: { fr: "Formulaire d’inscription", en: "Registration form" } },
    ],
    demoNote: {
      fr: "Les noms, e-mails et numéros visibles dans les captures sont des données fictives créées pour les exemples.",
      en: "Names, e-mails and numbers visible in the screenshots are fictitious data created for demonstration.",
    },
  },
  {
    id: "smarttraffic",
    group: "academique",
    title: "SmartTraffic Morocco",
    subtitle: { fr: "Gestion intelligente du trafic urbain", en: "Intelligent urban traffic management" },
    period: { fr: "2025–2026", en: "2025–2026" },
    place: { fr: "Projet de fin d’année de 4ᵉ année, EHEIM Oujda", en: "4th-year end-of-year project, EHEIM Oujda" },
    role: { fr: "Projet académique", en: "Academic project" },
    context: { fr: "Projet académique de fin d’année de 4ᵉ année.", en: "4th-year end-of-year academic project." },
    description: {
      fr: "Solution intelligente de gestion du trafic urbain visant à analyser les conditions de circulation, détecter les zones de congestion et contribuer à l’optimisation des déplacements. Le système prévoit notamment l’adaptation du fonctionnement des feux de circulation et la proposition d’itinéraires alternatifs, à partir de flux de données en temps réel (Kafka) et d’un backend Spring Boot.",
      en: "Intelligent urban traffic management solution aiming to analyse traffic conditions, detect congested areas and help optimise travel. The system notably plans to adapt traffic light operation and suggest alternative routes, based on real-time data streams (Kafka) and a Spring Boot backend.",
    },
    features: {
      fr: ["Analyse et visualisation des données de trafic", "Suivi des zones congestionnées", "Gestion des feux de circulation", "Visualisation des incidents et des itinéraires"],
      en: ["Traffic data analysis and visualisation", "Tracking of congested areas", "Traffic light management", "Visualisation of incidents and routes"],
    },
    contributions: { fr: [], en: [] },
    tech: ["Spring Boot", "PostgreSQL", "Kafka"],
    shots: [
      { src: img("smarttraffic", "tableau-de-bord.png"), featured: true, caption: { fr: "Tableau de bord du trafic", en: "Traffic dashboard" } },
      { src: img("smarttraffic", "gestion-feux.png"), featured: true, caption: { fr: "Gestion des feux de circulation", en: "Traffic light management" } },
      { src: img("smarttraffic", "incidents.png"), caption: { fr: "Suivi des incidents", en: "Incident tracking" } },
      { src: img("smarttraffic", "rapport.png"), caption: { fr: "Écran de génération de rapports", en: "Report generation screen" } },
    ],
    demoNote: {
      fr: "Les localisations et données visibles dans les captures sont fictives.",
      en: "Locations and data visible in the screenshots are fictitious.",
    },
  },
  {
    id: "trotty",
    group: "academique",
    title: "TROTTY",
    subtitle: { fr: "Gestion de trottinettes électriques", en: "Electric scooter management" },
    period: { fr: "2024–2025", en: "2024–2025" },
    place: { fr: "Projet de synthèse de 3ᵉ année, EHEIM Oujda", en: "3rd-year synthesis project, EHEIM Oujda" },
    role: { fr: "Projet académique de synthèse", en: "Academic synthesis project" },
    context: { fr: "Projet académique de synthèse de 3ᵉ année.", en: "3rd-year academic synthesis project." },
    description: {
      fr: "Application de gestion dédiée à la location et au suivi d’un parc de trottinettes électriques. Elle couvre plusieurs opérations de gestion, notamment les clients, les contrats, les commandes, les stocks et la facturation.",
      en: "Management application dedicated to renting and tracking a fleet of electric scooters. It covers several management operations, including customers, contracts, orders, stock and invoicing.",
    },
    features: {
      fr: ["Gestion des clients, des contrats et des commandes", "Gestion des stocks et de la facturation", "Suivi des opérations de location", "Catalogues d’achat, de location et de pièces détachées"],
      en: ["Customer, contract and order management", "Stock and invoicing management", "Rental operations tracking", "Catalogues for sale, rental and spare parts"],
    },
    contributions: {
      fr: ["Analyse des besoins fonctionnels.", "Conception de la base de données avec UML et Merise.", "Participation au développement des principaux modules de gestion.", "Structuration des fonctionnalités liées aux opérations de location et de suivi."],
      en: ["Functional requirements analysis.", "Database design with UML and Merise.", "Contribution to developing the main management modules.", "Structuring of the features related to rental and tracking operations."],
    },
    tech: ["Java", "PHP", "C++", "MySQL"],
    shots: [
      { src: img("trotty", "accueil.png"), featured: true, caption: { fr: "Page d’accueil", en: "Home page" } },
      { src: img("trotty", "catalogue-location.png"), featured: true, caption: { fr: "Catalogue de location", en: "Rental catalogue" } },
      { src: img("trotty", "catalogue-vente.png"), caption: { fr: "Catalogue de vente", en: "Sales catalogue" } },
      { src: img("trotty", "pieces-detachees.png"), caption: { fr: "Pièces détachées", en: "Spare parts" } },
    ],
  },
];

export const sathtern = [
  {
    id: "text-summarizer",
    title: "Text Summarizer",
    description: {
      fr: "Application de résumé automatique de textes développée avec Python et Streamlit. Elle s’appuie sur des modèles de langage pré-entraînés de la famille T5 / mT5, utilisés via Hugging Face Transformers et PyTorch, pour produire des résumés synthétiques à partir de textes fournis.",
      en: "Automatic text summarisation application built with Python and Streamlit. It relies on pre-trained language models from the T5 / mT5 family, used through Hugging Face Transformers and PyTorch, to produce concise summaries from provided texts.",
    },
    tech: ["Python", "Streamlit", "Hugging Face Transformers", "PyTorch"],
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    description: {
      fr: "Application conversationnelle développée avec Python et Streamlit, intégrant l’API Groq pour générer des réponses et conserver le contexte des échanges grâce à une mémoire conversationnelle.",
      en: "Conversational application built with Python and Streamlit, integrating the Groq API to generate answers and keep the context of exchanges through conversational memory.",
    },
    tech: ["Python", "Streamlit", "Groq API"],
  },
];

export const certifications = [
  { id: "sathtern", title: "Virtual Internship Program — Artificial Intelligence (AI) & ML", issuer: "Sathtern", date: { fr: "Septembre 2026", en: "September 2026" }, src: "/images/certifications/sathtern.png" },
  { id: "datacom", title: "Partnering with AI in the Workplace Job Simulation", issuer: "Datacom (Forage)", date: { fr: "Août 2026", en: "August 2026" }, src: "/images/certifications/datacom-forage.png" },
  { id: "ibm-genai", title: "Generative AI Essentials: Using LLMs to Work with Data", issuer: "IBM SkillsBuild", date: { fr: "Août 2026", en: "August 2026" }, src: "/images/certifications/ibm-generative-ai.png" },
  { id: "ibm-fund", title: "AI Fundamentals: Foundations for Understanding AI", issuer: "IBM SkillsBuild", date: { fr: "Août 2026", en: "August 2026" }, src: "/images/certifications/ibm-ai-fundamentals.png" },
];

export const skills: { title: { fr: string; en: string }; items: string[] }[] = [
  { title: { fr: "Langages", en: "Languages" }, items: ["Java", "Python", "JavaScript", "PHP", "C", "C++"] },
  { title: { fr: "Développement web et frameworks", en: "Web development & frameworks" }, items: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Spring Boot", "Laravel", "Thymeleaf"] },
  { title: { fr: "Bases de données", en: "Databases" }, items: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"] },
  { title: { fr: "IA et Data", en: "AI & Data" }, items: ["NumPy", "Pandas", "Notions de Machine Learning", "IA générative", "LLM", "Prompt Engineering"] },
  { title: { fr: "Outils et méthodes", en: "Tools & methods" }, items: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Eclipse", "Postman", "UML", "Merise", "MVC", "Scrum"] },
];
