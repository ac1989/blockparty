import uuidv4 from 'uuid/v4';

const initialState = [
  {
    title: 'Weather App Front End',
    description: 'Front end tasks for Weather App.',
    id: '201',
    links: ['https://github.com/me/myweatherapp/'],
    parent: '301'
  },
  {
    title: 'Weather App Back End',
    description: 'Back end tasks for Weather App.',
    id: '202',
    links: ['https://github.com/me/myweatherapp/'],
    parent: '301'
  },
  {
    title: 'Weather App Design',
    description: 'What the non code boys do.',
    id: '203',
    links: ['https://github.com/me/myweatherapp/'],
    parent: '201'
  },
  {
    title: 'Monkey',
    description: 'Zbra',
    id: '204',
    links: ['https://github.com/me/myweatherapp/'],
    parent: '302'
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MISSION':
      return [action.payload, ...state];
    case 'EDIT_MISSION':
      return state.map(mission => {
        if (mission.id === action.payload.id) {
          return action.payload;
        } else {
          return mission;
        }
      });
    default:
      return state;
  }
};
