import { Action } from '@ngrx/store';
import { Todo } from './model';

export enum ActionTypes {
  ADD_TODO = '[Todo] Add',
  ADD_TODO_SUCCESS = '[Todo] Add Success',
  ADD_TODO_ERROR = '[Todo] Add Error',
  REMOVE_TODO = '[Todo] Remove',
  REMOVE_TODO_SUCCESS = '[Todo] Remove Success',
  REMOVE_TODO_ERROR = '[Todo] Remove Error',
  REVISE_TODO = '[Todo] Revise',
  REVISE_TODO_SUCCESS = '[Todo] Revise Success',
  REVISE_TODO_ERROR = '[Todo] Revise Error',
  GET_TODOS = '[Todo] Gets',
  GET_TODOS_SUCCESS = '[Todo] Gets Success',
  GET_TODOS_ERROR = '[Todo] Gets Error',
  GET_TODO = '[Todo] Get',
  GET_TODO_SUCCESS = '[Todo] Get Success',
  GET_TODO_ERROR = '[Todo] Get Error'
}

let nextID = 12;

export class AddTodo implements Action {
  readonly type = ActionTypes.ADD_TODO;
  constructor(public payload: {title: string, content: string }, public status = 'undinished', public id = nextID++ ) {}
}

export class AddTodoSuccess implements Action {
  readonly type = ActionTypes.ADD_TODO_SUCCESS;
  constructor(public payload: Todo ) {}
}

export class AddTodoError implements Action {
  readonly type = ActionTypes.ADD_TODO_ERROR;
  constructor(public payload: String) {}
}

export class RemoveTodo implements Action {
  readonly type = ActionTypes.REMOVE_TODO;
  constructor(public payload: Todo) {}
}

export class RemoveTodoSuccess implements Action {
  readonly type = ActionTypes.REMOVE_TODO_SUCCESS;
  constructor(public payload: Todo) {}
}

export class RemoveTodoError implements Action {
  readonly type = ActionTypes.REMOVE_TODO_ERROR;
  constructor(public payload: String) {}
}

export class ReviseTodo implements Action {
  readonly type = ActionTypes.REVISE_TODO;
  constructor(public payload: Todo) {}
}

export class ReviseTodoSuccess implements Action {
  readonly type = ActionTypes.REVISE_TODO_SUCCESS;
  constructor(public payload: Todo) {}
}

export class ReviseTodoError implements Action {
  readonly type = ActionTypes.REVISE_TODO_ERROR;
  constructor(public payload: String) {}
}

export class GetTodos implements Action {
  readonly type = ActionTypes.GET_TODOS;
}

export class GetTodosSuccess implements Action {
  readonly type = ActionTypes.GET_TODOS_SUCCESS;
  constructor(public payload: Todo[]) {}
}

export class GetTodosError implements Action {
  readonly type = ActionTypes.GET_TODOS_ERROR;
  constructor(public payload: String) {}
}

export class GetTodo implements Action {
  readonly type = ActionTypes.GET_TODO;
  constructor(public payload: number) {}
}

export class GetTodoSuccess implements Action {
  readonly type = ActionTypes.GET_TODO_SUCCESS;
  constructor(public payload: Todo) {}
}

export class GetTodoError implements Action {
  readonly type = ActionTypes.GET_TODO_ERROR;
  constructor(public payload: String) {}
}

export type Actions = AddTodo | AddTodoSuccess | AddTodoError
                      | RemoveTodo |RemoveTodoSuccess |RemoveTodoError
                      | ReviseTodo|ReviseTodoSuccess |ReviseTodoError
                      | GetTodos | GetTodosSuccess | GetTodosError
                      | GetTodo | GetTodoSuccess | GetTodoError;
