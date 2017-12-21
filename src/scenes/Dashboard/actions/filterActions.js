export const setFilterBy = criteria => ({
  type: 'SET_FILTER_BY',
  payload: criteria
});

export const setFilterId = id => ({
  type: 'SET_FILTER_ID',
  payload: id
});

export const setFilterText = filterText => ({
  type: 'SET_FILTER_TEXT',
  payload: filterText
});
