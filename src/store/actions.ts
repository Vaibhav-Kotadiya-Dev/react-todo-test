import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  addTodo: ['todo'],
  toggleTodo: ['id'],
  deleteTodo: ['id'],
  setFilter: ['filter'],
});

export const TodoTypes = Types;
export const TodoActions = Creators;
