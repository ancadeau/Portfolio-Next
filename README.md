
---
# [Portfolio in NextJS ](https://github.com/ancadeau/Porfolio-React)

Ce projet est mon portfolio personnel, conçu pour présenter mes compétences, mes expériences, ainsi que mes projets en tant que développeur full stack et DevOps. Ce portfolio est une application web responsive, développée avec les technologies modernes du web.

## Fonctionnalités

- **Présentation** : Une page d'accueil dynamique introduisant qui je suis et ce que je fais.
- **Typewriter Effect** : Un effet d'écriture animé pour rendre la présentation plus interactive.
- **Projets** : Une section pour visualiser mes projets récents avec une description et des liens vers les dépôts ou démonstrations.
- **Contact** : Un formulaire de contact fonctionnel pour permettre aux recruteurs et clients potentiels de me joindre.

## Technologies

- **Front-End** :
  - [Next.js](https://nextjs.org/) : Framework React pour le rendu côté serveur et le routage.
  - [Tailwind CSS](https://tailwindcss.com/) : Framework CSS utilitaire pour styliser rapidement l'interface utilisateur.
  
- **DevOps** :
  - [Docker](https://www.docker.com/) : Le projet est conteneurisé à l'aide de Docker pour faciliter le déploiement et la portabilité.
  - [Docker Compose](https://docs.docker.com/compose/) : Pour orchestrer facilement plusieurs conteneurs (si besoin) et exécuter l'application avec un environnement de développement complet.

## Installation

Suivez ces étapes pour cloner et exécuter le projet localement.

1. Clonez le projet :

    ```bash
    git clone https://github.com/ancadeau/Portfolio-Next.git
    ```

2. Accédez au dossier du projet :

    ```bash
    cd Portfolio-Next
    ```

3. Installez les dépendances :

    ```bash
    npm install
    ```

4. Démarrez le serveur de développement :

    ```bash
    npm run dev
    ```

5. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application.

## Structure du projet

Voici un aperçu de la structure des fichiers et dossiers du projet :

```
.
├── README.md
├── docker-compose.yml
└── my-portfolio
    ├── Dockerfile
    ├── app
    ├── jsconfig.json
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    ├── tailwind.config.js
    └── utils
```