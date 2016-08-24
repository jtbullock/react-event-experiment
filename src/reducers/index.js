import { combineReducers } from 'redux';
import ActiveEvent from './active-event';
import SelectedTask from './selected-task';

const rootReducer = combineReducers({
  activeEvent: ActiveEvent,
  selectedTask: SelectedTask
});

export default rootReducer;
