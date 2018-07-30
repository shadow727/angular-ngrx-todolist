import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Todo } from '../stores/model';
import * as Actions from '../stores/actions';
import { AppState } from '../stores/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.todos = store.select('todos');
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.store.dispatch(new Actions.GetTodos());
  }

  add(title, content) {
    title = title.trim();
    if (!title) { return; }
    title = title.toString();
    this.store.dispatch(new Actions.AddTodo({title: title, content: content}));
  }

  delete(todo: Todo) {
    this.store.dispatch(new Actions.RemoveTodo(todo));
  }

}
