import { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: 16,
    title: "WealthHealth",
    date: "10/2024",
    technologies: ["HTML", "CSS", "TailwindCSS", "React", "Redux"],
    category: "",
    description:
      "WealthHealth est un projet réalisé dans le cadre d'un bootcamp pour moderniser une application interne de gestion des dossiers employés, appelée HRnet. L'objectif principal était de convertir l'application existante, développée avec jQuery, en une version utilisant React, tout en améliorant ses performances, son accessibilité, et son apparence. Ce projet a permis d’illustrer la transition d’une technologie obsolète vers une pile technologique moderne et performante, en répondant aux problématiques d’ergonomie et de stabilité rencontrées par les utilisateurs.",
    url: "https://wealth-health.sandrinealcazar.ovh",
    image: "/images/wealth-health.png",
    github: "https://github.com/Vanda89/WealthHealth",
  },

  {
    id: 15,
    title: "ArgentBank",
    date: "08/2024",
    technologies: ["HTML", "CSS", "TailwindCSS", "React", "Redux", "Swagger"],
    category: "",
    description:
      "Argent Bank est une application bancaire en ligne développée pour répondre aux besoins d'une banque en pleine expansion. Ce projet avait pour objectif principal de permettre aux utilisateurs de gérer leurs comptes bancaires de manière sécurisée et efficace via une interface moderne et responsive. Les tâches réalisées incluaient la mise en place d'un système d'authentification pour que les utilisateurs puissent se connecter, se déconnecter et accéder uniquement à leurs données personnelles. La création d'une interface intuitive pour la gestion des profils et des comptes utilisateurs. La spécification des endpoints API nécessaires pour une éventuelle extension permettant la gestion des transactions (visualisation, modification et suppression).",
    url: "https://argentbank.sandrinealcazar.ovh/",
    image: "/images/argentbank.png",
    github: "https://github.com/Vanda89/ArgentBank",
  },

  {
    id: 14,
    title: "SportSee",
    date: "07/2024",
    technologies: ["HTML", "CSS", "React", "Recharts", "Axios"],
    category: "",
    description:
      "SportSee est une application web en React centrée sur un tableau de bord analytique interactif et visuellement attrayant. Ce projet a pour but d’améliorer la présentation des données sportives en utilisant des bibliothèques graphiques avancées et une API backend. une startup spécialisée dans le coaching sportif, souhaite améliorer l'expérience utilisateur en lançant une nouvelle version de la page de profil. Cette refonte permet aux utilisateurs de suivre leurs performances sportives à travers des indicateurs visuels tels que le nombre de sessions réalisées et les calories brûlées. ",
    url: "https://sportsee.sandrinealcazar.ovh",
    image: "/images/sportsee.png",
    github: "https://github.com/Vanda89/SportSee",
  },
  {
    id: 13,
    title: "Kasa",
    date: "06/2024",
    technologies: ["HTML", "CSS", "React", "React Router"],
    category: "",
    description:
      "Kasa est une plateforme React dédiée à la location de logements entre particuliers. Ce projet a pour objectif de développer une interface utilisateur moderne, ergonomique et responsive, permettant aux utilisateurs de parcourir les annonces, consulter les informations détaillées des logements sur des pages dynamiques générées à partir des données de l'API, et interagir avec des fonctionnalités essentielles, telles que la gestion des galeries photo, des évaluations et des descriptions.",
    url: "https://kasa.sandrinealcazar.ovh",
    image: "/images/kasa.png",
    github: "https://github.com/Vanda89/Kasa",
  },
  {
    id: 12,
    title: "Learn@home",
    date: "04/2024",
    technologies: ["Figma", "Notion", "Draw.io"],
    category: "",
    description:
      "Learn@Home est un projet visant à définir les besoins pour une plateforme de soutien scolaire. Ce projet a consisté à créer des maquettes sous Figma, des user stories, des diagrammes de cas d'usage et un tableau Kanban pour structurer le développement d'une application facilitant la mise en relation entre enfants en difficulté scolaire et tuteurs bénévoles. Les fonctionnalités principales incluent la gestion du chat, du calendrier, des tâches et du tableau de bord, avec des maquettes réalisées pour chaque page clé de l'application.",
    url: "https://www.figma.com/design/AjDV7imr4r4IGSE1fYwhEI/Learn%40home?node-id=0-1&m=dev&t=uA6sl25XH8Kfg5Nh-1",
    image: "/images/learn@home.png",
    github: "https://github.com/Vanda89/Learn-home",
  },
  {
    id: 11,
    title: "Billed",
    date: "03/2024",
    technologies: [
      "JavaScript",
      "Chrome Debugger",
      "Notion",
      "Plans de test End-to-End",
    ],
    category: "",
    description:
      "Billed est une mission de renfort sur la fonctionnalité \"Note de frais\" au sein d'une entreprise SaaS pour les équipes RH. Mon rôle était de tester et de débugger le parcours Employé en suivant un plan de tests End-to-End, de corriger les bugs identifiés dans le Kanban, et de finaliser les tests pour garantir la fiabilité du système. J'ai également assisté à la correction des bugs du parcours Administrateur RH pour assurer la stabilité de la fonctionnalité avant la présentation de la solution à l'entreprise.",
    url: "https://billed.sandrinealcazar.ovh/",
    image: "/images/billed.png",
    github: "https://github.com/Vanda89/BilledApp",
  },

  {
    id: 10,
    title: "Lespetitsplats",
    date: "02/2024",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "",
    description:
      "Les Petits Plats est une application web permettant aux utilisateurs de rechercher des recettes de manière rapide et intuitive grâce à des filtres dynamiques (ingrédients, appareils, ustensiles) et un champ de recherche optimisé. Ce projet, développé entièrement en JavaScript pur avec HTML et CSS, se concentre sur la création d'algorithmes performants pour gérer efficacement les recherches (filtrage avancé, gestion des tags et des mots-clés) et offrir une expérience fluide, même avec une base de données importante.",
    url: "https://lespetitsplats.sandrinealcazar.ovh",
    image: "/images/les_petits_plats.png",
    github: "https://github.com/Vanda89/Lespetitsplats",
  },

  {
    id: 9,
    title: "FishEye",
    date: "01/2024",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "",
    description:
      "FishEye est une plateforme dédiée à la photographie, permettant aux utilisateurs d'explorer les portfolios de photographes professionnels. Le projet met l'accent sur l'accessibilité et propose des fonctionnalités telles qu'un tri des médias par popularité, date ou titre, une visionneuse interactive pour naviguer dans les galeries, et un formulaire de contact fonctionnel. Développé avec HTML, CSS et JavaScript, FishEye offre une expérience utilisateur fluide et accessible à tous.",
    url: "https://fisheye.sandrinealcazar.ovh",
    image: "/images/fisheye.png",
    github: "https://github.com/Vanda89/Fisheye",
  },
  {
    id: 8,
    title: "GameOn",
    date: "11/2023",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "",
    description:
      "GameOn est une plateforme dédiée à la gestion des inscriptions pour des tournois de jeux vidéo. Ce projet a consisté à finaliser et optimiser un formulaire d'inscription déjà partiellement développé par un ancien employé. Les tâches réalisées incluent l'implémentation de fonctionnalités JavaScript manquantes, l'analyse et l'amélioration du code existant, ainsi que la validation des entrées utilisateur. Le projet a également impliqué des tests manuels pour garantir une compatibilité responsive et une documentation détaillée par des commentaires pour faciliter la compréhension et la maintenance du code. ",
    url: "https://gameon.sandrinealcazar.ovh",
    image: "/images/gameon.png",
    github: "https://github.com/Vanda89/GameOn",
  },
  {
    id: 7,
    title: "OhmyFood",
    date: "10/2023",
    technologies: ["HTML", "CSS", "SCSS"],
    category: "",
    description:
      "OhMyFood est une application web statique mettant en avant des menus de restaurants gastronomiques. Le projet avait pour objectif de développer une interface utilisateur responsive et interactive, mettant l'accent sur une expérience visuelle moderne. Il a impliqué la création de pages statiques présentant les menus, avec des animations CSS personnalisées pour améliorer l'engagement utilisateur.",
    url: "https://ohmyfood.sandrinealcazar.ovh",
    image: "/images/ohmyfood.png",
    github: "https://github.com/Vanda89/ohmyfood",
  },

  {
    id: 6,
    title: "Booki",
    date: "09/2023",
    technologies: ["HTML", "CSS"],
    category: "",
    description:
      "Booki est un projet de site web statique visant à permettre aux utilisateurs de rechercher des hébergements et des activités touristiques selon leur destination. Le projet avait pour objectif de concevoir une interface moderne, responsive et accessible, avec une mise en page soignée conforme aux maquettes fournies.",
    url: "https://booki.sandrinealcazar.ovh",
    image: "/images/booki.png",
    github: "https://github.com/Vanda89/Booki",
  },
  {
    id: 5,
    title: "L'univers Fabuleux",
    date: "08/2018",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "jquery"],
    category: "",
    description:
      "L'univers Fabuleux est un site de jeux pour enfants en mobile first avec espace personnel personnalisable. L'objectif étant d'utiliser toutes les technologies et connaissances abordées pendant la formation afin de créer un site web réactif et cohérent graphiquement.",
    url: "https://univers-fabuleux.sandrinealcazar.ovh",
    image: "/images/univers-fabuleux.png",
    github: "https://github.com/Vanda89/Univers_Fabuleux",
  },
  {
    id: 4,
    title: "Blog de Jean Forteroche",
    date: "06/2018",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    category: "",
    description:
      "Développement d'un blog pour un écrivain avec intégration d'un système de CRUD pour la partie admin, afin qu'il puisse gérer ses articles ; et pour la partie user, afin que les utilisateurs puissent commenter les publications. Il dispose d'une structure MVC et d'une base de donnée MySQL.",
    url: "https://blog-jean-forteroche.sandrinealcazar.ovh",
    image: "/images/blog-jean-forteroche.png",
    github: "https://github.com/Vanda89/Blog_jean_forteroche",
  },
  {
    id: 3,
    title: "Velo'v Me Lyon",
    date: "05/2018",
    technologies: ["HTML", "CSS", "JavaScript", "jquery"],
    category: "",
    description:
      "Velo'v Me Lyon est une application web responsive qui permet de localiser et réserver des vélos Vélo'v à Lyon. L’objectif est de fournir aux utilisateurs une interface intuitive pour trouver les stations proches, connaître la disponibilité des vélos et des emplacements, et éventuellement réserver un vélo.",
    url: "https://velovme-lyon.sandrinealcazar.ovh/",
    image: "/images/velome-lyon.png",
    github: "https://github.com/Vanda89/Velo-v-me-Lyon",
  },
  {
    id: 2,
    title: "Strasbourg",
    date: "04/2018",
    technologies: ["Wordpress"],
    category: "",
    description:
      "Strasbourg est une version Wordpress fonctionnelle du site internet de l'Office de Tourisme de Strasbourg. Le but est de mettre en avant les atouts touristiques de la ville avec une navigation intuitive et un design attractif.",
    url: "https://strasbourg.sandrinealcazar.ovh",
    image: "/images/strasbourg.png",
    github: "https://github.com/Vanda89/Strasbourg",
  },
  {
    id: 1,
    title: "Webagency",
    date: "03/20",
    technologies: ["HTML", "CSS"],
    category: "",
    description:
      "Création d'une maquette fonctionnelle pour un site d'agence web en utilisant uniquement de l'HTML et du CSS, tout en respectant les bonnes pratiques de responsive design et d'accessibilité.",
    url: "https://webagency.sandrinealcazar.ovh",
    image: "/images/webagency.png",
    github: "https://github.com/Vanda89/Webagency",
  },
];
