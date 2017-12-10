const initialState = [
  {
    title: 'Weather App',
    description:
      'An app that lets you see into the climatic future! Displays weather on a nice map.',
    id: '301',
    images: {
      380: 'https://lorempixel.com/380/172/'
    },
    repo: 'https://github.com/me/mywedderapp',
    links: [
      'https://someweatherapi.com/',
      'https://github.com/someone/somestyleguide'
    ],
    children: [201, 202, 203]
  },
  {
    title: 'Temp App',
    description: 'An temp App.',
    id: '302',
    images: {
      380: 'https://lorempixel.com/380/172/'
    },
    repo: 'https://github.com/me/tempapp',
    links: [
      'https://someapi.com/',
      'https://github.com/someone/somestyleguide'
    ],
    children: []
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
