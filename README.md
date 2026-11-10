# Portfolio — Douae Aterbi

Next.js 14 (export statique) · React · TypeScript · Tailwind CSS · Framer Motion · Lucide.
Site 100 % statique, compatible GitHub Pages (dépôt utilisateur `aterbi-douae1.github.io`, sans `basePath`).

## Lancer en local
```bash
npm install
npm run dev        # http://localhost:3000
```

## Build et vérification
```bash
npm run build      # génère le dossier out/
node scripts/verify.mjs   # ancres, images, traductions, mentions interdites
npx serve out      # aperçu du site final
```

## Publier sur GitHub Pages
Ton ancien dépôt n'est jamais touché tant que tu ne le décides pas.
1. **Examiner d'abord** : `npm run build && npx serve out` (ou `npm run dev`) — le site s'ouvre à la racine, comme sur `aterbi-douae1.github.io`.
2. **Remplacer l'ancien site** : fais une copie de sauvegarde de l'ancien dépôt (ou crée une branche `ancien-site`), puis place ce projet à la racine du dépôt `aterbi-douae1.github.io` et pousse sur `main`.
3. *Settings → Pages → Build and deployment → Source : GitHub Actions*. Le workflow `.github/workflows/deploy.yml` construit et publie automatiquement.

> Les chemins d'images sont absolus (`/images/...`) : le site doit être servi à la racine d'un domaine (cas d'un dépôt utilisateur). Il ne fonctionnera pas dans un sous-dossier de type `/mon-depot/`.

## Modifier le contenu
- Textes FR/EN : `src/content/ui.ts` · Projets, certificats, compétences : `src/content/projects.ts`
- Thèmes (6) : variables dans `src/app/globals.css`, liste dans `src/content/ui.ts`
- Photo : `public/images/douae.jpg` (photo originale extraite du CV, sans retouche)

## Confidentialité BP TALENT 360
Les 2 captures sont dans `_a-verifier/bp-talent-360/` (hors `public/`) : **elles ne sont pas publiées**. Elles montrent le logo de la banque et des indicateurs internes.
Pour les publier après autorisation (ou avec des versions anonymisées) :
1. Place les images dans `public/images/bp-talent-360/`.
2. Dans `src/content/projects.ts`, projet `bp-talent-360` : renseigne `shots: [{ src: img("bp-talent-360","fichier.png"), featured: true, caption: {fr:"…",en:"…"} }]` et mets `restricted.published` à `true`.

## Formulaire de contact
Désactivé par défaut (aucun faux formulaire). Pour l'activer : crée un formulaire sur Formspree, puis définis `NEXT_PUBLIC_FORM_ENDPOINT` (variable de dépôt GitHub *Settings → Secrets and variables → Actions → Variables*, ou `.env.local`).
