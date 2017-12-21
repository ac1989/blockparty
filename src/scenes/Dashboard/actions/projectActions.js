export const addProject = () => ({
  type: 'ADD_PROJECT'
});

export const editProject = project => ({
  type: 'EDIT_PROJECT',
  payload: project
});
