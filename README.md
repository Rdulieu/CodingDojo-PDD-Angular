# PDD - Angular

# Exercice 1 : Prompting

## Objectif

L'objectif de cet exercice est de vous familiariser avec le prompting

## Consignes

Réaliser le menu d'une application en passant en paramètres la capture d'écran correspondante

![Menu screenshot](docs/navigation-screenshot.png)

# Exercice 2 : Contextualiser

## Objectif

L'objectif de cet exercice est de vous familiariser avec la notion de contexte.

## Consignes

- Ecrire des règles de prompting pour réaliser les tâches suivantes. Ces règles doivent être à la racine du projet dans un fichier `.clinerules.md`.
- Ecrire les tests de composants et d'architecture nécessaires pour spécifier et valider la réalisation du menu de l'application.
- Bonus : En vous appuyant sur ces règles réaliser le menu d'une application en passant en paramètres la capture d'écran correspondante

# Exercice 3 : Intégration d’un MCP Figma

## Objectif

L’objectif de cet exercice est de vous familiariser avec l’utilisation d’un MCP (Model Context Protocol) Figma afin d’intégrer une maquette Figma dans une application Angular. Vous allez apprendre à récupérer les informations d’une maquette Figma via l’API, à exploiter ces données dans votre code, et à générer des composants ou des styles en conséquence.

## Consignes

1. **Récupération de la maquette Figma**
  - Sélectionner une page sur la maquette Figma [fournie](https://www.figma.com/design/R2PXUfGumdTHpVzvtDqErf/Coding-Dojo?node-id=0-1&p=f&t=iZXDSXKyzkeHqOMY-0).
  - La partie importante est de bien identifier le node-id dans l'URL, c'est ce qu'utilise le MCP pour cibler la bonne maquette.

2. **Connexion au MCP Figma**
  - Configurez le MCP Figma dans votre projet Angular en suivant ce [tutoriel (Slide 7 à 14)](https://docs.google.com/presentation/d/1xDRKvRsU4qf5_v1LUQJZ4vOKC1Pt4nVbBWH9cY_CU68/edit?slide=id.g3832a25a8d6_4_0#slide=id.g3832a25a8d6_4_0).

3. **Test de la connexion**
  - Demander à Cline de décrire la maquette Figma sélectionnée à l'étape 1. Exemple : "Décris moi la maquette Figma située à l'URL suivante : [URL de la maquette avec node-id]".
  - Observer l'utilisation et la réponse du MCP Figma.

4. **Génération de code ou de styles**
  - Vous pouvez demander à Cline de générer du code Angular ou des styles CSS basés sur la maquette Figma. Par exemple : "Génère-moi le code Angular pour un composant basé sur cette maquette Figma".
  - Si le node-id correspond à trop d'éléments, vous pouvez affiner votre demande en précisant le group-id. Exemple: "Group 343"
