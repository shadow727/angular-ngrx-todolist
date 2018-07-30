import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Store } from '@ngrx/store';
import { Todo } from '../stores/model';
import * as Actions from '../stores/actions';
import { AppState, Detail } from '../stores/state';
import { Observable } from 'rxjs';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  @Input() todo: Todo;
  status: string;
  reviseFlag: Boolean;
  toggleStatus: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private location: Location,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodo(id).subscribe(todo => {
      this.todo = todo;
      this.reviseFlag = false;
      if (todo.status) {
        this.status = 'finished';
        this.toggleStatus = 'Back to unfinished';
      } else {
        this.status = 'unfinished';
        this.toggleStatus = 'I have finished!';
      }
    });
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.store.dispatch(new Actions.ReviseTodo(this.todo));
    this.revise();
  }

  revise() {
    this.reviseFlag = !this.reviseFlag;
  }

  toggle() {
    this.todo.status = !this.todo.status;
    if (this.reviseFlag) {
      this.reviseFlag = !this.reviseFlag;
    }
    this.store.dispatch(new Actions.ReviseTodo(this.todo));
    this.getTodo();
  }

}
