import { createReducer } from 'reduxsauce';
import { TodoTypes } from './actions';
import { Todo, TodosState } from '../types/interfaces';
import { FILTERS } from '../types/enum';

const INITIAL_STATE: TodosState = {
  todos: [
    { id: 1, title: 'Example Todo 1', description: 'This is the first example todo.', completed: false },
    { id: 2, title: 'Example Todo 2', description: 'This is the second example todo.', completed: false },
    { id: 3, title: 'Example Todo 3', description: 'This is the thied example todo.', completed: true },
  ],
  filter: FILTERS.ALL,
};

const addTodo = (state = INITIAL_STATE, { todo }: { todo: Todo }): TodosState => ({
  ...state,
  todos: [todo, ...state?.todos],
});

const toggleTodo = (state = INITIAL_STATE, { id }: { id: number }): TodosState => {
  const updatedTodos = state?.todos?.map?.(todo =>
    todo?.id === id ? { ...todo, completed: !todo?.completed } : todo
  );
  const completedTodoIndex = updatedTodos?.findIndex?.(todo => todo?.id === id && todo?.completed);
  if (completedTodoIndex !== -1) {
    const completedTodo = updatedTodos?.splice?.(completedTodoIndex, 1)?.[0];
    updatedTodos?.push?.(completedTodo);
  }
  return {
    ...state,
    todos: updatedTodos,
  };
};

const deleteTodo = (state = INITIAL_STATE, { id }: { id: number }): TodosState => ({
  ...state,
  todos: state?.todos?.filter?.(todo => todo?.id !== id),
});

const setFilter = (state = INITIAL_STATE, { filter }: { filter: FILTERS.ALL | FILTERS.COMPLETED | FILTERS.NOT_COMPLETED }) => ({
  ...state,
  filter,
});

const HANDLERS = {
  [TodoTypes.ADD_TODO]: addTodo,
  [TodoTypes.TOGGLE_TODO]: toggleTodo,
  [TodoTypes.DELETE_TODO]: deleteTodo,
  [TodoTypes.SET_FILTER]: setFilter,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
