import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Todo } from '../stores/model';
import * as Actions from '../stores/actions';
import { AppState } from '../stores/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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

}
