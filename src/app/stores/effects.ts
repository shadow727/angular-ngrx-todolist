import { Injectable} from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of} from 'rxjs';
import { map, switchMap, catchError} from 'rxjs/operators';

import { Todo } from './model';
import * as TodoActions from './actions';

import { TodoService } from '../todo.service';

@Injectable()
export class TodoEffects {

  @Effect()
  gets$: Observable<Action> = this.actions$.pipe(
    ofType<TodoActions.GetTodos>(TodoActions.ActionTypes.GET_TODOS),
    switchMap(() => {
      return this.todoService.getTodos().pipe(
        map( (todos: Todo[]) => new TodoActions.GetTodosSuccess(todos)),
        catchError(err => of(new TodoActions.GetTodosError(err)))
      );
    })
  );

  @Effect()
  get$: Observable<Action> = this.actions$.pipe(
    ofType<TodoActions.GetTodo>(TodoActions.ActionTypes.GET_TODO),
    map(action => action.payload),
    switchMap((query) => {
      return this.todoService.getTodo(query as number).pipe(
        map( (todo: Todo) => new TodoActions.GetTodoSuccess(todo)),
        catchError(err => of(new TodoActions.GetTodoError(err)))
      );
    })
  );

  @Effect()
  add$: Observable<Action> = this.actions$.pipe(
    ofType<TodoActions.AddTodo>(TodoActions.ActionTypes.ADD_TODO),
    map(action => action.payload),
    switchMap(query => {
      return this.todoService.addTodo(query as Todo).pipe(
        map((todo: Todo) => new TodoActions.AddTodoSuccess(todo)),
        catchError(err => of (new TodoActions.AddTodoError(err)))
      );
    })
  );

  @Effect()
  delete$: Observable<Action> = this.actions$.pipe(
    ofType<TodoActions.RemoveTodo>(TodoActions.ActionTypes.REMOVE_TODO),
    map(action => action.payload),
    switchMap(query => {
      return this.todoService.deleteTodo(query as Todo).pipe(
        map((todo: Todo) => new TodoActions.RemoveTodoSuccess(todo)),
        catchError(err => of (new TodoActions.RemoveTodoError(err)))
      );
    })
  );

  @Effect()
  revise$: Observable<Action> = this.actions$.pipe(
    ofType<TodoActions.ReviseTodo>(TodoActions.ActionTypes.REVISE_TODO),
    map(action => action.payload),
    switchMap(query => {
      return this.todoService.updateTodo(query).pipe(
        map((todo: Todo) => new TodoActions.ReviseTodoSuccess(todo)),
        catchError(err => of (new TodoActions.ReviseTodoError(err)))
      );
    })
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}

}
