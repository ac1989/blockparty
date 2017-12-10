export const tasks = [
  {
    title: 'Eloquent Javascript',
    description: 'Complete Chapter 10 of Eloquent JS.',
    isDue: false,
    id: 101
  },
  {
    title: 'React Docs',
    description: 'Read through the React documentation just one more time.',
    isDue: false,
    id: 102
  },
  {
    title: 'Wireframe Weather App',
    description: 'Make a wireframe for the app.',
    isDue: true,
    id: 103
  },
  {
    title: 'Scaffold Weather App Components',
    description: 'For gods sake do what the man says.',
    isDue: false,
    id: 104
  },
  {
    title: 'Weather App API',
    description: 'Scaffold Weather App API Routes',
    isDue: false,
    id: 105
  },
  {
    title: 'Finger Paint Layout',
    description: 'Use finger painting to make a design',
    isDue: true,
    id: 106
  }
];

export const missions = [
  {
    title: 'Weather App Front End',
    description: 'Front end tasks for Weather App.',
    id: 201,
    links: ['https://github.com/me/myweatherapp/'],
    parent: [301],
    children: [103, 104]
  },
  {
    title: 'Weather App Back End',
    description: 'Back end tasks for Weather App.',
    id: 202,
    links: ['https://github.com/me/myweatherapp/'],
    parent: [301],
    children: [105]
  },
  {
    title: 'Weather App Design',
    description: 'What the non code boys do.',
    id: 203,
    links: ['https://github.com/me/myweatherapp/'],
    parent: [201],
    children: []
  }
];

export const projects = [
  {
    title: 'Weather App',
    description:
      'An app that lets you see into the climatic future! Displays weather on a nice map.',
    id: 301,
    images: {
      380: 'https://lorempixel.com/380/172/'
    },
    repo: 'https://github.com/me/mywedderapp',
    links: [
      'https://someweatherapi.com/',
      'https://github.com/someone/somestyleguide'
    ],
    children: [201, 202]
  }
];
