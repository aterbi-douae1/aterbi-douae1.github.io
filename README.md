# Portfolio — Douae Aterbi

Site statique (HTML / CSS / JavaScript), sans framework ni étape de build. Bilingue FR/EN, 6 thèmes, responsive.

## Contenu du dossier
- `index.html` : la page
- `assets/style.css` : design et thèmes
- `assets/app.js` : textes FR/EN, logos, liens, configuration du formulaire
- `assets/photo.jpg` : ta photo (pour la changer, garde le même nom ; format carré)

## 1. Lancer en local
Dans le dossier du portfolio :
```
python -m http.server 8000
```
Puis ouvre http://localhost:8000. (Double-cliquer sur `index.html` fonctionne aussi.)

## 2. Tester
- Boutons EN / FR et menu des thèmes : le choix est mémorisé.
- Réduis la fenêtre (ou F12 puis mode mobile) pour vérifier téléphone et tablette.
- Vérifie que les trois boutons ronds s'ouvrent : e-mail, GitHub, LinkedIn.
- Teste le formulaire (voir section 3).

## 3. Activer le formulaire (gratuit)
Sans configuration, le bouton « Envoyer » ouvre l'application mail du visiteur. Pour recevoir les messages directement :
1. Crée un compte gratuit sur https://web3forms.com, saisis ton e-mail et récupère ta clé d'accès.
2. Dans `assets/app.js`, colle-la dans `web3formsKey: ''`.
(Alternative : Formspree, colle ton URL dans `formEndpoint`.)

## 4. Ajouter tes liens de projets
Dans `assets/app.js`, objet `LINKS` : renseigne `repo` (dépôt GitHub) et `demo` (démo en ligne). Les boutons n'apparaissent que si le lien est rempli.

## 5. Publier sur GitHub Pages
1. Sur GitHub, crée un dépôt **public** nommé exactement `aterbi-douae1.github.io` (ton nom d'utilisateur + `.github.io`).
2. Envoie-y tout le contenu de ce dossier (`index.html` à la racine) :
```
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/aterbi-douae1/aterbi-douae1.github.io.git
git push -u origin main
```
3. Dépôt → Settings → Pages → Source : « Deploy from a branch », branche `main`, dossier `/ (root)` → Save.
4. Après 1 à 2 minutes, le site est en ligne : https://aterbi-douae1.github.io
