const initialState = {
  filterBy: 'text',
  filterText: '',
  filterId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER_BY':
      console.log({ ...state, filterBy: action.payload });
      return { ...state, filterBy: action.payload };
    case 'SET_FILTER_ID':
      console.log({ ...state, filterId: action.payload });
      return { ...state, filterId: action.payload };
    case 'SET_FILTER_TEXT':
      return { ...state, filterText: action.payload };
    default:
      return state;
  }
};
