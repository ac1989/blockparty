import uuidv4 from 'uuid/v4';

export const addMission = parentId => {
  const newMission = {
    title: 'New Mission',
    description: 'A shiny fresh mission.',
    id: uuidv4(),
    links: [],
    parent: parentId,
    children: []
  };

  return {
    type: 'ADD_MISSION',
    payload: newMission
  };
};

export const editMission = mission => ({
  type: 'EDIT_MISSION',
  payload: mission
});
