import { Todo } from './model';

export interface Detail {
  readonly todo: Todo;
}

export interface AppState {
  readonly todos: Todo[];
}

