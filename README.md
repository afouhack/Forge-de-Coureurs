# Forge de Coureurs

Création rapide de personnages pour le jeu de rôle **Coureurs d'Orages** (Islayre d'Argolh), avec :

- quatorze thèmes (fantasy, Moyen Âge, pirates, western, contemporain, post-apocalypse, cyberpunk, science-fiction, space opera, préhistoire, Antiquité, années 1920, uchronie 1960, steampunk) ;
- aspects, armes, équipement, dons et sorts au choix, ou inventés ;
- points de vie et bonus calculés selon les règles du livre ;
- fiche en PDF remplissable : A4 sur une seule page, A4 ou A5 recto-verso, ou carte postale, avec la photo de ton choix ;
- feuille de jeu sur téléphone : PV, dés d'héroïsme, jets, dégâts, sorts, dons en jeu, passage de niveau ;
- coureurs enregistrés sur l'appareil, à rejouer ou à modifier depuis l'accueil, y compris en cours de partie (armes, armure, nom) ;
- export et import d'un coureur (fichier ou code) pour passer du téléphone à l'ordinateur et inversement.

Tout tient dans `index.html`. Les personnages, les photos et les choix personnels sont enregistrés dans le navigateur de chaque appareil (rien n'est envoyé sur un serveur).

## Mettre en ligne avec GitHub Pages

1. Crée un dépôt sur GitHub (par exemple `forge-de-coureurs`).
2. Dépose tout le contenu de ce dossier à la racine du dépôt (`index.html`, `pdf-lib.min.js`, `manifest.webmanifest`, les icônes, `.nojekyll`).
3. Dans le dépôt : **Settings → Pages → Build and deployment**, source **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
4. Après une minute, le site est disponible à `https://TON-PSEUDO.github.io/forge-de-coureurs/`.

Sur téléphone, « Ajouter à l'écran d'accueil » donne une icône comme une application.

## Crédits

- Coureurs d'Orages : jeu d'Islayre d'Argolh, illustrations et mise en page de John Grümph. Les textes de règles cités ici sont des résumés ; le jeu complet se trouve dans le livre.
- Bibliothèque PDF : [pdf-lib](https://pdf-lib.js.org) 1.17.1, incluse dans le dossier (licence MIT, voir `LICENCE-pdf-lib.md`). Polices : Google Fonts.
