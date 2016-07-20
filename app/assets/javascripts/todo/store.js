import { createStore, combineReducers } from 'redux'
import Tasks from './reducers/tasks'
import Filter from './reducers/filter'

const TodoApp = combineReducers({
  Tasks,
  Filter
});

export const Store = createStore(TodoApp);
