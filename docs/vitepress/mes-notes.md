---
title: Mes notes
next: false
prev: false
---

# Note pour le spike

## [Config](#config)

- On peut changer le dossier des pages
- On peut exclure des fichiers... pratique pour les trucs genre readme.md lol
- A voir pour peut etre s'en servir de filer de securité mais on peut ignorer certain lien pour le build, genre tout les liens avec localhost etc -> ignoreDeadLinks
- Si on veut de la grosse opti on peut activer le mpa mode pour multipage mode, enleve tout le js des pages et donc ca load en instant (Attention c'est experimental)
-

## [Page](#page)

- Sur chaque page tu peux faire une petite partie avec des '---' pour definir la config de la page, le titre, la description tout ca tout ca
- Avec le theme par defaut tu peux avoir soit un layout doc | page | home
- Les liens entre les pages sont des chemins relatifs

## [Misc](#misc):

- Tout le css est customisable
- L'ordre des pages dans la sidebar defini le Next page dans le footer
- L'ordre des sides bar c'est comme un router genre ca prend le premier qui match avec l'url
- Le markdown prend les tag html donc on peut foutre des iframes vers storynoob
- Tout les sites de vite, useVue, pinia etc sont fait avec Vitepress et comme tout ca c'est open source on peut allez sucer leur code si on veut copier une page ou autre hehehehe

## [Idee la comme ca](#idee):

- On pourrait utiliser les features pour lister les composants et les rendres cliquable et ca redirige sur la page du composant (layout home)
