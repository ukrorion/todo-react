import { createStore } from 'redux'
import Tasks from './reducers/tasks'

export const Store = createStore(Tasks);
