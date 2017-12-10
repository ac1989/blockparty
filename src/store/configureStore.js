import { createStore, combineReducers } from 'redux';
import projectsReducer from '../scenes/Dashboard/reducers/projectsReducer';
import missionsReducer from '../scenes/Dashboard/reducers/missionsReducer';
import tasksReducer from '../scenes/Dashboard/reducers/tasksReducer';

export default () => {
  const store = createStore(
    combineReducers({
      projects: projectsReducer,
      missions: missionsReducer,
      tasks: tasksReducer
    })
  );
  return store;
};
