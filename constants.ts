import { CVData } from './types';

export const cvData: CVData = {
  header: {
    firstName: 'Vicky',
    lastName: 'Martinez Stumpf',
    title: 'Translation & Communications Coordinator',
    tagline:
      'Professionnelle trilingue issue du textile et du culturel, passionnée par l’écriture, la traduction et le numérique. Je crée des contenus clairs et visuels en français, anglais et espagnol, en m’appuyant sur le design web et l’IA.',
    pill: 'Créativité · Détail · Retail & mode',
    contact: {
      phone: '+1 514 501 1789',
      email: 'vicky.m.stumpf@gmail.com',
      linkedin: { url: 'https://linkedin.com/in/fiorellalewfu', display: '/in/fiorellalewfu' },
      portfolio: { url: 'https://fiorellalewfu.framer.website', display: 'fiorellalewfu.framer.website' },
      location: 'Montréal, QC',
    },
  },
  profile: {
    title: 'Profil',
    description:
      'Professionnelle trilingue (FR–EN–ES) issue du secteur textile et culturel, avec une forte sensibilité visuelle et éditoriale. Expérience en création de contenus, rédaction, coordination de projets et design web. À l’aise dans les environnements dynamiques, je sais gérer plusieurs demandes à la fois tout en gardant une grande attention au détail et à la cohérence des messages.',
  },
  skills: {
    title: 'Compétences clés',
    groups: [
      {
        label: 'Langues',
        skills: ['Français : avancé', 'Anglais : courant', 'Espagnol : langue maternelle'],
      },
      {
        label: 'Rédaction & traduction',
        skills: ['Rédaction et adaptation FR / EN / ES', 'Relecture, correction, harmonisation du ton', 'Contenus pour web, interne & marketing'],
      },
      {
        label: 'Communication & coordination',
        skills: ['Suivi de projets, travail en équipe', 'Gestion de priorités et de délais', 'Sens du service et de l’écoute'],
      },
      {
        label: 'Numérique, web & IA',
        skills: ['Design d’interface (Figma, Framer)', 'HTML5, CSS3, JavaScript (bases)', 'Outils d’IA générative (contenus & visuels)'],
      },
      {
        label: 'Textile & retail',
        skills: ['Connaissance des matières & du produit textile', 'Expérience dans le mobilier, la scène et l’hospitalier', 'Sens du détail, de la couleur et des tendances'],
      },
    ],
  },
  experience: {
    title: 'Expérience professionnelle',
    items: [
      {
        role: 'Dessinatrice textile',
        company: 'KECA International',
        location: 'Montréal, QC',
        dates: '2020 – 2022',
        tasks: [
          'Coordination de la production textile pour le mobilier (hôtels, restaurants).',
          'Préparation de fiches techniques, schémas et modèles 3D.',
          'Conception de patrons pour le moulage textile de fauteuils et chaises.',
        ],
      },
      {
        role: 'Dessinatrice textile',
        company: 'CHU Sainte-Justine',
        location: 'Montréal, QC',
        dates: '02.2023 – 08.2023',
        tasks: [
          'Conception et réparation de vêtements pour les besoins hospitaliers.',
          'Organisation de la logistique de blanchisserie et buanderie.',
        ],
      },
      {
        role: 'Dessinatrice textile & costumière',
        company: 'Opera House & MEGA',
        location: 'Santiago, Chili',
        dates: '2018 – 2019',
        tasks: [
          'Conception de costumes et recherche iconographique.',
          'Choix de matériaux, retouches et transformations de costumes.',
        ],
      },
    ],
  },
  professionalEducation: {
    title: 'Formation professionnelle',
    items: [
      {
        title: 'Production multimédia & design numérique – Cybercap',
        meta: 'Montréal, QC · 10.2024 – Aujourd’hui',
        tasks: [
          'Réalisation de sites web, images et illustrations numériques.',
          'Conception d’interfaces (wireframes, maquettes, prototypes).',
          'Développement de chatbots pour des organismes à but non lucratif.',
          'Participation à des projets vidéo et contenus corporatifs.',
        ],
      },
    ],
  },
  academicEducation: {
    title: 'Formation académique',
    items: [
      {
        title: 'Techniques des métiers d’art – Construction textile',
        meta: 'Cégep du Vieux Montréal · 2023 – 2024',
      },
      {
        title: 'DEC en conception scénique',
        meta: 'Institut d’art ARCOS, Chili · 2012 – 2015',
      },
    ],
  },
  interests: {
    title: 'Centres d’intérêt',
    description: 'Méditation Vipassana, randonnée, vélo, dessin, poésie, tissage, activités culturelles.',
  },
};
