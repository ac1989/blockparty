const initialState = [
  {
    title: 'Eloquent Javascript',
    description: 'Complete Chapter 10 of Eloquent JS.',
    isDue: false,
    parent: undefined,
    id: '101'
  },
  {
    title: 'React Docs',
    description: 'Read through the React documentation just one more time.',
    isDue: false,
    parent: undefined,
    id: '102'
  },
  {
    title: 'Wireframe Weather App',
    description: 'Make a wireframe for the app.',
    isDue: true,
    parent: '201',
    id: '103'
  },
  {
    title: 'Scaffold Weather App Components',
    description: 'For gods sake do what the man says.',
    isDue: false,
    parent: '201',
    id: '104'
  },
  {
    title: 'Weather App API',
    description: 'Scaffold Weather App API Routes',
    isDue: false,
    parent: '202',
    id: '105'
  },
  {
    title: 'Finger Paint Layout',
    description: 'Use finger painting to make a design',
    isDue: true,
    parent: '203',
    id: '106'
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [action.payload, ...state];
    case 'EDIT_TASK':
      console.log('edit task');
      console.log(action);
      return state.map(task => {
        if (task.id === action.payload.id) {
          return action.payload;
        } else {
          return task;
        }
      });
    default:
      return state;
  }
};
