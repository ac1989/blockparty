const initialState = [
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

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
