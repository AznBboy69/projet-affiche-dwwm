# Projet Affiche - jQuery Starter
---
## Contexte

Vous voulez travailler avec les technos suivantes :
- HTML
- CSS
- SASS
- JS
- jQuery
- jQuery UI

## Installation

1. Récupérer le projet via l'une des méthodes du tuto du README global
2. Dans le dossier `jquery-starter` (ou tout autre nom si vous l'avez modifié), ouvrir un terminal et rentrer la commande `npm install`. Cela aura pour effet d'installer tous les packages externes utiles au projet. Ici nous installons les modules SASS, jQuery et jQueryUI, d'ailleurs on peut le voir dans le `package.json` (à part si vous comprenez ce que vous faites, merci de ne pas modifier ce fichier).
> ATTENTION : dans notre cas, `npm install` se lance une seule fois pour installer une bonne fois pour toute tous les modules. Vous n'avez pas a relancer la commande tous les matins en rouvrant le projet. 
3. Toujours dans le terminal, lancer la commande `npm run watch-sass`. Si on va voir dans le `package.json`, on peut voir que cette commande est un alias pour la commande `node-sass styles/scss/main.scss styles/css/main.css --watch`, je pense que cela devrait vous rappeler quelque chose !
4. Vous pouvez à présent écrire du code SCSS ! Mais veillez bien à garder le terminal ouvert avec la commande `npm run watch-sass` sinon...
> ATTENTION : l'endroit où vous codez est le dossier `styles/scss/`. Le dossier `styles/css/` est le dossier de compilation final que le navigateur pourra lire. D'ailleurs, si on va voir dans le fichier `index.html`, on peut voir qu'il pointe vers le fichier CSS dans `styles/css/`.
5. On peut aussi écrire à présent du code jQuery et jQueryUI. Pour cela, aller dans `scripts/main.js`. On peut éventuellement créer d'autres fichiers JS pour structurer notre code mais il faudra bien prendre garde à ajouter la source dans `index.html` à l'aide de la balise `<script src=""></script>`

## Documentation officielle

jQuery : 
- https://api.jquery.com/

jQuery UI :
- https://jqueryui.com/
- des démos ici : https://jqueryui.com/demos/

## Les tutos et formations

- https://openclassrooms.com/fr/courses/3504441-introduction-a-jquery
- https://www.w3schools.com/jquery/default.asp
- https://grafikart.fr/tutoriels/jquery