import { createStore, combineReducers } from 'redux';
import { reducer as todosReducer } from './reducers';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
  