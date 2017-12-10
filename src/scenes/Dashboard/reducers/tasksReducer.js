const initialState = [
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

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
