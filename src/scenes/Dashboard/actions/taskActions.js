import uuidv4 from 'uuid/v4';

export const addTask = parentId => {
  const newTask = {
    title: 'New Task',
    description: 'New Task',
    id: uuidv4(),
    parent: parentId
  };
  return {
    type: 'ADD_TASK',
    payload: newTask
  };
};

export const editTask = changes => ({
  type: 'EDIT_TASK',
  payload: changes
});
