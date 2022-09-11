# Projet Affiche
---
<br>
<img src="logo.svg">
<br>
<br>

## Objectifs

- Prendre en main une architecture de projet se rapprochant de la réalité que vous verrez en entreprise
- Retour sur HTML/CSS/SASS
- Approfondissement des connaissances JS vues jusqu'à présent
- Expérimentation des animations en CSS et en JS, pouvant être agrémentée d'une librairie externe en JS

## Contexte

La promotion Concepteur Designer UI (CDUI) a conçu des affiches pour un événement fictif. Les développeurs ont chacun choisit une affiche pour leur faire prendre vie en HTML/CSS et en utilisant JavaScript pour ajouter du dynamisme et de l'interaction.

## Les starters

Pour vous aider, j'ai créé plusieurs dossiers starter suivant quelles technologies vous souhaitez utiliser dans votre projet.
Sachant que SASS est installé dans tous les projets.
Un README se trouve dans chaque starter pour démarrer le projet.

- **basic-starter**: Faire du HTML/CSS/JS
- **gsap-starter**: Faire du HTML/CSS/JS agrémenté de la librairie GSAP pour faire de l'animation
- **jquery-starter**: Faire du HTML/CSS/JS agrémenté de la librairie jQuery pour faire de l'animation
- **threejs-starter**: Faire du HTML/CSS/JS agrémenté de la librairie Three.js pour faire de l'animation (notamment 3D)

## Récupérer le projet

3 solutions s'offrent à vous. 
En effet, étant donné que vous allez récupérer le projet de mon GitHub personnel, si vous voulez enregistrer vos modifications sur votre GitHub vous allez avoir un soucis vu que le projet sera relié à mon compte GitHub ! 

<br>

**Méthode 1 :**

1. En local, se placer dans le dossier de travail voulu (par exemple un dossier `Projets`)
2. Ouvrir un bash git dans ce dossier
3. Rentrer la commande `git clone https://github.com/ClementBallet/projet-affiche-dwwm.git`
4. Vous avez récupéré le projet... mais celui-ci est toujours relié à mon dépôt GitHub !
5. Sur GitHub.com créer un nouveau repository sans rien dedans
6. En local dans le dossier `Projets`, ouvrir un bash git dans ce dossier et rentrer la commande `git clone` suivi de l'URL du repository que vous venez de créer
7. Vous venez de récupérer le projet sur lequel vous allez pouvoir travailler. En soit, vous pouvez commencer à travailler from scratch mais je vous ai aidé avec des starters
8. Revenir dans le dossier `projet-affiche-dwwm` (le mien, pas le votre), choisir le dossier starter qui vous convient et copier les fichiers et dossiers qu'il contient
9. Coller tout ça dans votre nouveau dépôt que vous venez de cloner
10. Voilà maintenant vous pouvez travailler et faire des commit sur votre propre dépôt git !

<br>

**Méthode 2 (fork du projet) :**

> Un fork est une copie d'un projet à un instant T sur laquelle on pourra travailler sans affecter le projet initial. L'action de fork vient créer un nouveau repository (ou dépôt) dans votre compte GitHub avec tout le contenu du repository que vous avez fork.
> *Lien utile : https://git-scm.com/book/fr/v2/GitHub-Contribution-%C3%A0-un-projet*

1. Sur ce dépôt distant, en haut à droite cliquer sur le bouton fork
2. Cliquer sur `Create a new fork`
3. Il devrait vous renvoyer sur une page où vous pouvez éventuellement changer le nom du dépôt
4. Cliquer sur `Create fork`, vous avez maintenant fait une copie de mon dépôt sur votre compte GitHub
5. En local dans votre dossier `Projets`, ouvrir un bash git et rentrer la commande `git clone` suivi de l'URL du repository que vous venez de fork (celui sur votre compte, pas le dépôt initial que j'ai créé)
6. Voilà maintenant vous pouvez travailler et faire des commit de votre travail !

<br>

**Méthode 3 (changement du git remote) :**

1. En local, se placer dans le dossier de travail voulu (par exemple un dossier `Projets`)
2. Ouvrir un bash git dans ce dossier
3. Rentrer la commande `git clone https://github.com/ClementBallet/projet-affiche-dwwm.git`
4. Vous avez récupéré le projet... mais celui-ci est toujours relié à mon dépôt GitHub !
5. On va donc changer la liaison avec le dépôt distant. Dans le bash git, aller dans le dossier `projet-affiche-dwwm` à l'aide de la commande `cd`
6. Avec la commande `git remote -v`, on peut voir l'URL du dépôt Git distant. 
7. C'est cette URL que l'on va modifier et on va tout d'abord l'effacer avec la commande `git remote rm origin`. `rm` voulant dire "remove".
8. Sur GitHub.com créer un nouveau repository sans rien dedans et copier son URL
9. Votre dépôt local n'est plus lié avec un dépôt distant. Il faut donc faire un `git remote add origin` suivi de l'URL du dépôt nouvellement créé sur votre compte GitHub à l'étape précédente.
10. Transférer le contenu du dépôt local sur le nouveau dépôt distant avec la commande `git push origin master` (Attention : la branche `master` peut parfois s'appeler `main`, bien vérifier dans le bash git le nom de la branche)

> *Lien complémentaire : https://www.kitpages.fr/fr/cms/155/changement-de-remote-git*

## Déroulement du projet

- Structurer sa page HTML
- Placer les éléments en CSS/SASS dans le container imposé
- Implémenter les animations voulues en CSS/SASS et JS

Vous avez carte blanche pour le choix des animations : faites-vous plaisir avant tout !

Pour le JS, plusieurs solutions s'offrent à vous et se fera aussi suivant la technologie que vous allez choisir : 
- soit faire la plupart des animations en CSS et faire de l'ajout de classes CSS en JS avec `elementHTML.classList.add()`
- soit partir sur du full JS
- on peut envisager à un mélange des 2 solutions précédentes

Dans tous les cas, il faudra veiller à la structure du code.

> Ne pas hésiter à communiquer entre vous (Slack, Discord, visio...) et avec votre graphiste. Faire des points réguliers avec lui/elle vous permettra de voir si il/elle peut vous apporter un avis extérieur et savoir si vous allez dans la bonne direction.

## Exemples d'animations et tutoriels

- https://fr.javascript.info/js-animation
- https://developer.mozilla.org/fr/docs/Web/API/Canvas_API/Tutorial/Basic_animations
- https://www.barbuduweb.com/16-facons-animer-textes-css3-javascript/
- https://freefrontend.com/css-animation-examples/
- https://blog.hubspot.fr/website/animation-css
- https://web-eau.net/blog/15-animations-css-vraiment-bluffantes
- https://webdesign.tutsplus.com/fr/articles/10-examples-of-animation-on-codepen-you-can-learn-from--cms-28244
- https://www.webdesignertrends.com/2019/01/effets-javascript-css-animations/

## Bonus

- Refaire le logo du musée en HTML/CSS