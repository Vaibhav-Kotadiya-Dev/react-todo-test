import { FILTERS } from "./enum";

export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface TodosState {
  todos: Todo[];
  filter: FILTERS.ALL | FILTERS.COMPLETED | FILTERS.NOT_COMPLETED;
}