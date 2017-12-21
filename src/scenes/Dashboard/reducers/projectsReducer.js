import uuidv4 from 'uuid/v4';

const initialState = [
  {
    title: 'Weather App',
    description:
      'An app that lets you see into the climatic future! Displays weather on a nice map.',
    id: '301',
    images: {
      380: 'https://lorempixel.com/380/172/'
    },
    startDate: new Date(2017, 11, 12),
    endDate: new Date(2017, 11, 24),
    repo: 'https://github.com/me/mywedderapp',
    links: [
      'https://someweatherapi.com/',
      'https://github.com/someone/somestyleguide'
    ],
    children: ['201', '202', '203']
  },
  {
    title: 'Portfolio Site',
    description: 'An temp App.',
    id: '302',
    images: {
      380: 'https://lorempixel.com/380/172/'
    },
    startDate: new Date(2017, 11, 31),
    endDate: new Date(2018, 0, 7),
    repo: 'https://github.com/me/tempapp',
    links: [
      'https://someapi.com/',
      'https://github.com/someone/somestyleguide'
    ],
    children: []
  }
];

const newProject = () => {
  return {
    title: 'New Project',
    description: 'A brand new project.',
    id: uuidv4(),
    images: {},
    startDate: new Date(),
    endDate: undefined,
    repo: '',
    links: [],
    children: []
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [newProject(), ...state];
    case 'EDIT_PROJECT':
      return state.map(project => {
        if (project.id === action.payload.id) {
          return action.payload;
        } else {
          return project;
        }
      });
    default:
      return state;
  }
};
